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
    body: "Plan your finances in such a way that you can reduce your tax liability through appropriate investments.",
    image: "https://nivesh.com/45ba2ef3421d8c6816b18285bf9511e8.webp",
  },
  {
    id: "retirement",
    title: "Retirement Plan",
    body: "Secure your old age by planning ahead and building a desired retirement corpus that covers your expenses.",
    image: "https://nivesh.com/90728e03819ffa7da67a4fdb92b1a9e6.webp",
  },
  {
    id: "long-term-wealth-1",
    title: "Build Long Term Wealth",
    body: "With Nivesh you can plan your investments in such a way to build wealth for important goals.",
    image: "https://nivesh.com/700391d1585c35492404045ea346a185.webp",
  },
  {
    id: "long-term-wealth-2",
    title: "Build Long Term Wealth",
    body: "Invest for long-term compounding such as a house, car, marriage, or education.",
    image: "https://nivesh.com/4e1f095e6a20fdc2c4e1086470ea0bf3.webp",
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
            <div
              className="absolute inset-0 bg-black/35 group-hover:bg-black/30 transition-colors"
              aria-hidden
            />

            {/* Content */}
            <div className="relative h-60 flex items-end">
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
