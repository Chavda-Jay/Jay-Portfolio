"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TiltGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
}

export function TiltGlassCard({
  children,
  className,
  glowColor = "rgba(255, 153, 0, 0.16)",
  maxTilt = 6,
  ...props
}: TiltGlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setCoords({ x, y });

      // Calculate tilt (-maxTilt to +maxTilt)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = -((y - centerY) / centerY) * maxTilt;
      const tiltY = ((x - centerX) / centerX) * maxTilt;

      setTilt({ x: tiltX, y: tiltY });
    },
    [maxTilt]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setCoords(null);
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: isHovered
          ? "transform 0.12s ease-out, border-color 0.3s ease, box-shadow 0.3s ease"
          : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      className={cn(
        "relative rounded-2xl bg-[#111319]/80 border border-white/[0.1] backdrop-blur-xl transition-all duration-300 overflow-hidden group select-none shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:border-[#FF9900]/50 hover:shadow-[0_20px_45px_rgba(255,153,0,0.14)]",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Beam */}
      {isHovered && coords && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Subtle top edge frosted light reflection */}
      <div 
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" 
        aria-hidden="true"
      />

      <div className="relative z-20 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
