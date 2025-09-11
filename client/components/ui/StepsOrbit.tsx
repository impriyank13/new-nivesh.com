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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stringRef = useRef<SVGPathElement>(null);
  const nodeGroupRef = useRef<SVGGElement>(null);

  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mode, setMode] = useState<"client" | "partner">("client");
  const [activeSteps, setActiveSteps] = useState<Step[]>(
    steps.length ? steps : clientSteps
  );

  useEffect(() => {
    if (steps.length) setActiveSteps(steps);
  }, [steps]);

  useEffect(() => {
    setActiveSteps(mode === "client" ? clientSteps : partnerSteps);
    setActive(0);
  }, [mode]);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // === Animate the node along path ===
  useEffect(() => {
    if (!pathRef.current || !stringRef.current) return;

    const path = pathRef.current;
    const string = stringRef.current;
    const node = nodeGroupRef.current;
    const length = path.getTotalLength();

    string.setAttribute("stroke-dasharray", `${length}`);
    string.setAttribute("stroke-dashoffset", `${length}`);

    function update() {
      const rect = wrapperRef.current?.getBoundingClientRect();
      const viewH = window.innerHeight;
      const total = (rect?.height ?? 0) - viewH;
      const scrolled = Math.min(Math.max(-(rect?.top ?? 0), 0), total);
      const progress = total > 0 ? scrolled / total : 0;

      const seg = 1 / activeSteps.length;
      const idx = Math.min(
        activeSteps.length - 1,
        Math.floor(progress / seg)
      );
      if (idx !== active) {
        setActive(idx);
        onStepChange?.(idx);
      }

      const pt = path.getPointAtLength(progress * length);
      if (node) node.setAttribute("transform", `translate(${pt.x},${pt.y})`);
      string.setAttribute("stroke-dashoffset", `${length * (1 - progress)}`);
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [activeSteps.length, onStepChange, active]);

  const CurrentIcon = activeSteps[active]?.icon;

  return (
    <div ref={wrapperRef} className="w-full">
      {/* Sticky Header */}
      <StickyHeader mode={mode} onChange={setMode} />

      <div className="relative grid grid-cols-1 md:grid-cols-[60%_40%]">
        {/* Left side text */}
        <div className="px-6 md:px-12">
          {activeSteps.map((step, i) => (
            <section
              key={i}
              className="min-h-screen flex items-center"
              aria-hidden={active !== i}
            >
              <div
                className={`transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-0"
                  }`}
              >
                <h2 className="text-2xl font-extrabold text-[#0c4a6e] mb-4 uppercase">
                  {step.title}
                </h2>
                <div className="space-y-2 text-sm text-slate-700 mb-6">
                  {step.body.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                {step.cta && (
                  <button className="inline-flex items-center gap-2 bg-white text-[#0A1E3D] px-4 py-2 rounded-full border shadow-sm">
                    {step.cta}
                  </button>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Right side: sticky icon */}
        <div className="hidden md:flex justify-center items-center sticky top-20 h-[80vh]">
          <svg
            viewBox="0 0 680 680"
            className="w-[500px] h-[500px]"
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              d="M580,80 L580,552"
              stroke="none"
              fill="none"
              style={{ display: "none" }}
            />
            <path
              d="M580,80 L580,552"
              stroke="#5F7AA3"
              strokeOpacity="0.12"
            />
            <path
              ref={stringRef}
              d="M580,80 L580,552"
              stroke="#0c4a6e"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <g ref={nodeGroupRef} transform="translate(580,80)">
              <circle r={36} fill="#0c4a6e" />
              <g transform="translate(-24,-24)">{CurrentIcon}</g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function StickyHeader({
  mode,
  onChange,
}: {
  mode: "client" | "partner";
  onChange: (m: "client" | "partner") => void;
}) {
  return (
    <div className="sticky top-0 z-30 bg-white py-4 flex justify-center gap-4 shadow-sm">
      <button
        onClick={() => onChange("client")}
        className={`px-4 py-2 rounded-full font-semibold ${mode === "client"
            ? "bg-[#0c4a6e] text-white"
            : "border border-[#3B4B66] text-slate-700"
          }`}
      >
        Client Onboarding
      </button>
      <button
        onClick={() => onChange("partner")}
        className={`px-4 py-2 rounded-full font-semibold ${mode === "partner"
            ? "bg-[#0c4a6e] text-white"
            : "border border-[#3B4B66] text-slate-700"
          }`}
      >
        Partner Onboarding
      </button>
    </div>
  );
}

/* Icons */
const ATMIcon = (
  <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#F4F7FF">
    <rect x="6" y="10" width="52" height="44" rx="4" />
    <rect x="14" y="18" width="36" height="18" rx="2" />
    <rect x="18" y="40" width="28" height="6" fill="#0c4a6e" />
  </svg>
);

const CardIcon = (
  <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#F4F7FF">
    <rect x="6" y="16" width="52" height="32" rx="4" />
    <rect x="10" y="22" width="28" height="12" rx="1" />
    <path d="M44 26c3 0 5-3 8-3" stroke="#0c4a6e" />
  </svg>
);

const PhoneIcon = (
  <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#F4F7FF">
    <rect x="18" y="8" width="28" height="48" rx="6" />
    <circle cx="32" cy="44" r="2" fill="#0c4a6e" />
    <path d="M40 16l6-2" stroke="#0c4a6e" />
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
