"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function AmbientCursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Smooth fluid spring motion for ambient aura
  const springX = useSpring(0, { damping: 28, stiffness: 180, mass: 0.6 });
  const springY = useSpring(0, { damping: 28, stiffness: 180, mass: 0.6 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [springX, springY, visible]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.4 } }}
      className="fixed top-0 left-0 w-[520px] h-[520px] rounded-full pointer-events-none -z-10 blur-[140px]"
      aria-hidden="true"
    >
      <div 
        className="w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 153, 0, 0.06) 0%, rgba(139, 92, 246, 0.02) 45%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
