import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f89d9b0a7a7b0aa3f0e8b6a5a9b6d46",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b6c3f6d2b8e3f828f3a8b0f4f8c2b51",
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f9f0d4c3a7a2b5d4c6e8b9a6f7c2d1a",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2d3b5f6e7a8c9b0d1e2f3a4b5c6d7e8f",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a2b1c4d5e6f7a8b9c0d1e2f3a4b5c6d",
];

const texts = [
  {
    title: "Build smarter investments with Nivesh",
    subtitle:
      "Modern distribution tools, curated products and onboarding that help you scale AUM and serve clients better.",
  },
  {
    title: "Digitize distribution for mutual funds and advisors",
    subtitle:
      "Streamline client onboarding, compliance and reporting with our secure fintech platform.",
  },
  {
    title: "Data-driven insights to grow AUM",
    subtitle:
      "Real-time dashboards and performance analytics to help you advise clients confidently.",
  },
  {
    title: "API-powered integrations for seamless workflows",
    subtitle:
      "Integrate portfolio, KYC and payments to reduce manual work and speed up onboarding.",
  },
  {
    title: "Trusted infrastructure for wealth management",
    subtitle:
      "Enterprise-grade security, compliance-ready processes, and 24/7 support for advisors.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // split headline/sub into words for staggered animation
  const headlineWords = useMemo(() => texts[index].title.split(" "), [index]);
  const subtitleWords = useMemo(() => texts[index].subtitle.split(" "), [index]);

  // approximated CTA delay so it fades in after headline+subtitle animation
  const ctaDelay = useMemo(() => {
    const headlineStagger = Math.max(0, headlineWords.length - 1) * 0.2;
    const subtitleStagger = Math.max(0, subtitleWords.length - 1) * 0.2;
    // headline duration 0.6, subtitle delay 0.3 + duration 0.6
    return 0.6 + 0.3 + headlineStagger + subtitleStagger * 0.25; // weighted a bit to keep timing reasonable
  }, [headlineWords.length, subtitleWords.length]);

  const wordVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const subWordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.35, ease: "easeIn" } },
  };

  const headlineContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const subtitleContainer = {
    hidden: {},
    visible: { transition: { delay: 0.3, staggerChildren: 0.2 } },
  };

  return (
    <section className="relative h-screen w-full flex items-center">
      {/* Background layers (crossfade) */}
      {images.map((img, i) => (
        <motion.div
          key={img + i}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-8 flex items-center">
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl px-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${index}`}
                className="text-4xl md:text-6xl font-extrabold leading-tight text-white font-sans"
                variants={headlineContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
                aria-label={texts[index].title}
              >
                {headlineWords.map((w, i) => (
                  <motion.span
                    key={w + i}
                    variants={wordVariant}
                    className={`inline-block mr-2`} 
                    aria-hidden={false}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${index}`}
                className="mt-4 text-lg md:text-xl text-white/90 max-w-xl font-sans"
                variants={subtitleContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
                aria-label={texts[index].subtitle}
              >
                {subtitleWords.map((w, i) => (
                  <motion.span key={w + i} variants={subWordVariant} className="inline-block mr-2">
                    {w}
                  </motion.span>
                ))}
              </motion.p>
            </AnimatePresence>

            <motion.div
              className="mt-6 flex gap-4"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: ctaDelay }}
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center bg-white text-slate-900 rounded-full px-6 py-3 text-sm font-semibold shadow-lg"
              >
                Get started
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center border border-white/25 text-white rounded-full px-5 py-3 text-sm font-medium"
              >
                Learn more
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
