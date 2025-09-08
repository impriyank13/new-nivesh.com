import React from "react";
import CardCarousel from "@/components/ui/CardCarousel";
import StepsOrbit from "@/components/ui/StepsOrbit";
import Benefits from "@/components/ui/Benefits";
import AwardsMarquee from "@/components/ui/AwardsMarquee";
import Testimonials from "@/components/ui/Testimonials";
import { useParams, useLocation } from "react-router-dom";
import Hero from "@/components/ui/Hero";

const translations: any = {
  en: {
    heroTitle: "Trusted by leaders from various industries",
    heroSubtitle:
      "Learn why professionals trust our solutions to complete their customer journeys.",
    cta: "Read Success Stories →",
  },
  hin: {
    heroTitle: "विभिन्न उद्योगों के नेताओं द्वारा भरोसा किया गया",
    heroSubtitle:
      "जानें कि पेशेवर अपने ग्राहक यात्रा को पूरा करने क�� लिए हमारे समाधानों पर भरोसा क्यों करते हैं।",
    cta: "सफलता की कहानियाँ पढ़ें →",
  },
  mar: {
    heroTitle: "विविध उद्योगांमधील नेत्यांकडून विश्वास",
    heroSubtitle:
      "कारण जाणून घ्या का व्यावसायिक त्यांच्या ग्राहकांच्या प्रवास पूर्ण करण्यासाठी आमच्या समाधानांवर विश्वास ठेवतात.",
    cta: "यशोगाथा वाचा →",
  },
};

export default function Index() {
  const params = useParams();
  const location = useLocation();
  const lang =
    (params.lang as string) ||
    (location.pathname.match(/^\/(en|hin|mar)/)?.[1] as string) ||
    "en";
  const t = (key: string) =>
    translations[lang as keyof typeof translations]?.[key] ??
    translations.en[key];

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-slate-100 to-slate-200 space-y-16">
      {/* Hero */}
      <section className="w-full">
        <div className="w-full">
          {/* Hero component */}
          <Hero />
        </div>
      </section>

      <section className="w-full">
        <div className="w-full bg-white rounded-2xl shadow-sm p-6">
          <CardCarousel showTitle={true} />
        </div>
      </section>

      <section className="w-full">
        <div className="w-full bg-white rounded-2xl shadow-sm p-6">
          <StepsOrbit />
        </div>
      </section>

      <section className="w-full">
        <Benefits />
      </section>

      <section className="w-full">
        <Testimonials />
      </section>

      <section className="w-full">
        <AwardsMarquee />
      </section>
    </main>
  );
}
