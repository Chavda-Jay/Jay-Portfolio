"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface WordItem {
  text: string;
  isAmber?: boolean;
  hasBloom?: boolean;
}

export function AnimatedHeroHeadline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const line1: WordItem[] = [
    { text: "Building" },
    { text: "AI", isAmber: true, hasBloom: true },
    { text: "That" },
  ];

  const line2: WordItem[] = [
    { text: "Works" },
    { text: "in" },
    { text: "the" },
    { text: "Real", isAmber: true, hasBloom: true },
    { text: "World.", isAmber: true, hasBloom: true },
  ];

  let wordIndexCounter = 0;

  return (
    <h1 
      className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white tracking-tight leading-[1.14] select-none"
      aria-label="Building AI That Works in the Real World."
    >
      {/* Line 1: Building AI That */}
      <span className="flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5">
        {line1.map((word, i) => {
          const index = wordIndexCounter++;
          return (
            <motion.span
              key={`l1-${word.text}-${i}`}
              initial={{ opacity: 0, y: 32, filter: "blur(10px)", scale: 0.94 }}
              animate={mounted ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.12 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block relative transition-all duration-300 ${
                word.isAmber 
                  ? "text-[#FF9900] drop-shadow-[0_0_22px_rgba(255,153,0,0.65)] font-extrabold" 
                  : "text-white"
              }`}
            >
              {word.text}
              {word.hasBloom && (
                <span 
                  className="absolute inset-0 bg-[#FF9900]/25 blur-lg rounded-full -z-10 pointer-events-none animate-pulse-glow" 
                  aria-hidden="true" 
                />
              )}
            </motion.span>
          );
        })}
      </span>

      {/* Line 2: Works in the Real World. + Blinking Cursor */}
      <span className="flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5 mt-1 sm:mt-1.5">
        {line2.map((word, i) => {
          const index = wordIndexCounter++;
          return (
            <motion.span
              key={`l2-${word.text}-${i}`}
              initial={{ opacity: 0, y: 32, filter: "blur(10px)", scale: 0.94 }}
              animate={mounted ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.12 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block relative transition-all duration-300 ${
                word.isAmber 
                  ? "text-[#FF9900] drop-shadow-[0_0_22px_rgba(255,153,0,0.65)] font-extrabold" 
                  : "text-white"
              }`}
            >
              {word.text}
              {word.hasBloom && (
                <span 
                  className="absolute inset-0 bg-[#FF9900]/25 blur-lg rounded-full -z-10 pointer-events-none animate-pulse-glow" 
                  aria-hidden="true" 
                />
              )}
            </motion.span>
          );
        })}
      </span>
    </h1>
  );
}
