import React from "react";
import CardCarousel from "@/components/ui/CardCarousel";

export default function Index() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <section className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Select a feature</h1>
        <CardCarousel />
      </section>
    </main>
  );
}
