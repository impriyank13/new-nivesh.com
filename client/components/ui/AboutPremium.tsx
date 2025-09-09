import React from "react";
import { motion } from "framer-motion";

export default function AboutPremium() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const textVariant: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariant: any = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "circOut" } },
  };

  return (
    <section className="w-full bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
          <motion.div variants={textVariant} className="space-y-6">
            <h2 className="text-3xl md:text-5xl premium-headline font-extrabold leading-tight">
              We power modern wealth businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Nivesh provides an enterprise-grade fintech platform that combines secure onboarding, API-first integrations and powerful analytics to help advisors and distributors scale.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <a className="btn-primary" href="#">
                Get a demo
              </a>
              <a className="btn-ghost" href="#">
                Contact sales
              </a>
            </div>

            <div className="mt-8 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center shadow-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v6l4 2" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Enterprise-ready</div>
                <div className="text-base font-semibold">Security, compliance & SLAs</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={imageVariant} className="relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400/20 to-pink-300/10 blur-3xl opacity-70" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542223616-8e2f4a2f2a66?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=89a956a7f0f2e3a9f3b6c0b2f8f9a1d4"
                alt="About image"
                className="w-full h-[420px] object-cover transform hover:scale-102 transition-transform duration-800"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: 'overlay' }}>
                <div className="absolute right-6 bottom-6 bg-gradient-to-br from-yellow-400/30 to-transparent px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-medium">Trusted by advisors</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
