import CardCarousel, { CardData } from "@/components/ui/CardCarousel";

export default function Testimonials() {
  const testimonials: CardData[] = [
    {
      id: "t1",
      title: "Aisha Rahman — VP of Product, FinCo",
      description:
        "Working with the team accelerated our roadmap and improved customer activation across channels. Their approach is pragmatic and design-led.",
      media: {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      },
    },
    {
      id: "t2",
      title: "Michael Chen — Head of Growth, Retailly",
      description:
        "Their platform helped us reduce churn and increase NPS. The onboarding support was exceptional and measurable.",
      media: {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      },
    },
    {
      id: "t3",
      title: "Priya Kapoor — Customer Success Lead, HealthWave",
      description:
        "Professional, reliable, and results-focused. Our implementation completed ahead of schedule with clear ROI.",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        alt: "Priya Kapoor",
      },
    },
    {
      id: "t4",
      title: "Carlos Mendes — CTO, LogiNext",
      description:
        "Scalable architecture and a thoughtful product roadmap made integration seamless for our teams.",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1531123414780-f36b38f1b6c9?auto=format&fit=crop&w=800&q=80",
        alt: "Carlos Mendes",
      },
    },
  ];

  return (
    <section className="">
      <div className="relative overflow-hidden px-4 md:px-12 py-3 md:py-6">
        <div className="mb-6">
          <CardCarousel cards={testimonials} />
        </div>

        <div className="max-w-3xl mx-auto text-center pt-6">
          <p className="text-sm text-slate-500 tracking-wide mb-2">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Trusted by leaders from various industries</h2>
          <p className="mt-3 text-slate-600">Learn why professionals trust our solutions to complete their customer journeys.</p>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center bg-[#0a66c2] text-white rounded-full px-5 py-3 font-medium shadow-md hover:opacity-95 hover:bg-[#084a9e] transition">
              Read Success Stories →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
