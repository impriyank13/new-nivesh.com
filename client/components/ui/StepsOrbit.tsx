import React, { useEffect, useRef, useState } from "react";

type Step = {
  title: string;
  body: string[];
  cta: string;
  icon: React.ReactNode;
};

export default function StepsOrbit({
  steps = defaultSteps,
  onStepChange,
}: {
  steps?: Step[];
  onStepChange?: (index: number) => void;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const nodeRef = useRef<SVGCircleElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const stringRef = useRef<SVGPathElement | null>(null);
  const markersRef = useRef<SVGGElement | null>(null);

  // mobile refs
  const nodeRefMobile = useRef<SVGCircleElement | null>(null);
  const pathRefMobile = useRef<SVGPathElement | null>(null);
  const stringRefMobile = useRef<SVGPathElement | null>(null);
  const markersRefMobile = useRef<SVGGElement | null>(null);
  const scrollerMobileRef = useRef<HTMLDivElement | null>(null);

  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const prefersReduced = useRef<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    prefersReduced.current = !!(
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    function onResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!wrapperRef.current || !pathRef.current) return;

    const wrapper = wrapperRef.current;
    const path = pathRef.current;

    // choose path based on mobile/desktop
    const chosenPath = isMobile && pathRefMobile.current ? pathRefMobile.current : path;
    const chosenString = isMobile ? stringRefMobile.current ?? stringRef.current : stringRef.current;
    const chosenMarkers = isMobile ? markersRefMobile.current ?? markersRef.current : markersRef.current;

    const pathLength = chosenPath.getTotalLength();

    // delay initialization to next frame to ensure DOM defs measured
    requestAnimationFrame(() => {
      // initialize string stroke to full length so we can animate dashoffset
      if (chosenString) {
        chosenString.setAttribute("stroke-dasharray", String(pathLength));
        chosenString.setAttribute("stroke-dashoffset", String(pathLength));
      }

      // position markers initially
      if (chosenMarkers) {
        const children = Array.from(chosenMarkers.children) as SVGCircleElement[];
        children.forEach((child, idx) => {
          const segT = steps.length > 1 ? idx / (steps.length - 1) : 0;
          const p = chosenPath.getPointAtLength(segT * pathLength);
          child.setAttribute("cx", String(p.x));
          child.setAttribute("cy", String(p.y));
        });
      }
    });

    function clamp(v: number, a = 0, b = 1) {
      return Math.max(a, Math.min(b, v));
    }

    function update() {
      const rect = wrapper.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const totalScrollable = rect.height - viewportH;
      let scrolled = -rect.top;
      scrolled = clamp(scrolled, 0, totalScrollable);
      const progress = totalScrollable > 0 ? scrolled / totalScrollable : 0;

      const seg = 1 / steps.length;
      const rawIndex = Math.floor(progress / seg);
      const boundedIndex = Math.max(0, Math.min(steps.length - 1, rawIndex));

      if (boundedIndex !== active) {
        setActive(boundedIndex);
        if (onStepChange) onStepChange(boundedIndex);
      }

      const t = clamp(progress, 0, 1);

      // main node moves along the chosen path
      const point = chosenPath.getPointAtLength(t * pathLength);

      if (isMobile) {
        if (nodeRefMobile.current) {
          nodeRefMobile.current.setAttribute("cx", String(point.x));
          nodeRefMobile.current.setAttribute("cy", String(point.y));
        }
      } else {
        if (nodeRef.current) {
          nodeRef.current.setAttribute("cx", String(point.x));
          nodeRef.current.setAttribute("cy", String(point.y));
        }
      }

      // animate string reveal
      if (chosenString) {
        const dash = pathLength * (1 - t);
        chosenString.setAttribute("stroke-dashoffset", String(dash));
      }

      rafRef.current = requestAnimationFrame(update);
    }

    if (prefersReduced.current) {
      const obs = new IntersectionObserver(
        () => {
          const rect = wrapper.getBoundingClientRect();
          const viewportH = window.innerHeight;
          const totalScrollable = rect.height - viewportH;
          let scrolled = -rect.top;
          scrolled = clamp(scrolled, 0, totalScrollable);
          const progress = totalScrollable > 0 ? scrolled / totalScrollable : 0;
          const seg = 1 / steps.length;
          const rawIndex = Math.floor(progress / seg);
          const boundedIndex = Math.max(0, Math.min(steps.length - 1, rawIndex));
          if (boundedIndex !== active) {
            setActive(boundedIndex);
            if (onStepChange) onStepChange(boundedIndex);
          }
        },
        { threshold: Array.from({ length: steps.length }, (_, i) => i / (steps.length - 1)) }
      );
      obs.observe(wrapper);
      return () => obs.disconnect();
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [steps.length, onStepChange, active]);

  return (
    <div ref={wrapperRef} className="w-full relative">
      {/* Desktop pinned scrub */}
      <div className="hidden md:block h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center" ref={stickyRef}>
          <div className="w-full relative flex">
            <div className="w-1/2 pl-[8vw] flex items-center" style={{ maxWidth: 560 }}>
              <div className="text-left max-w-[560px]">
                <h2 className="text-2xl tracking-widest font-extrabold text-[#FFC527] uppercase mb-4">
                  {steps[active].title}
                </h2>
                <div className="text-[#EAF0FF] opacity-90 space-y-2 mb-6 leading-[1.6]">
                  {steps[active].body.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <button
                  className="inline-flex items-center gap-3 bg-white text-[#0A1E3D] px-4 py-2 rounded-full border border-[#D9E1F5] hover:-translate-y-0.5 transition-transform shadow-sm focus:outline-none"
                  aria-label={steps[active].cta}
                >
                  <span className="text-sm font-semibold">{steps[active].cta}</span>
                  <span className="w-6 h-6 bg-[#0A1E3D] text-white rounded-full inline-flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="w-1/2 flex items-center justify-center relative">
              <svg className="w-[680px] h-[680px]" viewBox="0 0 680 680" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* decorative orbit paths */}
                <path d="M80,340 C180,120 500,80 600,260" stroke="#5F7AA3" strokeOpacity="0.22" strokeWidth="1.2" fill="none" />
                <path d="M120,420 C220,600 540,640 640,460" stroke="#5F7AA3" strokeOpacity="0.18" strokeWidth="1" fill="none" />

                {/* straight vertical main line for node travel on the right */}
                <path
                  id="mainOrbit"
                  ref={pathRef}
                  d="M580,80 L580,600"
                  stroke="transparent"
                  fill="none"
                />

                {/* background faint vertical line */}
                <path d="M580,80 L580,600" stroke="#5F7AA3" strokeOpacity="0.12" strokeWidth="1" fill="none" />

                {/* animated string (yellow) */}
                <path id="stringPath" ref={stringRef} d="M580,80 L580,600" stroke="#FFC527" strokeWidth="2" fill="none" strokeLinecap="round" opacity="1" />

                {/* markers group */}
                <g ref={markersRef} className="pointer-events-none">
                  {Array.from({ length: steps.length }).map((_, i) => (
                    <circle key={i} r="10" fill="transparent" stroke="#F4F7FF" strokeWidth="2" opacity="0.12" />
                  ))}
                </g>

                {/* moving main node */}
                <g style={{ filter: "url(#glow)" }}>
                  <circle ref={nodeRef} cx="580" cy="80" r="70" fill="rgba(244,247,255,0.04)" stroke="#FFFFFF" strokeWidth="2" />

                  <foreignObject x="580" y="80" width="140" height="140" style={{ transform: "translate(-50%,-50%)" }}>
                    <div className="w-[140px] h-[140px] flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20">{steps[active].icon}</div>
                    </div>
                  </foreignObject>
                </g>
              </svg>

              <div className="absolute right-8 bottom-8 text-right">
                <div className="text-white font-semibold text-xl">
                  <span className="text-white">{pad(active + 1)}</span>
                  <span className="text-[#7E8EA9]">/{pad(steps.length)}</span>
                </div>
                <div className="w-24 h-1 bg-[#1F2B40] mt-2 rounded overflow-hidden">
                  <div className="h-1 bg-[#FFC527] transition-width" style={{ width: `${Math.round(((active + 1) / steps.length) * 100)}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile panels */}
      <div className="md:hidden">
        {/* mobile fixed right-side svg controlling node + string */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <svg className="w-[120px] h-[520px]" viewBox="0 0 120 520" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <filter id="glow-mobile" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path id="mobileOrbit" ref={pathRefMobile} d="M60,20 L60,500" stroke="transparent" fill="none" />
            <path d="M60,20 L60,500" stroke="#5F7AA3" strokeOpacity="0.12" strokeWidth="1" fill="none" />
            <path id="stringPathMobile" ref={stringRefMobile} d="M60,20 L60,500" stroke="#FFC527" strokeWidth="2" fill="none" strokeLinecap="round" />

            <g ref={markersRefMobile}>
              {Array.from({ length: steps.length }).map((_, i) => (
                <circle key={i} r="8" fill="transparent" stroke="#F4F7FF" strokeWidth="2" opacity="0.12" />
              ))}
            </g>

            <g style={{ filter: "url(#glow-mobile)" }}>
              <circle ref={nodeRefMobile} cx="60" cy="20" r="44" fill="rgba(244,247,255,0.04)" stroke="#FFFFFF" strokeWidth="2" />
              <foreignObject x="60" y="20" width="88" height="88" style={{ transform: "translate(-50%,-50%)" }}>
                <div className="w-[88px] h-[88px] flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12">{steps[active].icon}</div>
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>

        <div className="h-screen snap-y snap-mandatory overflow-y-auto hide-scroll">
          {steps.map((s, i) => (
            <section key={i} className="h-screen snap-start flex items-center justify-start px-6" aria-hidden={active !== i}>
              <div className="max-w-md text-left w-full">
                <h2 className="text-2xl tracking-widest font-extrabold text-[#FFC527] uppercase mb-4">{s.title}</h2>
                <div className="text-[#EAF0FF] opacity-90 space-y-2 mb-6 leading-[1.6]">
                  {s.body.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <button className="inline-flex items-center gap-3 bg-white text-[#0A1E3D] px-4 py-2 rounded-full border border-[#D9E1F5] focus:outline-none">
                  <span className="text-sm font-semibold">{s.cta}</span>
                </button>

                <div className="mt-6 text-left">
                  <div className="text-white font-semibold text-lg">
                    <span className="text-white">{pad(i + 1)}</span>
                    <span className="text-[#7E8EA9]">/{pad(steps.length)}</span>
                  </div>
                  <div className="w-36 h-1 bg-[#1F2B40] mt-2 rounded overflow-hidden">
                    <div className="h-1 bg-[#FFC527]" style={{ width: `${Math.round(((i + 1) / steps.length) * 100)}%` }} />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const ATMIcon = (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="#F4F7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="52" height="44" rx="4" />
    <rect x="14" y="18" width="36" height="18" rx="2" />
    <rect x="18" y="40" width="28" height="6" rx="1" fill="#FFC527" stroke="#FFC527" />
  </svg>
);

const CardIcon = (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="#F4F7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="16" width="52" height="32" rx="4" />
    <rect x="10" y="22" width="28" height="12" rx="1" />
    <path d="M44 26c3 0 5-3 8-3" stroke="#FFC527" />
  </svg>
);

const PhoneIcon = (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="#F4F7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="18" y="8" width="28" height="48" rx="6" />
    <circle cx="32" cy="44" r="2" fill="#FFC527" stroke="#FFC527" />
    <path d="M40 16l6-2" stroke="#FFC527" />
  </svg>
);

const defaultSteps: Step[] = [
  {
    title: "THE PAYMENT STATION",
    body: ["Install payment station in minutes.", "Secure, fast, and offline-capable."],
    cta: "Find Out More",
    icon: ATMIcon,
  },
  {
    title: "PLATFORM AS A SERVICE",
    body: ["Extend with APIs & integrations.", "Analytics, reconciliation, and routing."],
    cta: "Find Out More",
    icon: CardIcon,
  },
  {
    title: "MOBILE APPLICATION",
    body: ["Customer payments & wallets.", "Fast onboarding and self-service."],
    cta: "Get SelfPay Now",
    icon: PhoneIcon,
  },
];
