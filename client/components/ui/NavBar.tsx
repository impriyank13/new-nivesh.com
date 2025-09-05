import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Partner", to: "/partner" },
    { label: "Solutions", to: "/solutions" },
    { label: "Blog", to: "/blog" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
              <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Faf0d2769dfae4e9a91bf3c20942483d2?format=webp&width=800" alt="Nivesh" className="h-8 md:h-10 object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm font-medium text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/signin" className="hidden md:inline-flex items-center text-sm text-slate-700" onClick={() => setOpen(false)}>
              Sign in
            </Link>
            <Link to="/get-started" className="inline-flex items-center bg-black text-white rounded-full px-4 py-2 text-sm font-semibold shadow" onClick={() => setOpen(false)}>
              Get Started
            </Link>

            {/* mobile menu button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 12h18" />
                    <path d="M3 6h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden mt-2 pb-4">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col space-y-3">
              {navItems.map((n) => (
                <Link key={n.to} to={n.to} className="text-base font-medium text-slate-700" onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-100 mt-2">
                <Link to="/signin" className="block text-sm text-slate-700 mb-2" onClick={() => setOpen(false)}>Sign in</Link>
                <Link to="/get-started" className="block text-sm font-semibold bg-black text-white px-4 py-2 rounded-full text-center" onClick={() => setOpen(false)}>Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
