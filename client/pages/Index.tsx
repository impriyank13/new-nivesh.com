import React from "react";
import CardCarousel from "@/components/ui/CardCarousel";
import StepsOrbit from "@/components/ui/StepsOrbit";
import Benefits from "@/components/ui/Benefits";
import AwardsMarquee from "@/components/ui/AwardsMarquee";
import Testimonials from "@/components/ui/Testimonials";

export default function Index() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-slate-100 to-slate-200 p-6 space-y-16">
      <section className="w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
          Select a feature
        </h1>
        <div className="w-full bg-white rounded-2xl shadow-sm p-6">
          <CardCarousel />
        </div>
      </section>

      <section className="w-full max-w-7xl">
        <div className="w-full bg-white rounded-2xl shadow-sm p-6">
          <StepsOrbit />
        </div>
      </section>

      <section className="w-full max-w-7xl">
        <Benefits />
      </section>

      <section className="w-full max-w-7xl">
        <Testimonials />
      </section>

      <section className="w-full max-w-7xl">
        <AwardsMarquee />
      </section>
    </main>
  );
}
