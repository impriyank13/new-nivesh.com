import CardCarousel, { CardData } from "@/components/ui/CardCarousel";

export default function Testimonials() {
  const testimonials: CardData[] = [
    {
      id: "t1",
      name: "Shubham Bhatia",
      title: "Nivesh Partner",
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
      name: "Michael Chen",
      title: "Michael Chen",
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
      name: "Dhananjay Chaturvedi",
      title: "Evangelist, Thinker, Consultant Formerly Managing Director, Miele India",
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
      name: "Amit Malhotra",
      title: "Amit Malhotra",
      description:
        "Scalable architecture and a thoughtful product roadmap made integration seamless for our teams.",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        alt: "Amit Malhotra",
      },
    },
    {
      id: "t5",
      name: "Amit Malhotra",
      title: "Manger with leading Health Insurance Company",
      description:
        "I was actually exploring someone who can help me to save tax under section 80C. I read in the newspaper that I should invest in ELSS but I was not sure how to do that. It was very simple to invest under 80C through Nivesh and later also started SIP through the app.",
      media: {
        type: "image",
        src: "https://nivesh.com/44ad593647dac060eeed486176bc199f.webp",
        alt: "Amit Malhotra",
      },
    },
    {
      id: "t6",
      name: "Shashi",
      title: "Insurance Advisor, Faridabad",
      description:
        "Amazing platform to invest in Mutual Funds. I have been thinking about investing for a long time but not sure how to start. I have been using the Nivesh app for a very long time and I realized it's very simple and safe.",
      media: {
        type: "image",
        src: "https://nivesh.com/c905aed4bf707c09690eadf590783318.webp",
        alt: "Shashi",
      },
    },
    {
      id: "t7",
      name: "Ajay Mandal",
      title: "Technician at Tata Sky",
      description:
        "I have a habit of saving money from the time I got my job. I was keeping this money either in my savings account or through recurring deposits. I heard about mutual funds but was not confident how to start. When I met Nivesh advisor I was amazed to know that I can invest through a mobile app and can track the portfolio.",
      media: {
        type: "image",
        src: "https://nivesh.com/f1a309f58e71badbe68b84fcc97de627.webp",
        alt: "Amit Malhotra",
      },
    },
    {
      id: "t8",
      name: "Mr. Ramesh Kumar",
      title: "Mr. Ramesh Kumar",
      description:
        "Working with the team accelerated our roadmap and improved customer activation across channels. Their approach is pragmatic and design-led.",
      media: {
        type: "video",
        src: "https://youtu.be/R7zZOZldc4w",
        poster:
          "https://youtu.be/R7zZOZldc4w",
      },
    },
    {
      id: "t9",
      name: "Apruv Sarvesh Pandey",
      title: "Apruv Sarvesh Pandey",
      description:
        "Working with the team accelerated our roadmap and improved customer activation across channels. Their approach is pragmatic and design-led.",
      media: {
        type: "video",
        src: "https://nivesh.com/1ad944708bdb65ad543ea39c9ee96210.mp4",
        poster:
          "https://nivesh.com/1ad944708bdb65ad543ea39c9ee96210.mp4",
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
