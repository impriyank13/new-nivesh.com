import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0D3B66] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Goals */}
          <div>
            <h4 className="text-white font-semibold mb-4">Goals</h4>
            <ul className="text-sm space-y-2 text-white/90">
              <li className="mb-2">Retirement Plan</li>
              <li className="mb-2">Save For Children</li>
              <li className="mb-2">Save Tax</li>
              <li className="mb-2">Build Long Term Wealth</li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a href={"https://play.google.com/store/apps/details?id=com.nivesh.production\" target=\"_blank\"><img src=\"/b1e0ea7105b59c39914f42a97c0927eb.svg\" alt=\"\" class=\"img-responsive2"}></a>
              <a href={"https://apps.apple.com/in/app/nivesh-wealth-management-app/id6740700135\" target=\"_blank\"><img src=\"/39662a6f385663aae1cec89625b9f278.svg\" alt=\"\" class=\"img-responsive2"}></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2 text-white/90">
              <li className="mb-2">
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <Link to="/calculators" className="hover:underline">
                  Calculators
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/career" className="hover:underline">
                  Career
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/data-security" className="hover:underline">
                  Data Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="text-sm space-y-2 text-white/90">
              <li className="mb-2">Mutual Funds</li>
              <li className="mb-2">Fixed Deposit</li>
              <li className="mb-2">PMS</li>
              <li className="mb-2">AIF</li>
              <li className="mb-2">NPS</li>
              <li className="mb-2">Bond</li>
              <li className="mb-2">Home Loan</li>
              <li className="mb-2">Loan Against Securities (LAS)</li>
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h4 className="text-white font-semibold mb-4">Partner</h4>
            <ul className="text-sm space-y-2 text-white/90">
              <li className="mb-2">Be A Nivesh Partner</li>
              <li className="mb-2">Become MF Distributor</li>
              <li className="mb-2">Grow Your MF Business</li>
              <li className="mb-2">NISM Certification</li>
              <li className="mb-2">AMFI ARN Code</li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {/* social icons */}
              <a
                href="#"
                aria-label="x"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M23 3L12 14"></path>
                  <path d="M1 11L12 22"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <rect x="3" y="3" width="18" height="18" rx="4" ry="4"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <path d="M17.5 6.5h.01"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="linkedin"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4V8h4v2" />
                  <rect x="2" y="9" width="4" height="12"></rect>
                </svg>
              </a>
              <a
                href="#"
                aria-label="youtube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"></path>
                  <path d="M9.75 15.02l5.5-3.02-5.5-3.02v6.04z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-center">
            <div className="flex flex-col items-center gap-3">
              <img
                src="https://nivesh.com/b04c5ce2bc8fa782eb8c085ce06a9509.png"
                alt="AMFI"
                className="h-12 object-contain"
              />
              <div className="text-sm text-white/90">
                <div className="font-semibold">
                  Association of Mutual Funds in India
                </div>
                <div>Registered Mutual Fund Distributor</div>
                <div className="mt-1">ARN: 115287</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img
                src="https://nivesh.com/be1189a724474572c653fe1287ea80dd.png"
                alt="BSE"
                className="h-12 object-contain"
              />
              <div className="text-sm text-white/90">
                <div className="font-semibold">Registered with BSE STAR MF</div>
                <div>Member ID: 11758</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img
                src="https://nivesh.com/45eecdaeab31105729ebf780d8f0525a.jpeg"
                alt="APMI"
                className="h-12 object-contain"
              />
              <div className="text-sm text-white/90">
                <div className="font-semibold">APRN Code</div>
                <div>APRN02811</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal / Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/70">
          <p className="max-w-4xl mx-auto">
            Mutual fund investments are subject to market risks. Please read the
            scheme information and other related documents carefully before
            investing. Past performance is not indicative of future returns.
            Please consider your specific investment requirements before
            choosing a fund, or designing a portfolio that suits your needs.
          </p>
          <p className="mt-4">© Providential Platforms Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
