"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  pullFactor?: number;
}

export function MagneticWrapper({
  children,
  className,
  pullFactor = 0.28,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = (e.clientX - centerX) * pullFactor;
      const distanceY = (e.clientY - centerY) * pullFactor;
      setPosition({ x: distanceX, y: distanceY });
    },
    [pullFactor]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.4 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
