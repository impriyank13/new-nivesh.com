import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/partner", label: "Partners" },
  { to: "/blog", label: "Blog" },
];

export default function PremiumNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = typeof window !== "undefined" ? window.scrollY : 0;
      setScrolled(y > 24);
      setIsTop(y < 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as any);
  }, []);

  // choose text color based on scrolled state; when over dark hero (isTop) use white
  const textClass = isTop && !scrolled ? "text-white" : "text-slate-800";

  const headerStyle = isTop && !scrolled
    ? { background: 'var(--hero-navbar-bg, linear-gradient(90deg, rgba(2,6,23,0.6), rgba(2,6,23,0.08)))' }
    : { background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(8px) saturate(120%)' };

  return (
    <motion.header
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 left-0 right-0 mx-auto max-w-7xl px-4 md:px-6 z-50"
      style={{ pointerEvents: 'auto' }}
    >
      <div className={`rounded-2xl nav-glass border border-transparent transition-all duration-300`} style={{ ...headerStyle }}>
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3" aria-label="Home">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <div className={`hidden md:block text-sm font-semibold tracking-tight ${textClass}`}>
                <div className="leading-none">Nivesh</div>
                <div className="text-xs opacity-80 mt-0">Wealth tech</div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`${textClass} text-sm font-medium transition transform hover:-translate-y-0.5 hover:scale-102 hover:opacity-95`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className={`hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${isTop && !scrolled ? 'bg-white/10 text-white ring-1 ring-white/20' : 'bg-[#0a66c2] text-white'}`}>
              Get started
            </button>

            <button
              aria-label="Open menu"
              className={`${textClass} md:hidden p-2 rounded-lg`}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className={`md:hidden px-4 pb-4`}>
            <div className="flex flex-col gap-2">
              {navItems.map((n) => (
                <Link key={n.to} to={n.to} className={`${textClass} py-2 px-3 rounded-md`}>{n.label}</Link>
              ))}
              <div className="pt-2 border-t border-white/10" />
              <Link to="/" className="py-2 px-3 rounded-md text-sm font-semibold bg-slate-900 text-white">Get started</Link>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
