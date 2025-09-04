import React, { useEffect, useRef, useState } from "react";
import { clientSteps, partnerSteps } from "./OnboardingIconsAndSteps";

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
  const nodeGroupRef = useRef<SVGGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const stringRef = useRef<SVGPathElement | null>(null);
  const markersRef = useRef<SVGGElement | null>(null);

  // mobile refs
  const nodeRefMobile = useRef<SVGCircleElement | null>(null);
  const nodeGroupMobileRef = useRef<SVGGElement | null>(null);
  const pathRefMobile = useRef<SVGPathElement | null>(null);
  const stringRefMobile = useRef<SVGPathElement | null>(null);
  const markersRefMobile = useRef<SVGGElement | null>(null);
  const scrollerMobileRef = useRef<HTMLDivElement | null>(null);

  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const prefersReduced = useRef<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  // toggle between client and partner steps (defaults to client)
  const [mode, setMode] = useState<'client' | 'partner'>('client');
  const [activeSteps, setActiveSteps] = useState<Step[]>(steps && steps.length ? steps : clientSteps);

  // keep activeSteps in sync when a custom `steps` prop is provided
  useEffect(() => {
    if (steps && steps.length) setActiveSteps(steps);
  }, [steps]);

  // update activeSteps when the mode toggle changes
  useEffect(() => {
    if (mode === 'client') setActiveSteps(clientSteps);
    else setActiveSteps(partnerSteps);
    setActive(0);
    if (scrollerMobileRef.current) scrollerMobileRef.current.scrollTo({ top: 0, behavior: 'auto' });
  }, [mode]);

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
    });

    function clamp(v: number, a = 0, b = 1) {
      return Math.max(a, Math.min(b, v));
    }

    function update() {
      let progress = 0;

    if (isMobile && scrollerMobileRef.current) {
      const scroller = scrollerMobileRef.current;
      const totalScrollable = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
      const scrolled = scroller.scrollTop;
      progress = totalScrollable > 0 ? clamp(scrolled / totalScrollable, 0, 1) : 0;

      // Determine active index based on which section is closest to viewport center to avoid skips
      const children = Array.from(scroller.children) as HTMLElement[];
      const viewportCenter = window.innerHeight / 2;
      let closest = 0;
      let closestDist = Infinity;
      children.forEach((child, idx) => {
        const r = child.getBoundingClientRect();
        const childCenter = r.top + r.height / 2;
        const dist = Math.abs(childCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = idx;
        }
      });
      const boundedIndex = Math.max(0, Math.min(activeSteps.length - 1, closest));
      if (boundedIndex !== active) {
        setActive(boundedIndex);
        if (onStepChange) onStepChange(boundedIndex);
      }
    } else {
      const rect = wrapper.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const totalScrollable = rect.height - viewportH;
      let scrolled = -rect.top;
      scrolled = clamp(scrolled, 0, totalScrollable);
      progress = totalScrollable > 0 ? scrolled / totalScrollable : 0;

      const seg = 1 / activeSteps.length;
      const rawIndex = Math.floor(progress / seg);
      const boundedIndex = Math.max(0, Math.min(activeSteps.length - 1, rawIndex));

      if (boundedIndex !== active) {
        setActive(boundedIndex);
        if (onStepChange) onStepChange(boundedIndex);
      }
    }

    const t = clamp(progress, 0, 1);

    // main node moves along the chosen path
    const point = chosenPath.getPointAtLength(t * pathLength);

      if (isMobile) {
        if (nodeGroupMobileRef.current) {
          nodeGroupMobileRef.current.setAttribute("transform", `translate(${point.x},${point.y})`);
        } else if (nodeRefMobile.current) {
          nodeRefMobile.current.setAttribute("cx", String(point.x));
          nodeRefMobile.current.setAttribute("cy", String(point.y));
        }
      } else {
        if (nodeGroupRef.current) {
          nodeGroupRef.current.setAttribute("transform", `translate(${point.x},${point.y})`);
        } else if (nodeRef.current) {
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
          const seg = 1 / activeSteps.length;
          const rawIndex = Math.floor(progress / seg);
          const boundedIndex = Math.max(0, Math.min(activeSteps.length - 1, rawIndex));
          if (boundedIndex !== active) {
            setActive(boundedIndex);
            if (onStepChange) onStepChange(boundedIndex);
          }
        },
        { threshold: Array.from({ length: activeSteps.length }, (_, i) => i / (activeSteps.length - 1)) }
      );
      obs.observe(wrapper);
      return () => obs.disconnect();
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeSteps.length, onStepChange, active, isMobile]);

  // Mobile: snap to nearest section on scroll end for smooth one-by-one behavior
  useEffect(() => {
    if (!scrollerMobileRef.current || !isMobile) return;
    const scroller = scrollerMobileRef.current;
    let timeout: number | null = null;

    function onScroll() {
      if (timeout) window.clearTimeout(timeout);
      // debounce to detect scroll end
      timeout = window.setTimeout(() => {
        const children = Array.from(scroller.children) as HTMLElement[];
        const viewportCenter = window.innerHeight / 2;
        let closest = 0;
        let closestDist = Infinity;
        children.forEach((child, idx) => {
          const r = child.getBoundingClientRect();
          const childCenter = r.top + r.height / 2;
          const dist = Math.abs(childCenter - viewportCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closest = idx;
          }
        });
        const target = children[closest];
        if (target) {
          scroller.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        }
      }, 120);
    }

    scroller.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      if (timeout) window.clearTimeout(timeout);
    };
  }, [isMobile]);

  const currentStep = activeSteps[active] as any;
  const CurrentIconComp = currentStep?.iconComponent as any;
  const CurrentIconJSX = currentStep?.icon ?? null;

  return (
    <div ref={wrapperRef} className="w-full relative">
      {/* Mode toggle: Client / Partner */}
      <div className="flex gap-3 justify-center py-4">
        <button onClick={() => setMode('client')} className={`px-4 py-2 rounded-full font-semibold transition-colors ${mode === 'client' ? 'bg-[#FFC527] text-[#0A1E3D]' : 'bg-transparent border border-[#3B4B66] text-white'}`}>
          Client Onboarding
        </button>
        <button onClick={() => setMode('partner')} className={`px-4 py-2 rounded-full font-semibold transition-colors ${mode === 'partner' ? 'bg-[#FFC527] text-[#0A1E3D]' : 'bg-transparent border border-[#3B4B66] text-white'}`}>
          Partner Onboarding
        </button>
      </div>
      {/* Desktop pinned scrub */}
      <div className="hidden md:block h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center" ref={stickyRef}>
          <div className="w-full relative flex">
            <div className="w-1/2 pl-[8vw] flex items-center" style={{ maxWidth: 560 }}>
              <div className="text-left max-w-[560px]">
                <h2 className="text-2xl tracking-widest font-extrabold text-[#FFC527] uppercase mb-4">
                  {activeSteps[active].title}
                </h2>
                <div className="text-[#EAF0FF] opacity-90 space-y-2 mb-6 leading-[1.6]">
                  {activeSteps[active].body.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <button
                  className="inline-flex items-center gap-3 bg-white text-[#0A1E3D] px-4 py-2 rounded-full border border-[#D9E1F5] hover:-translate-y-0.5 transition-transform shadow-sm focus:outline-none"
                  aria-label={activeSteps[active].cta}
                >
                  <span className="text-sm font-semibold">{activeSteps[active].cta}</span>
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


                {/* straight vertical main line for node travel on the right */}
                <path
                  id="mainOrbit"
                  ref={pathRef}
                  d="M580,80 L580,600"
                  stroke="none"
                  fill="none"
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />

                {/* background faint vertical line */}
                <path d="M580,80 L580,600" stroke="#5F7AA3" strokeOpacity="0.12" strokeWidth="1" fill="none" />

                {/* animated string (yellow) */}
                <path id="stringPath" ref={stringRef} d="M580,80 L580,600" stroke="#FFC527" strokeWidth="2" fill="none" strokeLinecap="round" opacity="1" />


                {/* moving main node - group so circle and icon move together */}
                <g ref={nodeGroupRef} style={{ color: '#FFC527' }} transform={`translate(580,170.7730712890625)`}>
                  {/* subtle outer ring to highlight the circle (no blur) */}
                  <circle cx={0} cy={0} r={40} fill="none" stroke="#FFC527" strokeWidth={8} strokeOpacity={0.08} />
                  {/* inner highlighted circle */}
                  <circle ref={nodeRef} cx={0} cy={0} r={35} fill="rgba(255,197,39,0.08)" stroke="#FFC527" strokeWidth={2} />
                  {/* render icon SVG centered at 0,0 (smaller for half size) without glow */}
                  <g transform={`translate(-24,-24)`}>
                    {CurrentIconComp ? <CurrentIconComp size={48} /> : (CurrentIconJSX ? CurrentIconJSX : null)}
                  </g>
                </g>
              </svg>

              <div className="absolute right-8 bottom-8 text-right">
                <div className="text-white font-semibold text-xl">
                  <span className="text-white">{pad(active + 1)}</span>
                  <span className="text-[#7E8EA9]">/{pad(activeSteps.length)}</span>
                </div>
                <div className="w-24 h-1 bg-[#1F2B40] mt-2 rounded overflow-hidden">
                  <div className="h-1 bg-[#FFC527] transition-width" style={{ width: `${Math.round(((active + 1) / activeSteps.length) * 100)}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile panels */}
      <div className="md:hidden relative">
        {/* mobile fixed right-side svg controlling node + string (absolute) */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <svg className="w-[140px] h-[520px]" viewBox="0 0 140 520" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <filter id="glow-mobile" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path id="mobileOrbit" ref={pathRefMobile} d="M110,20 L110,500" stroke="transparent" fill="none" />
            <path d="M110,20 L110,500" stroke="#5F7AA3" strokeOpacity="0.12" strokeWidth="1" fill="none" />
            <path id="stringPathMobile" ref={stringRefMobile} d="M110,20 L110,500" stroke="#FFC527" strokeWidth="2" fill="none" strokeLinecap="round" />


            <g ref={nodeGroupMobileRef} style={{ color: '#FFC527' }} transform={`translate(110,170.7730712890625)`}>
              {/* outer subtle ring */}
              <circle cx={0} cy={0} r={14} fill="none" stroke="#FFC527" strokeWidth={6} strokeOpacity={0.08} />
              <circle ref={nodeRefMobile} cx={0} cy={0} r={11} fill="rgba(255,197,39,0.08)" stroke="#FFC527" strokeWidth={2} />
              <g transform={`translate(-10,-10)`}>
                {CurrentIconComp ? <CurrentIconComp size={18} /> : (CurrentIconJSX ? CurrentIconJSX : null)}
              </g>
            </g>
          </svg>
        </div>

        <div ref={scrollerMobileRef} className="h-screen snap-y snap-mandatory overflow-y-auto hide-scroll smooth-scroll" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y', overscrollBehavior: 'contain' }}>
          {activeSteps.map((s, i) => (
            <section key={i} className="h-screen snap-start flex items-center justify-start" aria-hidden={active !== i} style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
              <div className={`max-w-md text-left w-full transition-all duration-300 ease-out ${active === i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'}`}>
                <h2 className="text-2xl tracking-widest font-extrabold text-[#FFC527] uppercase mb-4">{s.title}</h2>
                <div className="text-[#EAF0FF] opacity-90 space-y-2 mb-6 leading-[1.6]">
                  {s.body.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <button className="inline-flex items-center gap-3 bg-white text-[#0A1E3D] px-4 py-2 rounded-full border border-[#D9E1F5] focus:outline-none">
                  <span className="text-sm font-semibold">{s.cta}</span>
                </button>
              </div>
            </section>
          ))}
        </div>

        {/* mobile snap-to-section smooth handler */}

        {/* Mobile global counter and progress (absolute bottom-right) */}
        <div className="absolute right-4 bottom-4 z-20 text-right">
          <div className="text-white font-semibold text-lg">
            <span className="text-white">{pad(active + 1)}</span>
            <span className="text-[#7E8EA9]">/{pad(activeSteps.length)}</span>
          </div>
          <div className="w-36 h-1 bg-[#1F2B40] mt-2 rounded overflow-hidden">
            <div className="h-1 bg-[#FFC527] transition-all" style={{ width: `${Math.round(((active + 1) / activeSteps.length) * 100)}%` }} />
          </div>
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
