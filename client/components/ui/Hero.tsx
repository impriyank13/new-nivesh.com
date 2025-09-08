import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f89d9b0a7a7b0aa3f0e8b6a5a9b6d46",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b6c3f6d2b8e3f828f3a8b0f4f8c2b51",
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f9f0d4c3a7a2b5d4c6e8b9a6f7c2d1a",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2d3b5f6e7a8c9b0d1e2f3a4b5c6d7e8f",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a2b1c4d5e6f7a8b9c0d1e2f3a4b5c6d",
  // Additional royalty-free images similar to Shutterstock references
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8d2d9f0e1a2b3c4d5e6f7a8b9c0d1e2f",
  "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f4e3d2c1b0a9e8d7c6b5a4f3e2d1c0b",
  "https://images.unsplash.com/photo-1553618325-4b4b2c41b9b2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const variantContainer: any = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  } as any;

  const headline: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sub: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const cta: any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
  };

  const imageVariant: any = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const bgImage = images[index];

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

      {/* Overlay to give background 50% opacity */}
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        className="relative max-w-7xl mx-auto w-full px-6 md:px-8 flex items-center"
        variants={variantContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
              variants={headline}
            >
              Build smarter investments with Nivesh
            </motion.h1>

            <motion.p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl" variants={sub}>
              Modern distribution tools, curated products and onboarding that help you scale AUM and serve clients better.
            </motion.p>

            <motion.div className="mt-6 flex gap-4" variants={cta}>
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
      </motion.div>
    </section>
  );
}
