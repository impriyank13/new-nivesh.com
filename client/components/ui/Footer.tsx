import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-700 to-blue-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold mb-3">Goals</h5>
            <ul className="text-sm space-y-2 text-slate-200">
              <li>Retirement Plan</li>
              <li>Save For Children</li>
              <li>Save Tax</li>
              <li>Build Long Term Wealth</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Fde6115b41ff6407a909740b7cd0e3bab?format=webp&width=200" alt="Play" className="h-10 object-contain" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Fa57cf15cdc3b46ecaaaa3addd5ef67f3?format=webp&width=200" alt="App Store" className="h-10 object-contain" />
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Quick links</h5>
            <ul className="text-sm space-y-2 text-slate-200">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/calculators">Calculators</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Products</h5>
            <ul className="text-sm space-y-2 text-slate-200">
              <li>Mutual Funds</li>
              <li>Fixed Deposit</li>
              <li>PMS</li>
              <li>AIF</li>
              <li>NPS</li>
              <li>Bond</li>
              <li>Loan Against Securities (LAS)</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Partner</h5>
            <ul className="text-sm space-y-2 text-slate-200 mb-4">
              <li>Be A Nivesh Partner</li>
              <li>Become MF Distributor</li>
              <li>Grow Your MF Business</li>
              <li>NISM Certification</li>
              <li>AMFI ARN Code</li>
            </ul>
            <div className="flex items-center gap-3 text-slate-200">
              <a href="#" aria-label="twitter" className="hover:text-white">X</a>
              <a href="#" aria-label="instagram" className="hover:text-white">Instagram</a>
              <a href="#" aria-label="facebook" className="hover:text-white">Facebook</a>
              <a href="#" aria-label="linkedin" className="hover:text-white">LinkedIn</a>
              <a href="#" aria-label="youtube" className="hover:text-white">YouTube</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-8 justify-center md:justify-start">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Ff5b6363477f244439bbd28294d853f67?format=webp&width=200" alt="AMFI" className="h-16 object-contain" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Fde6115b41ff6407a909740b7cd0e3bab?format=webp&width=200" alt="BSE" className="h-16 object-contain" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Fa57cf15cdc3b46ecaaaa3addd5ef67f3?format=webp&width=200" alt="APMI" className="h-16 object-contain" />
            </div>
          </div>

          <div className="text-sm text-slate-200 max-w-2xl text-center md:text-right">
            <p className="mb-2">ASSOCIATION OF MUTUAL FUNDS IN INDIA REGISTERED MUTUAL FUND DISTRIBUTOR</p>
            <p className="mb-2">REGISTERED WITH BSE STAR MF</p>
            <p className="mb-2">APRM Code: APRN02811</p>
          </div>
        </div>

        <div className="text-xs text-slate-300 mt-8">
          <p>Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund, or designing a portfolio that suits your needs.</p>

          <p className="mt-4">© PROVIDENTIAL PLATFORMS PRIVATE LIMITED</p>
        </div>
      </div>
    </footer>
  );
}
