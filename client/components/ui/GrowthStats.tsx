import React from "react";

function StatCard({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm p-4 text-white">
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-sm opacity-90 leading-snug">{title}</div>
      {sub ? <div className="text-xs opacity-80 mt-1">{sub}</div> : null}
    </div>
  );
}

function BottomStat({ value, title }: { value: string; title: string }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/5 p-6 text-center text-white">
      <div className="text-2xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-2 text-sm opacity-90">{title}</div>
    </div>
  );
}

export default function GrowthStats() {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        {/* Top: gradient background with map and two stats */}
        <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-rose-500">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2">
            {/* Left: Map */}
            <div className="flex items-center justify-center">
              <img
                src="https://nivesh.com/87cf2b70a3ba03a3a968e25fe1313a92.webp"
                alt="India map with partner locations"
                className="max-h-80 w-auto drop-shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Right: headline + stat cards */}
            <div className="flex flex-col justify-center gap-5 text-white">
              <h2 className="text-center md:text-left text-2xl md:text-3xl font-extrabold">
                We Have Grown From Strength to Strength
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatCard title="Partners in 785 cities across India" value="10,744" />
                <StatCard title="Customers spread over 3,000 pincodes" value="55,220" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: three stats in subtle red background */}
        <div className="bg-gradient-to-r from-rose-500 via-rose-500 to-rose-400">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-3">
            <BottomStat value="43,25,220" title="Transactions Executed" />
            <div className="rounded-xl border border-white/20 bg-white/5 p-6 flex items-center justify-center">
              <svg
                aria-label="Rupee transactions icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-14 w-14 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 6h9" />
                <path d="M7 10h9" />
                <path d="M7 6c4 10 8 10 8 10H7" />
                <path d="M16 17l3 3-3 3" />
                <path d="M8 23l-3-3 3-3" />
              </svg>
            </div>
            <BottomStat value="Rs. 5,802" title="Crore - Transaction Value" />
          </div>
        </div>
      </div>
    </section>
  );
}
