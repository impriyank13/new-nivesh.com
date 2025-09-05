import React from "react";

export default function NavBar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Faf0d2769dfae4e9a91bf3c20942483d2?format=webp&width=800" alt="Nivesh" className="h-8 md:h-10 object-contain" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Home</a>
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">About Us</a>
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Products</a>
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Partner</a>
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Solutions</a>
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Blog</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:inline-flex items-center text-sm text-slate-700">Sign in</a>
            <a href="#" className="inline-flex items-center bg-black text-white rounded-full px-4 py-2 text-sm font-semibold shadow">Get Started</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
