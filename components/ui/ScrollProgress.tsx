"use client";

import React, { useState, useEffect } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (scrollTop / docHeight) * 100;
        setProgress(Math.min(Math.max(scrolled, 0), 100));
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#FF9900] via-[#FFAA33] to-[#FF8800] transition-[width] duration-75 ease-out shadow-[0_0_12px_rgba(255,153,0,0.85),0_0_20px_rgba(255,153,0,0.4)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
