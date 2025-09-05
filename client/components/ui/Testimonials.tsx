import CardCarousel from "@/components/ui/CardCarousel";
import { User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: "t1",
      title: "Aisha Rahman — VP of Product, FinCo",
      description:
        "Working with the team accelerated our roadmap and improved customer activation across channels. Their approach is pragmatic and design-led.",
      icon: <User />,
    },
    {
      id: "t2",
      title: "Michael Chen — Head of Growth, Retailly",
      description:
        "Their platform helped us reduce churn and increase NPS. The onboarding support was exceptional and measurable.",
      icon: <User />,
    },
    {
      id: "t3",
      title: "Priya Kapoor — Customer Success Lead, HealthWave",
      description:
        "Professional, reliable, and results-focused. Our implementation completed ahead of schedule with clear ROI.",
      icon: <User />,
    },
    {
      id: "t4",
      title: "Carlos Mendes — CTO, LogiNext",
      description:
        "Scalable architecture and a thoughtful product roadmap made integration seamless for our teams.",
      icon: <User />,
    },
  ];

  return (
    <section className="w-full bg-white rounded-2xl shadow-sm">
      <div className="relative overflow-hidden px-6 md:px-12 py-12">
        <div className="mb-6">
          <CardCarousel cards={testimonials} />
        </div>

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
