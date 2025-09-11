import React from "react";

function StatCard({
  title,
  value,
  sub,
  img,
  position,
}: {
  title: string;
  value: string;
  sub?: string;
  img?: string;
}) {
  return (
    <div className="rounded-xl flex border border-white/20 bg-white/5 backdrop-blur-sm p-4 text-white">
      <div>
        <div className="text-lg font-semibold">{value}</div>
        <div className="text-sm opacity-90 leading-snug">{title}</div>
      </div>
      {sub ? <div className="text-xs opacity-80 mt-1">{sub}</div> : null}
<img src={img} alt="img-right" width="70px" />
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
        <div className="bg-sky-900">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2">
            {/* Left: Map */}
            <div className="flex items-center justify-center">
              <img
                src="https://nivesh.com/87cf2b70a3ba03a3a968e25fe1313a92.webp"
                alt="India map with partner locations"
                className="max-h-80 w-auto drop-shadow-lg"
                loading="lazy"
                height="500px"
              />
            </div>

            {/* Right: headline + stat cards */}
            <div className="flex flex-col justify-center gap-5 text-white">
              <h2 className="text-center md:text-left text-2xl md:text-3xl font-extrabold">
                We Have Grown From Strength to Strength
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatCard
                  title="Partners in 785 cities across India"
                  value="10,744"
                  img="https://nivesh.com/01949c5f5dcc5fe013ed7d3253954d02.webp"
                />
                <StatCard
                  title="Customers spread over 3,000 pincodes"
                  value="55,220"
                  img="https://nivesh.com/f9823ef3dfe5b73ef4f09065f079db70.webp"
                />
                <BottomStat value="43,25,220" title="Transactions Executed" />
                <BottomStat
                  value="Rs. 5,802"
                  title="Crore - Transaction Value"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
