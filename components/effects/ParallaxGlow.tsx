import React from "react";

export function ParallaxGlow() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Top Right Ambient Warm Amber Glow (Behind Hero Portrait) */}
      <div
        className="absolute -top-32 right-[5%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-25"
        style={{
          background: "radial-gradient(circle, #FF9900 0%, #D97706 40%, transparent 70%)",
        }}
      />

      {/* Subtle Lower Left Dark Slate Bloom */}
      <div
        className="absolute top-[50%] -left-40 w-[500px] h-[500px] rounded-full blur-[170px] opacity-10"
        style={{
          background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
