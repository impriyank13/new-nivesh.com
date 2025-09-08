import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f89d9b0a7a7b0aa3f0e8b6a5a9b6d46",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b6c3f6d2b8e3f828f3a8b0f4f8c2b51",
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f9f0d4c3a7a2b5d4c6e8b9a6f7c2d1a",
];

export default function Hero() {
  const variantContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const headline = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sub = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  };

  const cta = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const bgImage = images[Math.floor(Math.random() * images.length)];

  return (
    <section
      className="relative h-screen w-full flex items-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.85), rgba(248,250,252,0.85)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />

      <motion.div
        className="relative max-w-7xl mx-auto w-full px-6 md:px-8 flex items-center"
        variants={variantContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start justify-center">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900"
              variants={headline}
            >
              Build smarter investments with Nivesh
            </motion.h1>

            <motion.p className="mt-4 text-lg md:text-xl text-slate-700 max-w-xl" variants={sub}>
              Modern distribution tools, curated products and onboarding that help you scale AUM and serve clients better.
            </motion.p>

            <motion.div className="mt-6 flex gap-4" variants={cta}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center bg-slate-900 text-white rounded-full px-6 py-3 text-sm font-semibold shadow-lg"
              >
                Get started
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center border border-slate-200 text-slate-900 rounded-full px-5 py-3 text-sm font-medium"
              >
                Learn more
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:flex items-center justify-center relative"
            variants={imageVariant}
            style={{ perspective: 800 }}
          >
            <motion.img
              src={images[(Math.floor(Math.random() * images.length) + 1) % images.length]}
              alt="Hero"
              className="w-full max-w-md rounded-xl shadow-xl object-cover"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
