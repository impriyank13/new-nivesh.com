import React from "react";
import CardCarousel from "@/components/ui/CardCarousel";
import StepsOrbit from "@/components/ui/StepsOrbit";
import Benefits from "@/components/ui/Benefits";
import Testimonials from "@/components/ui/Testimonials";

export default function Index() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-slate-100 to-slate-200 p-6 space-y-16">
      <section className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Select a feature</h1>
        <CardCarousel />
      </section>

      <section className="w-full max-w-6xl">
        <StepsOrbit />
      </section>

      <section className="w-full max-w-6xl">
        <AwardsMarquee />
      </section>

      <section className="w-full max-w-6xl">
        <Benefits />
      </section>

      <section className="w-full max-w-6xl">
        <Testimonials />
      </section>
    </main>
  );
}
