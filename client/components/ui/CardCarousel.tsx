import React, { useEffect, useRef, useState } from "react";
import { ChartBar, Globe, Server } from "lucide-react";

type CardData = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const sampleCards: CardData[] = [
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    description:
      "Access a wide array of mutual fund schemes from multiple AMCs. Features include SIPs, one-time investments, switching between schemes, SWP, STP and instant redemption (liquid up to ₹50,000). Sources: AppAdvice, Cafemutual.",
    icon: <ChartBar size={36} />,
  },
  {
    id: "corporate-fd",
    title: "Corporate FDs",
    description: "Corporate Fixed Deposits included in the product portfolio expansion. Source: Cafemutual.",
    icon: <Server size={36} />,
  },
  {
    id: "p2p",
    title: "P2P Lending",
    description: "Peer-to-peer lending products are part of the current portfolio. Source: Cafemutual.",
    icon: <Globe size={36} />,
  },
  {
    id: "pms",
    title: "PMS",
    description: "Portfolio Management Services available through the platform. Source: Cafemutual.",
    icon: <Server size={36} />,
  },
  {
    id: "insurance",
    title: "Insurance (coming soon)",
    description: "Insurance planned to be added in the coming months following funding. Source: Cafemutual.",
    icon: <Globe size={36} />,
  },
  {
    id: "lending-products",
    title: "Lending Products (upcoming)",
    description: "Additional lending products listed as upcoming additions. Source: Cafemutual.",
    icon: <Server size={36} />,
  },
  {
    id: "features",
    title: "Key Mutual Fund Features",
    description:
      "SIP, One-time investments, Switch between schemes, SWP, STP, Instant Redemption (liquid up to ₹50,000). Sources: AppAdvice, Cafemutual.",
    icon: <ChartBar size={36} />,
  },
];

export default function CardCarousel({
  cards = sampleCards,
}: {
  cards?: CardData[];
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const interval = setInterval(() => {
      const length = cards.length || scroller.children.length;
      if (!length) return;
      const next = (activeIndex + 1) % length;
      centerItem(next);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex, cards.length, centerItem]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const children = Array.from(scroller.children) as HTMLElement[];

    function updateActive() {
      const rect = scroller.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, idx) => {
        const r = child.getBoundingClientRect();
        const childCenter = r.left + r.width / 2;
        const distance = Math.abs(childCenter - centerX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
      rafRef.current = null;
    }

    function onScroll() {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(updateActive);
    }

    // initial set
    updateActive();

    scroller.addEventListener("scroll", onScroll, { passive: true });

    // recompute on resize
    window.addEventListener("resize", updateActive);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cards]);

  // helper to center an item when clicked
  function centerItem(index: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const child = scroller.children[index] as HTMLElement | undefined;
    if (!child) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const offset = childRect.left + childRect.width / 2 - (scrollerRect.left + scrollerRect.width / 2);
    scroller.scrollBy({ left: offset, behavior: "smooth" });
    setActiveIndex(index);
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div
          ref={scrollerRef}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchCancel={() => setIsPaused(false)}
          className="relative flex gap-4 overflow-x-auto py-8 px-6 snap-x snap-mandatory scrollbar-hide touch-pan-x"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" as any }}
        >
          {cards.map((c, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={c.id}
                onClick={() => centerItem(idx)}
                className={`flex-none snap-center transition-transform duration-300 ease-out transform ${
                  isActive ? "scale-105" : "scale-100"
                } w-[80%] md:w-[42%] lg:w-[30%]`}
                aria-hidden={false}
              >
                <article
                  className={`mx-2 rounded-[14px] border border-[#E5E7EB] p-6 flex flex-col items-center text-center h-full transition-colors duration-300 ease-out ${
                    isActive
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-[#F9FAFB] text-[#1F2937]"
                  }`}
                  style={{ minHeight: 220 }}
                >
                  <div
                    className={`mb-4 rounded-full p-2 inline-flex items-center justify-center transition-colors duration-300 ease-out ${
                      isActive ? "text-white" : "text-[#1F2937]"
                    }`}
                  >
                    {/* Icon color inherits currentColor */}
                    {React.cloneElement(c.icon as React.ReactElement, {
                      color: isActive ? "#FFFFFF" : "#1F2937",
                      size: 36,
                    })}
                  </div>

                  <h3 className={`font-semibold text-[18px] leading-tight ${isActive ? "text-white" : "text-[#111827]"}`}>
                    {c.title}
                  </h3>
                  <p className={`mt-2 text-[14px] leading-snug ${isActive ? "text-white/90" : "text-[#9CA3AF]"}`}>
                    {c.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center mt-4 space-x-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => centerItem(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeIndex}
              className={`rounded-full transition-all focus:outline-none ${
                i === activeIndex
                  ? "w-3 h-3 bg-[#1E3A8A] scale-110"
                  : "w-3 h-3 bg-[#D1D5DB]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
