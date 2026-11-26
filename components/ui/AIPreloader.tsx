"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { RobotAvatar } from "@/ui/JayAIChatbot";

const SYSTEM_LOGS = [
  { threshold: 0, text: "Initializing Jay Chavda Neural Core..." },
  { threshold: 25, text: "Mounting RAG Pipelines & ChromaDB..." },
  { threshold: 55, text: "Connecting FastAPI Microservices..." },
  { threshold: 80, text: "Finalizing Production Architecture..." },
  { threshold: 98, text: "System Online • Welcome to Portfolio" },
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

    const duration = 2400; // 2.4 seconds total sweet spot
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
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setIsExiting(true);
    sessionStorage.setItem("jay_intro_seen", "true");
    setTimeout(() => {
      setIsDismissed(true);
    }, 300);
  };

  if (isDismissed) return null;

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
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(#FF9900 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FF9900]/10 blur-[140px] pointer-events-none" />

      {/* Skip Button Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={handleSkip}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-[#FF9900]/50 text-xs font-mono text-[#94A3B8] hover:text-[#FF9900] transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <span>Skip</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center Cinematic Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm px-6">
        
        {/* Glowing Holographic Badge with 3D Robot Avatar */}
        <div className="relative mb-6 group">
          {/* Pulsing Aura Rings */}
          <div className="absolute -inset-3 rounded-3xl bg-[#FF9900]/20 blur-xl animate-pulse" />
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#FF9900] to-[#E68A00] opacity-40 animate-spin [animation-duration:8s]" />

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0D0F16] border border-white/[0.16] shadow-2xl flex items-center justify-center p-2 backdrop-blur-xl">
            <RobotAvatar className="w-16 h-16 sm:w-20 sm:h-20" idSuffix="preloader" />
          </div>
        </div>

        {/* Brand Name & Title */}
        <div className="space-y-1 mb-8">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <span>Jay Chavda</span>
            <Sparkles className="w-4 h-4 text-[#FF9900] animate-pulse" />
          </h1>
          <p className="text-xs font-mono tracking-[0.2em] text-[#FF9900] uppercase font-semibold">
            AI/ML &amp; Generative AI Engineer
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-80 space-y-3">
          {/* Progress Bar Track */}
          <div className="w-full h-2 rounded-full bg-[#111319] border border-white/[0.12] p-0.5 overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#FF9900] via-[#FFAA33] to-[#FF8800] transition-all duration-75 ease-out shadow-[0_0_15px_#FF9900]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Number & System Status Row */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-[#CBD5E1] truncate pr-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
              <span className="truncate text-[11px] sm:text-xs text-[#94A3B8]">
                {currentLog}
              </span>
            </div>
            <span className="text-sm font-bold text-[#FF9900] shrink-0 font-mono">
              {progress}%
            </span>
          </div>
        </div>

        {/* Micro Footer Credits */}
        <div className="mt-8 text-[11px] font-mono text-[#64748B]">
          SVGU MCA (8.30 CGPA) • Generative AI &amp; RAG Systems
        </div>

      </div>
    </div>
  );
}
