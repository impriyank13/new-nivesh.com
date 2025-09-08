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

  // set a CSS variable used by the NavBar for a matching gradient
  const gradients = [
    "linear-gradient(90deg, rgba(2,6,23,0.7), rgba(2,6,23,0.2))",
    "linear-gradient(90deg, rgba(3,37,65,0.7), rgba(3,37,65,0.18))",
    "linear-gradient(90deg, rgba(6,18,48,0.68), rgba(6,18,48,0.18))",
    "linear-gradient(90deg, rgba(12,8,40,0.7), rgba(12,8,40,0.18))",
    "linear-gradient(90deg, rgba(22,28,36,0.7), rgba(22,28,36,0.18))",
  ];

  useEffect(() => {
    const g = gradients[index % gradients.length];
    try {
      document.documentElement.style.setProperty("--hero-navbar-bg", g);
    } catch (e) {
      // ignore
    }
  }, [index]);

  // split headline into words for staggered animation
  const headlineWords = useMemo(() => texts[index].title.split(" "), [index]);

  // split subtitle into lines (approximate) for line-by-line animation
  const splitIntoLines = (text: string, maxChars = 48) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let current = "";
    for (const w of words) {
      if ((current + " " + w).trim().length <= maxChars) {
        current = (current + " " + w).trim();
      } else {
        if (current) lines.push(current);
        current = w;
      }
    }
    if (current) lines.push(current);
    return lines;
  };

  const subtitleLines = useMemo(
    () => splitIntoLines(texts[index].subtitle, 48),
    [index],
  );

  // CTA delay calculation: headline(0.6) + sub start delay(0.3) + stagger between lines + last line duration
  const ctaDelay = useMemo(() => {
    const headlineDuration = 0.6;
    const subStartDelay = 0.3; // after headline
    const lineStagger = 0.25;
    const subLineCount = Math.max(1, subtitleLines.length);
    const subDuration = 0.6; // each line animate duration
    const totalSubTime =
      subStartDelay + (subLineCount - 1) * lineStagger + subDuration;
    return headlineDuration + totalSubTime + 0.05; // small buffer
  }, [subtitleLines.length]);

  const wordVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.35, ease: "easeIn" },
    },
  };

  const headlineContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const subtitleContainer = {
    hidden: {},
    visible: { transition: { delay: 0.3, staggerChildren: 0.25 } },
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
              <motion.div
                key={`sub-${index}`}
                className="mt-4 text-lg md:text-xl text-white/90 max-w-xl font-sans"
                variants={subtitleContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
                aria-label={texts[index].subtitle}
              >
                {subtitleLines.map((line, i) => (
                  <motion.div
                    key={line + i}
                    variants={lineVariant}
                    className="overflow-hidden"
                  >
                    <div className="inline-block mr-2">{line}</div>
                  </motion.div>
                ))}
              </motion.div>
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
