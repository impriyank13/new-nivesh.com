import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { key: "home", label: "Home", to: "/" },
    { key: "about", label: "About", to: "/about-us" },
    { key: "products", label: "Products", to: "/products" },
    { key: "partner", label: "Partner", to: "/partner" },
    { key: "solutions", label: "Solutions", to: "/solutions" },
    { key: "blog", label: "Blog", to: "/blog" },
  ];

  const productsList = [
    { key: "mutual-funds", label: "Mutual Funds" },
    { key: "sif", label: "Specialized Investment Fund (SIF)" },
    { key: "mld", label: "Market Linked Debentures (MLD)" },
    { key: "gift-city", label: "Gift City" },
    { key: "unlisted-shares", label: "Unlisted Shares" },
    { key: "fixed-deposit", label: "Fixed Deposit" },
    { key: "pms", label: "PMS" },
    { key: "aif", label: "AIF" },
    { key: "nps", label: "NPS" },
    { key: "bond", label: "Bond" },
    { key: "las", label: "Loan Against Securities (LAS)" },
  ];

  const partnerList = [
    { key: "be-a-nivesh-partner", label: "Be A Nivesh Partner" },
    { key: "become-mf-distributor", label: "Become MF Distributor" },
    { key: "grow-mf-business", label: "Grow Your MF Business" },
    { key: "amfi-arn-code", label: "AMFI ARN Code" },
    { key: "nism-certification", label: "NISM Certification" },
  ];

  const langs = [
    { code: "en", label: "EN" },
    { code: "hin", label: "हिन्दी" },
    { code: "mar", label: "मराठी" },
  ];

  const navigate = useNavigate();
  const locationObj = useLocation();
  const location = locationObj.pathname;
  const getLangFromPath = () => {
    const match = location.match(/^\/(en|hin|mar)(?:\/|$)/);
    return match ? match[1] : "en";
  };
  const lang = getLangFromPath();

  // determine if we're on the hero/index page so navbar can adapt to hero gradient
  const isHero = /^\/(?:en|hin|mar)?\/?$/.test(location);
  const linkTextClass = isHero ? "text-white" : "text-slate-700";
  const chevronClass = isHero ? "text-white/80" : "text-slate-500";
  const navButtonHoverBg = isHero ? "hover:bg-white/10" : "hover:bg-white/20";
  const dropdownBgClass = isHero ? "bg-black/70 text-white" : "bg-white text-slate-700";

  const [productsOpen, setProductsOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setProductsOpen(false);
        setPartnerOpen(false);
      }
    }
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  const buildPath = (to: string, targetLang = lang) => {
    const clean = to.startsWith("/") ? to : `/${to}`;
    const base = location.replace(/^\/(en|hin|mar)/, "");
    // if clean is '/', we want just /:lang
    if (clean === "/") return `/${targetLang}${base || ""}`;
    return `/${targetLang}${clean}`;
  };

  const changeLang = (targetLang: string) => {
    const base = location.replace(/^\/(en|hin|mar)/, "") || "/";
    const newPath = `/${targetLang}${base}`;
    // use react-router navigation to avoid full reload
    // @ts-ignore
    const nav = navigate as (p: string) => void;
    nav(newPath);
  };

  return (
    <header className={`w-full backdrop-blur-[2px] sticky top-0 z-50 shadow-sm ${isHero ? 'bg-black/20 text-white' : 'bg-white/10 text-slate-700'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link
              to={`/${lang}`}
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Faf0d2769dfae4e9a91bf3c20942483d2?format=webp&width=800"
                alt="Nivesh"
                className="h-8 md:h-10 object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((n) => {
              if (n.key === "products") {
                return (
                  <div key={n.to} className="relative" ref={navRef as any}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setProductsOpen((v) => !v);
                        setPartnerOpen(false);
                      }}
                      aria-expanded={productsOpen}
                      className={`text-sm font-medium ${linkTextClass} inline-flex items-center gap-1 px-3 py-1 rounded-md transition-transform transform hover:scale-105 ${navButtonHoverBg}` }
                    >
                      <span>{n.label}</span>
                      <svg
                        className={`w-3 h-3 ${chevronClass} transform transition-transform ${productsOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-64 rounded-lg shadow-lg p-3 transition-all ${productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"} ${dropdownBgClass}`}
                    >
                      {productsList.map((p) => (
                        <Link
                          key={p.key}
                          to={buildPath(`/products/${p.key}`)}
                          className="block text-sm py-1 hover:text-slate-900"
                          onClick={() => setProductsOpen(false)}
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (n.key === "partner") {
                return (
                  <div key={n.to} className="relative" ref={navRef as any}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPartnerOpen((v) => !v);
                        setProductsOpen(false);
                      }}
                      aria-expanded={partnerOpen}
                      className={`text-sm font-medium ${linkTextClass} inline-flex items-center gap-1 px-3 py-1 rounded-md transition-transform transform hover:scale-105 ${navButtonHoverBg}` }
                    >
                      <span>{n.label}</span>
                      <svg
                        className={`w-3 h-3 ${chevronClass} transform transition-transform ${partnerOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-52 rounded-lg shadow-lg p-3 transition-all ${partnerOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"} ${dropdownBgClass}`}
                    >
                      {partnerList.map((p) => (
                        <Link
                          key={p.key}
                          to={buildPath(`/partner/${p.key}`)}
                          className="block text-sm py-1 hover:text-slate-900"
                          onClick={() => setPartnerOpen(false)}
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={buildPath(n.to)}
                  className="text-sm font-medium text-slate-700 px-3 py-1 rounded-md transition-transform transform hover:scale-105 hover:bg-white/20"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-2">
              <select
                aria-label="Select language"
                value={lang}
                onChange={(e) => changeLang(e.target.value)}
                className="bg-transparent text-sm text-slate-700 p-1 rounded"
              >
                {langs.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            <a
              href="https://app.nivesh.com/login"
              className="hidden md:inline-flex items-center text-sm text-slate-700"
              onClick={() => setOpen(false)}
            >
              Sign in
            </a>
            <a
              href="https://app.nivesh.com/partner_onboarding"
              className="inline-flex items-center bg-black text-white rounded-full px-4 py-2 text-sm font-semibold shadow"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>

            {/* mobile menu button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
                <div key={n.to}>
                  {n.key === "products" ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setProductsOpen((v) => !v);
                      }}
                      className="w-full text-left text-base font-medium text-slate-700 flex items-center justify-between"
                    >
                      <span>{n.label}</span>
                      <svg
                        className={`w-4 h-4 text-slate-500 transform transition-transform ${productsOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : n.key === "partner" ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPartnerOpen((v) => !v);
                      }}
                      className="w-full text-left text-base font-medium text-slate-700 flex items-center justify-between"
                    >
                      <span>{n.label}</span>
                      <svg
                        className={`w-4 h-4 text-slate-500 transform transition-transform ${partnerOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={buildPath(n.to)}
                      className="text-base font-medium text-slate-700 px-3 py-1 rounded-md transition-transform transform hover:scale-105 hover:bg-white/20"
                      onClick={() => setOpen(false)}
                    >
                      {n.label}
                    </Link>
                  )}

                  {n.key === "products" && productsOpen && (
                    <div className="mt-2 pl-4">
                      {productsList.map((p) => (
                        <Link
                          key={p.key}
                          to={buildPath(`/products/${p.key}`)}
                          className="block text-sm text-slate-600 py-1"
                          onClick={() => {
                            setOpen(false);
                            setProductsOpen(false);
                          }}
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {n.key === "partner" && partnerOpen && (
                    <div className="mt-2 pl-4">
                      {partnerList.map((p) => (
                        <Link
                          key={p.key}
                          to={buildPath(`/partner/${p.key}`)}
                          className="block text-sm text-slate-600 py-1"
                          onClick={() => {
                            setOpen(false);
                            setPartnerOpen(false);
                          }}
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2 border-t border-slate-100 mt-2">
                <div className="flex items-center gap-2 mb-3">
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        changeLang(l.code);
                        setOpen(false);
                      }}
                      className={`text-sm font-medium px-2 py-1 rounded transition-transform transform ${l.code === lang ? "bg-slate-900 text-white" : "text-slate-700 hover:scale-105 hover:bg-white/10"}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
                <a
                  href="https://app.nivesh.com/login"
                  className="block text-sm text-slate-700 mb-2"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </a>
                <a
                  href="https://app.nivesh.com/partner_onboarding"
                  className="block text-sm font-semibold bg-black text-white px-4 py-2 rounded-full text-center"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
