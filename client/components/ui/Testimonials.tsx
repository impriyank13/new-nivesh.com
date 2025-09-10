import CardCarousel, { CardData } from "@/components/ui/CardCarousel";

export default function Testimonials() {
  const testimonials: CardData[] = [
    {
      id: "t1",
      title: "Shubham Bhatia — Nivesh Partner",
      description:
        "Working with the team accelerated our roadmap and improved customer activation across channels. Their approach is pragmatic and design-led.",
      media: {
        type: "video",
        src: "https://www.youtube.com/embed/MsBnh2RqvPg?si=iJIAWyjIqS9HzyYV",
        poster: "https://www.youtube.com/embed/MsBnh2RqvPg?si=iJIAWyjIqS9HzyYV",
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
        poster:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      },
    },
    {
      id: "t3",
      title:
        "Dhananjay Chaturvedi — Evangelist, Thinker, Consultant Formerly Managing Director, Miele India",
      description:
        "Nivesh has changed the way I have been investing my money, they have educated me & facilitated investments into a totally new investment class for me, Mutual Funds. Having interacted with their able team, I have grown in my conviction about the merits of investing in MF’s and also benefited adequately over a period of time. Happy to recommend them to all those who are looking out for the opportunities and avenues to invest their money and see it grow.",
      media: {
        type: "image",
        src: "https://nivesh.com/2d8dd1be465ff5ea58dec82a5f96ef33.webp",
        alt: "Dhananjay Chaturvedi",
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
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center">
          Testimonials
        </h2>
        <div className="mb-6">
          <CardCarousel cards={testimonials} enableFlip />
        </div>

        <div className="max-w-3xl mx-auto text-center pt-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Trusted by leaders from various industries
          </h2>
          <p className="mt-3 text-slate-600">
            Learn why professionals trust our solutions to complete their
            customer journeys.
          </p>
        </div>
      </div>
    </section>
  );
}
