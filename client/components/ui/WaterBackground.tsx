import React from "react";

export default function WaterBackground() {
  return (
    <div className="water-bg fixed inset-0 -z-10 pointer-events-none">
      <div className="wave wave-1" />
      <div className="wave wave-2" />
      <div className="wave wave-3" />
    </div>
  );
}
