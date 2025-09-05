export default function Testimonials() {
  const cards = [
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      alt: "Professional headshot 1",
      left: "8%",
      top: "0px",
      size: "w-36 h-44",
      rotate: "-3deg",
      filter: "",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      alt: "Professional headshot 2",
      left: "28%",
      top: "-12px",
      size: "w-36 h-44",
      rotate: "2deg",
      filter: "grayscale(30%)",
    },
    {
      src: "https://images.unsplash.com/photo-1545996124-0b5d4f6f0aa0?auto=format&fit=crop&w=400&q=80",
      alt: "Professional headshot 3",
      left: "48%",
      top: "-20px",
      size: "w-44 h-52",
      rotate: "-2deg",
      filter: "",
    },
    {
      src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
      alt: "Professional headshot 4",
      left: "68%",
      top: "-8px",
      size: "w-36 h-44",
      rotate: "1deg",
      filter: "grayscale(20%)",
    },
    {
      src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80",
      alt: "Professional headshot 5",
      left: "84%",
      top: "8px",
      size: "w-32 h-40",
      rotate: "-4deg",
      filter: "",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
      alt: "Professional headshot 6",
      left: "18%",
      top: "44px",
      size: "w-32 h-40",
      rotate: "3deg",
      filter: "grayscale(35%)",
    },
    {
      src: "https://images.unsplash.com/photo-1531123414780-f36b38f1b6c9?auto=format&fit=crop&w=400&q=80",
      alt: "Professional headshot 7",
      left: "60%",
      top: "64px",
      size: "w-28 h-36",
      rotate: "0deg",
      filter: "",
    },
  ];

  return (
    <section className="w-full bg-white rounded-2xl shadow-sm">
      <div className="relative overflow-hidden px-6 md:px-12 py-12">
        {/* Floating cards for md+ */}
        <div className="hidden md:block relative h-44 mb-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`absolute ${c.size} rounded-2xl overflow-hidden shadow-2xl`} 
              style={{ left: c.left, top: c.top, transform: `rotate(${c.rotate})`, filter: c.filter }}
            >
              <img
                src={c.src}
                alt={c.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Horizontal scroll for small screens */}
        <div className="md:hidden flex space-x-4 overflow-x-auto pb-4 -mx-2 px-2 snap-x">
          {cards.map((c, i) => (
            <div key={i} className="snap-start flex-shrink-0" style={{ width: 140 }}>
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: 160 }}>
                <img src={c.src} alt={c.alt} className="w-full h-full object-cover" loading="lazy" style={{ filter: c.filter }} />
              </div>
            </div>
          ))}
        </div>

        {/* Headline / CTA */}
        <div className="max-w-3xl mx-auto text-center pt-6">
          <p className="text-sm text-slate-500 tracking-wide mb-2">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Trusted by leaders from various industries</h2>
          <p className="mt-3 text-slate-600">Learn why professionals trust our solutions to complete their customer journeys.</p>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center bg-slate-900 text-white rounded-full px-5 py-3 font-medium shadow-md hover:opacity-95">
              Read Success Stories →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
