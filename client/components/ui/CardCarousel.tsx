import { ChartBar, Globe, Server } from "lucide-react";
import { useEffect, useRef, useState, cloneElement } from "react";

export type CardData = {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  media?: {
    type: "image" | "video";
    src: string;
    poster?: string;
    alt?: string;
  };
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
  const suppressRef = useRef(0); // timestamp to suppress automatic active updates during programmatic scrolls

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
  }, [isPaused, activeIndex, cards.length]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const children = Array.from(scroller.children) as HTMLElement[];

    function updateActive() {
      if (Date.now() < suppressRef.current) {
        rafRef.current = null;
        return;
      }

      const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(childCenter - scrollerCenter);
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

    updateActive();

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cards]);

  function centerItem(index: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const child = scroller.children[index] as HTMLElement | undefined;
    if (!child) return;

    const scrollerRect = scroller.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const childCenterInScroller = childRect.left + childRect.width / 2 - scrollerRect.left;
    const targetLeft = scroller.scrollLeft + (childCenterInScroller - scroller.clientWidth / 2);

    suppressRef.current = Date.now() + 700;

    scroller.scrollTo({ left: targetLeft, behavior: "smooth" });
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
          className="relative flex gap-4 overflow-x-auto py-8 px-6 snap-x snap-mandatory hide-scroll touch-pan-x"
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
                      ? ""
                      : ""
                  }`}
                  style={{ minHeight: 220 }}
                >
                  {/* Media (video/image) or icon */}
                  {c.media ? (
                    c.media.type === "video" ? (
                      <div className="mb-4 w-full rounded-lg overflow-hidden">
                        <video
                          src={c.media.src}
                          poster={c.media.poster}
                          controls
                          className="w-full h-40 object-cover bg-black"
                          preload="metadata"
                          playsInline
                        />
                      </div>
                    ) : (
                      <img
                        src={c.media.src}
                        alt={c.media.alt || c.title}
                        className="mb-4 w-full h-40 object-cover rounded-lg"
                      />
                    )
                  ) : (
                    <div
                      className={`mb-4 rounded-full p-2 inline-flex items-center justify-center transition-colors duration-300 ease-out text-black`}
                    >
                      {/* Icon color inherits currentColor */}
                      {c.icon ? (
                        // @ts-ignore
                        cloneElement(c.icon as React.ReactElement, {
                          color: "#000000",
                          size: 36,
                        })
                      ) : null}
                    </div>
                  )}

                  <h3 className="font-semibold text-[18px] leading-tight text-black">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-snug text-slate-700">
                    {c.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>

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
