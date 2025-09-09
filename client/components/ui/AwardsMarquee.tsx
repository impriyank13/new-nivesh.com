import React from "react";

const awards = [
  {
    id: "a1",
    title: "Recognized by AMFI for Growth & Inclusion",
    desc: "",
    src: "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Fc32f6d57ceda4c518a7267e66c448826?format=webp&width=800",
  },
  {
    id: "a2",
    title: "Best Performer in MFD Category",
    desc: "",
    src: "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F5aaf8d75897d440289633ffedd84751c?format=webp&width=800",
  },
  {
    id: "a3",
    title: "Best SIP Performer in MFD Category",
    desc: "",
    src: "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F747a7d68a119469c9c4f43505331a45b?format=webp&width=800",
  },
  {
    id: "a4",
    title: "50 Most Trusted BFSI Brands",
    desc: "",
    src: "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Ff952b975ed9d44e4a1f7ef60b5e0bc81?format=webp&width=800",
  },
  {
    id: "a5",
    title: "Best Performer in Mutual Fund 2022-23",
    desc: "",
    src: "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Fdf1393bcfc7c4cceac18cd2a030ae3ff?format=webp&width=800",
  },
  {
    id: "a6",
    title: "Excellence in Finance",
    desc: "2019",
    src: "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Ff01751f6543749f3a48abe3dbe7d70bf?format=webp&width=800",
  },
  {
    id: "a7",
    title: "Startup Superhero Hunt",
    desc: "2018",
    src: "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Ff19464255216486693756145cb27506a?format=webp&width=800",
  },
  {
    id: "a8",
    title: "2020 Wealth Tech 100",
    desc: "",
    src: "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Fe12becc5fdb64e06968efcf88b52243f?format=webp&width=800",
  },
];

export default function AwardsMarquee() {
  const items = [...awards, ...awards]; // duplicate for seamless loop

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-6">
          <p className="text-sm text-slate-500 tracking-wide">
            Awards & Recognition
          </p>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
            Trusted by industry leaders
          </h3>
        </div>

        <div className="relative overflow-hidden">
          {/* marquee track */}
          <div
            className="marquee-track flex items-center space-x-6 will-change-transform"
            style={{
              animation: "marquee 20s linear infinite",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState =
                "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState =
                "running";
            }}
            onFocus={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState =
                "paused";
            }}
            onBlur={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState =
                "running";
            }}
            aria-hidden={false}
          >
            {items.map((a, i) => (
              <div
                key={`${a.id}-${i}`}
                className="flex-shrink-0 w-64 md:w-80 p-3 bg-white rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
                tabIndex={0}
                role="group"
              >
                <div className="flex items-center justify-center mb-3 h-36 w-full">
                  <img
                    src={a.src}
                    alt={a.title}
                    className="max-h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="text-center px-2">
                  <div className="text-sm md:text-base font-semibold text-slate-900">
                    {a.title}
                  </div>
                  {a.desc ? (
                    <div className="text-xs text-slate-500 mt-1">{a.desc}</div>
                  ) : null}
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
