import React from "react";

const awards = [
  { id: "a1", title: "Recognized by AMFI", desc: "2024" },
  { id: "a2", title: "Wealth Tech 100", desc: "2023" },
  { id: "a3", title: "Best Performer in Mutual Fund", desc: "2022" },
  { id: "a4", title: "Top Startup Award", desc: "2021" },
  { id: "a5", title: "Innovation in Finance", desc: "2020" },
];

export default function AwardsMarquee() {
  const items = [...awards, ...awards]; // duplicate for seamless loop

  return (
    <section className="w-full rounded-2xl bg-white shadow-sm py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-6">
          <p className="text-sm text-slate-500 tracking-wide">Awards & Recognition</p>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">Trusted by industry leaders</h3>
        </div>

        <div className="relative overflow-hidden">
          {/* marquee track */}
          <div
            className="flex items-center space-x-6 will-change-transform"
            style={{
              animation: "marquee 20s linear infinite",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = "running";
            }}
            onFocus={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
            }}
            onBlur={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState = "running";
            }}
            aria-hidden={false}
          >
            {items.map((a, i) => (
              <div
                key={`${a.id}-${i}`}
                className="flex-shrink-0 w-44 md:w-56 p-3 bg-white rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                tabIndex={0}
                role="group"
              >
                <div className="flex items-center justify-center mb-3 h-20">
                  {/* simple trophy SVG */}
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M8 2h8v2H8z" fill="#FFD166" />
                    <path d="M7 4h10v2a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V4z" fill="#FFB4A2" />
                    <path d="M9 12h6v2H9z" fill="#FFF1E6" />
                    <path d="M10 14h4v4h-4z" fill="#FFC6A9" />
                  </svg>
                </div>

                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-900">{a.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          /* ensure the marquee always displays items in a row without wrapping */
          .marquee-track {
            display: flex;
            gap: 1.5rem;
            align-items: center;
          }

          /* reduce motion for users who prefer reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
