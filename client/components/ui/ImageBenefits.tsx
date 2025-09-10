import React from "react";

interface Card {
  id: string;
  title: string;
  body: string;
  image: string;
  href?: string;
}

const cards: Card[] = [
  {
    id: "save-tax",
    title: "Save Tax",
    body:
      "Plan your finances in such a way that you can reduce your tax liability through appropriate investments.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb39648aab450460597500936af6bdfd7%2F841e973aa60e462e81a4ac5fcae238e7?format=webp&width=800",
  },
  {
    id: "retirement",
    title: "Retirement Plan",
    body:
      "Secure your old age by planning ahead and building a desired retirement corpus that covers your expenses.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb39648aab450460597500936af6bdfd7%2Fc3847e2c6d4047789fd7c6ae0fef3a7c?format=webp&width=800",
  },
  {
    id: "long-term-wealth-1",
    title: "Build Long Term Wealth",
    body:
      "With Nivesh you can plan your investments in such a way to build wealth for important goals.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb39648aab450460597500936af6bdfd7%2Faba32a8ff9114f7e90b27902f2a5c7b3?format=webp&width=800",
  },
  {
    id: "long-term-wealth-2",
    title: "Build Long Term Wealth",
    body:
      "Invest for long-term compounding such as a house, car, marriage, or education.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fb39648aab450460597500936af6bdfd7%2Faca00b8e6b6849ff88f6af6426eb21eb?format=webp&width=800",
  },
];

export default function ImageBenefits() {
  return (
    <section className="w-full px-6 md:px-12 py-12">
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Start Your Investment Journey
        </h2>
        <p className="text-slate-600 mt-1 text-sm md:text-base">
          Define Your Financial Requirements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c) => (
          <article
            key={c.id}
            className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white"
            aria-label={c.title}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-center bg-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundImage: `url(${c.image})` }}
              aria-hidden
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/30 transition-colors" aria-hidden />

            {/* Content */}
            <div className="relative h-56 flex items-end">
              <div className="w-full p-5">
                <h3 className="text-lg font-bold text-white drop-shadow-sm">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-white/90 line-clamp-3">
                  {c.body}
                </p>
                <div className="mt-4">
                  <a
                    href={c.href || "#"}
                    className="inline-flex items-center justify-center rounded-full bg-white/95 text-slate-900 px-4 py-2 text-xs font-semibold shadow hover:bg-white"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
