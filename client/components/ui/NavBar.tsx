import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { key: 'home', label: "Home", to: "/" },
    { key: 'about', label: "About", to: "/about-us" },
    { key: 'products', label: "Products", to: "/products" },
    { key: 'partner', label: "Partner", to: "/partner" },
    { key: 'solutions', label: "Solutions", to: "/solutions" },
    { key: 'blog', label: "Blog", to: "/blog" },
  ];

  const productsList = [
    'Mutual Funds',
    'Specialized Investment Fund (SIF)',
    'Market Linked Debentures (MLD)',
    'Gift City',
    'Unlisted Shares',
    'Fixed Deposit',
    'PMS',
    'AIF',
    'NPS',
    'Bond',
    'Loan Against Securities (LAS)'
  ];

  const partnerList = [
    'Be A Nivesh Partner',
    'Become MF Distributor',
    'Grow Your MF Business',
    'AMFI ARN Code',
    'NISM Certification'
  ];

  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'hin', label: 'हिन्दी' },
    { code: 'mar', label: 'मराठी' },
  ];

  const navigate = useNavigate();
  const locationObj = useLocation();
  const location = locationObj.pathname;
  const getLangFromPath = () => {
    const match = location.match(/^\/(en|hin|mar)(?:\/|$)/);
    return match ? match[1] : 'en';
  };
  const lang = getLangFromPath();

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
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const buildPath = (to: string, targetLang = lang) => {
    const clean = to.startsWith('/') ? to : `/${to}`;
    const base = location.replace(/^\/(en|hin|mar)/, '');
    // if clean is '/', we want just /:lang
    if (clean === '/') return `/${targetLang}${base || ''}`;
    return `/${targetLang}${clean}`;
  };

  const changeLang = (targetLang: string) => {
    const base = location.replace(/^\/(en|hin|mar)/, '') || '/';
    const newPath = `/${targetLang}${base}`;
    // use react-router navigation to avoid full reload
    // @ts-ignore
    const nav = navigate as (p: string) => void;
    nav(newPath);
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link to={`/${lang}`} className="flex items-center" onClick={() => setOpen(false)}>
              <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Faf0d2769dfae4e9a91bf3c20942483d2?format=webp&width=800" alt="Nivesh" className="h-8 md:h-10 object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((n) => {
              if (n.key === 'products') {
                return (
                  <div key={n.to} className="relative" ref={navRef as any}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setProductsOpen((v) => !v); setPartnerOpen(false); }}
                      aria-expanded={productsOpen}
                      className="text-sm font-medium text-slate-700 hover:text-slate-900 inline-flex items-center gap-1"
                    >
                      <span>{n.label}</span>
                      <svg className={`w-3 h-3 text-slate-500 transform transition-transform ${productsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                    </button>
                    <div className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg text-slate-700 p-3 transition-all ${productsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}>
                      {productsList.map((p) => (
                        <Link key={p} to={buildPath('/products')} className="block text-sm py-1 hover:text-slate-900" onClick={() => setProductsOpen(false)}>{p}</Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (n.key === 'partner') {
                return (
                  <div key={n.to} className="relative" ref={navRef as any}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setPartnerOpen((v) => !v); setProductsOpen(false); }}
                      aria-expanded={partnerOpen}
                      className="text-sm font-medium text-slate-700 hover:text-slate-900 inline-flex items-center gap-1"
                    >
                      <span>{n.label}</span>
                      <svg className={`w-3 h-3 text-slate-500 transform transition-transform ${partnerOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                    </button>
                    <div className={`absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg text-slate-700 p-3 transition-all ${partnerOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}>
                      {partnerList.map((p) => (
                        <Link key={p} to={buildPath('/partner')} className="block text-sm py-1 hover:text-slate-900" onClick={() => setPartnerOpen(false)}>{p}</Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={n.to} to={buildPath(n.to)} className="text-sm font-medium text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-2">
              <select aria-label="Select language" value={lang} onChange={(e) => changeLang(e.target.value)} className="bg-transparent text-sm text-slate-700 p-1 rounded">
                {langs.map((l) => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </div>

            <Link to={`${buildPath('/signin')}`} className="hidden md:inline-flex items-center text-sm text-slate-700" onClick={() => setOpen(false)}>
              Sign in
            </Link>
            <Link to={`${buildPath('/get-started')}`} className="inline-flex items-center bg-black text-white rounded-full px-4 py-2 text-sm font-semibold shadow" onClick={() => setOpen(false)}>
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
                <div key={n.to}>
                  <Link to={buildPath(n.to)} className="text-base font-medium text-slate-700 flex items-center justify-between" onClick={() => setOpen(false)}>
                    <span>{n.label}</span>
                    {(n.key === 'products' || n.key === 'partner') && (
                      <svg className="w-4 h-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                    )}
                  </Link>
                  {n.key === 'products' && (
                    <div className="mt-2 pl-4">
                      {productsList.map((p) => (
                        <Link key={p} to={buildPath('/products')} className="block text-sm text-slate-600 py-1" onClick={() => setOpen(false)}>{p}</Link>
                      ))}
                    </div>
                  )}
                  {n.key === 'partner' && (
                    <div className="mt-2 pl-4">
                      {partnerList.map((p) => (
                        <Link key={p} to={buildPath('/partner')} className="block text-sm text-slate-600 py-1" onClick={() => setOpen(false)}>{p}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2 border-t border-slate-100 mt-2">
                <div className="flex items-center gap-2 mb-3">
                  {langs.map((l) => (
                    <button key={l.code} onClick={() => { changeLang(l.code); setOpen(false); }} className={`text-sm font-medium px-2 py-1 rounded ${l.code === lang ? 'bg-slate-900 text-white' : 'text-slate-700'}`}>
                      {l.label}
                    </button>
                  ))}
                </div>
                <Link to={buildPath('/signin')} className="block text-sm text-slate-700 mb-2" onClick={() => setOpen(false)}>Sign in</Link>
                <Link to={buildPath('/get-started')} className="block text-sm font-semibold bg-black text-white px-4 py-2 rounded-full text-center" onClick={() => setOpen(false)}>Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
