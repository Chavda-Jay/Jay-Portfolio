"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { RobotAvatar } from "@/ui/JayAIChatbot";

const SYSTEM_LOGS = [
  { threshold: 0, text: "Initializing Jay Chavda Neural Core..." },
  { threshold: 22, text: "Mounting RAG Pipelines & ChromaDB..." },
  { threshold: 50, text: "Connecting FastAPI Microservices..." },
  { threshold: 78, text: "Finalizing Production Architecture..." },
  { threshold: 96, text: "System Online • Welcome to Portfolio" },
];

export function AIPreloader() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState(SYSTEM_LOGS[0].text);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check session storage to avoid repeated reloads in the same browser session
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("jay_intro_seen") === "true";
    if (hasSeen) {
      const skipTimer = setTimeout(() => {
        setIsDismissed(true);
      }, 0);
      return () => clearTimeout(skipTimer);
    }

    const duration = 2500; // 2.5 seconds sweet spot
    const interval = 25; // 25ms increments
    const totalSteps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      const currentProgress = Math.min(Math.round((step / totalSteps) * 100), 100);
      setProgress(currentProgress);

      // Update system status log
      for (let i = SYSTEM_LOGS.length - 1; i >= 0; i--) {
        if (currentProgress >= SYSTEM_LOGS[i].threshold) {
          setCurrentLog(SYSTEM_LOGS[i].text);
          break;
        }
      }

      if (step >= totalSteps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          sessionStorage.setItem("jay_intro_seen", "true");
          setTimeout(() => {
            setIsDismissed(true);
          }, 650);
        }, 220);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (isDismissed) return null;

  // SVG Circular progress metrics
  const radius = 68;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090C] transition-all duration-700 ease-in-out select-none ${
        isExiting
          ? "opacity-0 -translate-y-6 scale-[0.98] pointer-events-none"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      {/* Background ambient radial grid & orange neon glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(#FF9900 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FF9900]/10 blur-[150px] pointer-events-none" />

      {/* Center Cinematic Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm px-6">
        
        {/* Holographic Circular HUD with 3D Robot Avatar in Center */}
        <div className="relative mb-7 flex items-center justify-center">
          
          {/* Outer Dashed Orbit Ring */}
          <div className="absolute w-[172px] h-[172px] rounded-full border border-[#FF9900]/25 border-dashed animate-orbit-spin pointer-events-none" />
          
          {/* Counter-rotating Inner Node Ring */}
          <div className="absolute w-[154px] h-[154px] rounded-full border border-white/[0.08] animate-orbit-reverse pointer-events-none">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
          </div>

          {/* Ambient Warm Halo Bloom behind the avatar */}
          <div className="absolute w-28 h-28 rounded-full bg-[#FF9900]/25 blur-2xl animate-pulse-glow pointer-events-none" />

          {/* SVG Circular Progress Ring */}
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90 drop-shadow-[0_0_16px_rgba(255,153,0,0.55)]"
          >
            <defs>
              <linearGradient id="circularLoaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF9900" />
                <stop offset="60%" stopColor="#FFAA33" />
                <stop offset="100%" stopColor="#FF7700" />
              </linearGradient>
            </defs>

            {/* Background Muted Track */}
            <circle
              stroke="rgba(255, 255, 255, 0.08)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            {/* Dynamic Active Progress Arc */}
            <circle
              stroke="url(#circularLoaderGradient)"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="transition-[stroke-dashoffset] duration-75 ease-out"
            />
          </svg>

          {/* Centered Robot Avatar inside the Circular Ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[104px] h-[104px] rounded-full bg-[#0D0F16]/90 border border-white/[0.12] shadow-2xl flex items-center justify-center backdrop-blur-xl">
              <RobotAvatar className="w-[84px] h-[84px]" idSuffix="circularPreloader" />
            </div>
          </div>

          {/* Floating Pill with Live Percentage */}
          <div className="absolute -bottom-3 px-3 py-0.5 rounded-full bg-[#111319] border border-[#FF9900]/40 shadow-lg shadow-black/80 text-xs font-mono font-bold text-[#FF9900] flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>{progress}%</span>
          </div>
        </div>

        {/* Brand Name & Title */}
        <div className="space-y-1 mb-5 mt-2">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <span>Jay Chavda</span>
            <Sparkles className="w-4 h-4 text-[#FF9900] animate-pulse" />
          </h1>
          <p className="text-xs font-mono tracking-[0.2em] text-[#FF9900] uppercase font-semibold">
            AI/ML &amp; Generative AI Engineer
          </p>
        </div>

        {/* System Status Log Readout */}
        <div className="w-64 sm:w-80 px-3 py-2 rounded-xl bg-[#111319]/80 border border-white/[0.08] backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#94A3B8]">
            <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse shrink-0" />
            <span className="truncate text-[11px] sm:text-xs text-[#CBD5E1]">
              {currentLog}
            </span>
          </div>
        </div>

        {/* Micro Footer Credits */}
        <div className="mt-6 text-[11px] font-mono text-[#64748B]">
          SVGU MCA (8.30 CGPA) • Generative AI &amp; RAG Systems
        </div>

      </div>
    </div>
  );
}
