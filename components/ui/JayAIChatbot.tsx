"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  RotateCcw,
  User,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import {
  ChatMessage,
  INITIAL_MESSAGES,
  INITIAL_SUGGESTIONS,
  getAIResponse,
} from "@/lib/ai-assistant";

let idCounter = 100;
function generateMessageId(prefix: string) {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

/**
 * Custom 3D Spherical AI Robot Avatar SVG
 * Tailored directly to the user's reference robot with signature amber & obsidian theme.
 */
export function RobotAvatar({
  className = "w-10 h-10",
  idSuffix = "main",
}: {
  className?: string;
  idSuffix?: string;
}) {
  const glowId = `amber-glow-${idSuffix}`;
  const shadowId = `soft-shadow-${idSuffix}`;
  const headGradId = `head-grad-${idSuffix}`;
  const visorGradId = `visor-grad-${idSuffix}`;
  const visorGlossId = `visor-gloss-${idSuffix}`;
  const earGradId = `ear-grad-${idSuffix}`;
  const baseGradId = `base-grad-${idSuffix}`;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Glow Filters */}
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.6" />
        </filter>

        {/* Outer Head Gradient: Premium Metallic Pearl with depth */}
        <linearGradient id={headGradId} x1="25" y1="12" x2="75" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#E2E8F0" />
          <stop offset="70%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        {/* Visor Screen Gradient: Deep Obsidian with subtle reflection */}
        <linearGradient id={visorGradId} x1="50" y1="28" x2="50" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F131D" />
          <stop offset="50%" stopColor="#08090C" />
          <stop offset="100%" stopColor="#141824" />
        </linearGradient>

        {/* Visor Gloss Reflection Curve */}
        <linearGradient id={visorGlossId} x1="30" y1="32" x2="70" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Ear Pod Gradient */}
        <linearGradient id={earGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        {/* Hover Pedestal Base Gradient */}
        <linearGradient id={baseGradId} x1="50" y1="80" x2="50" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#08090C" />
        </linearGradient>
      </defs>

      {/* Floating Hover Base / Pedestal */}
      <ellipse cx="50" cy="87" rx="33" ry="6.5" fill={`url(#${baseGradId})`} filter={`url(#${shadowId})`} />
      <ellipse
        cx="50"
        cy="86"
        rx="31"
        ry="5"
        stroke="#FF9900"
        strokeWidth="1.5"
        strokeOpacity="0.85"
        filter={`url(#${glowId})`}
      />
      <ellipse cx="50" cy="84" rx="25" ry="3.5" fill="#08090C" />

      {/* Ambient Floor Glow under Base */}
      <ellipse cx="50" cy="91" rx="28" ry="3.5" fill="#FF9900" fillOpacity="0.3" filter={`url(#${glowId})`} />

      {/* Left Ear Sensor Pod */}
      <circle cx="16" cy="48" r="7" fill={`url(#${earGradId})`} filter={`url(#${shadowId})`} />
      <circle
        cx="16"
        cy="48"
        r="5"
        stroke="#FF9900"
        strokeWidth="1.2"
        strokeOpacity="0.9"
        fill="#08090C"
        filter={`url(#${glowId})`}
      />
      <circle cx="16" cy="48" r="2" fill="#FF9900" />

      {/* Right Ear Sensor Pod */}
      <circle cx="84" cy="48" r="7" fill={`url(#${earGradId})`} filter={`url(#${shadowId})`} />
      <circle
        cx="84"
        cy="48"
        r="5"
        stroke="#FF9900"
        strokeWidth="1.2"
        strokeOpacity="0.9"
        fill="#08090C"
        filter={`url(#${glowId})`}
      />
      <circle cx="84" cy="48" r="2" fill="#FF9900" />

      {/* Main Spherical Robot Head (3D Sphere) */}
      <circle cx="50" cy="46" r="32" fill={`url(#${headGradId})`} filter={`url(#${shadowId})`} />
      {/* Top Head Highlight for 3D curved sphere realism */}
      <ellipse cx="45" cy="23" rx="15" ry="6.5" fill="#FFFFFF" fillOpacity="0.45" />

      {/* Dark Visor Screen */}
      <ellipse cx="50" cy="48" rx="24" ry="18" fill={`url(#${visorGradId})`} stroke="#1E293B" strokeWidth="1.2" />
      {/* Visor Gloss Reflection */}
      <path d="M 29 42 C 37 32, 63 32, 71 42 C 63 37, 37 37, 29 42 Z" fill={`url(#${visorGlossId})`} />

      {/* Glowing Amber Eyes (Theme #FF9900 with Glow) */}
      {/* Left Eye */}
      <ellipse cx="40" cy="47" rx="4" ry="6" fill="#FF9900" filter={`url(#${glowId})`} />
      <ellipse cx="39" cy="45" rx="1.4" ry="2" fill="#FFF4D4" />

      {/* Right Eye */}
      <ellipse cx="60" cy="47" rx="4" ry="6" fill="#FF9900" filter={`url(#${glowId})`} />
      <ellipse cx="59" cy="45" rx="1.4" ry="2" fill="#FFF4D4" />

      {/* Cute Friendly Robotic Smile */}
      <path
        d="M 44 58 Q 50 62 56 58"
        stroke="#FF9900"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${glowId})`}
      />
    </svg>
  );
}

export function JayAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMessage: ChatMessage = {
      id: generateMessageId("user"),
      sender: "user",
      text,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await getAIResponse(text);
      const aiMessage: ChatMessage = {
        id: generateMessageId("ai"),
        sender: "ai",
        text: response.text,
        timestamp: "Just now",
        actions: response.actions,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: generateMessageId("ai-err"),
        sender: "ai",
        text: "I'm having a brief connection pause. Please reach out to Jay directly via **chavdajay510@gmail.com**!",
        timestamp: "Just now",
        actions: [{ label: "Email Jay", href: "mailto:chavdajay510@gmail.com", isExternal: true }],
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setInputValue("");
    setIsTyping(false);
  };

  const formatMessageText = (content: string) => {
    const paragraphs = content.split("\n\n");
    return paragraphs.map((para, pIdx) => {
      const lines = para.split("\n");
      return (
        <div key={pIdx} className={pIdx > 0 ? "mt-2" : ""}>
          {lines.map((line, lIdx) => {
            const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
              <p
                key={lIdx}
                className={`${
                  isBullet
                    ? "pl-3 text-[13px] leading-relaxed relative my-1 text-[#CBD5E1]"
                    : "text-[13px] leading-relaxed"
                } ${lIdx > 0 && !isBullet ? "mt-1" : ""}`}
              >
                {parts.map((part, partIdx) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                      <strong key={partIdx} className="font-semibold text-white">
                        {part.slice(2, -2)}
                      </strong>
                    );
                  }
                  if (part.startsWith("*") && part.endsWith("*")) {
                    return (
                      <em key={partIdx} className="italic text-[#FF9900]">
                        {part.slice(1, -1)}
                      </em>
                    );
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>
      );
    });
  };

  return (
    <>
      {/* Compact Floating 3D Robot Avatar Trigger (Matches Image 2) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
        {!isOpen && (
          <div className="relative group">
            {/* Hover Tooltip / Speech Bubble */}
            <div className="absolute right-0 bottom-full mb-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111319]/95 border border-[#FF9900]/40 text-xs font-mono text-white shadow-xl shadow-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-1 group-hover:translate-y-0 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Ask Jay&apos;s AI</span>
              <span className="text-[#FF9900] text-[10px]">✨</span>
            </div>

            {/* Circular Floating Robot Button */}
            <button
              onClick={() => {
                setIsOpen(true);
                setHasUnread(false);
              }}
              aria-label="Open Jay's AI Assistant"
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0D0F16]/90 hover:bg-[#141722] border border-[#FF9900]/40 hover:border-[#FF9900] shadow-[0_4px_25px_rgba(255,153,0,0.35),0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_6px_35px_rgba(255,153,0,0.55)] backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer animate-float-levitate"
            >
              {/* Pulsing Radar Aura Ring */}
              <span className="absolute -inset-1 rounded-full bg-[#FF9900]/15 animate-ping opacity-60" />

              {/* 3D Robot Avatar Icon */}
              <RobotAvatar className="w-11 h-11 sm:w-13 sm:h-13 transition-transform group-hover:scale-105" idSuffix="btn" />

              {/* Online Green Pulsing Indicator */}
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#10B981] border-2 border-[#0D0F16]" />
              </span>

              {/* Unread "AI" Micro Badge */}
              {hasUnread && (
                <span className="absolute -bottom-1 -left-1 px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-[#FF9900] text-[#08090C] border border-[#08090C] shadow-md shadow-[#FF9900]/50 animate-bounce">
                  AI
                </span>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Jay Chavda AI Assistant Chat"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[85vh] flex flex-col bg-[#0D0F16]/98 backdrop-blur-2xl border border-white/[0.14] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(255,153,0,0.2)] overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header with 3D Robot Avatar */}
          <div className="px-4 py-3.5 sm:px-5 sm:py-3.5 bg-[#141721]/95 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#08090C] border border-[#FF9900]/40 flex items-center justify-center shadow-md shadow-[#FF9900]/25 overflow-hidden">
                  <RobotAvatar className="w-9 h-9" idSuffix="header" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-[#0D0F16]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-heading font-bold text-white tracking-wide">
                    Jay Chavda AI
                  </h3>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold uppercase bg-[#FF9900]/15 text-[#FF9900] border border-[#FF9900]/30">
                    RAG Bot
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8] flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Online • Ask anything about Jay
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="w-8 h-8 rounded-lg hover:bg-white/10 text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="w-8 h-8 rounded-lg hover:bg-white/10 text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="w-7 h-7 rounded-full bg-[#08090C] border border-[#FF9900]/40 flex items-center justify-center shrink-0 mt-0.5 overflow-hidden shadow-sm shadow-[#FF9900]/30">
                    <RobotAvatar className="w-6 h-6" idSuffix={`msg-${msg.id}`} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-md ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-[#08090C] rounded-tr-none font-medium"
                      : "bg-[#161922] border border-white/[0.08] text-[#E2E8F0] rounded-tl-none"
                  }`}
                >
                  {formatMessageText(msg.text)}

                  {/* Optional Action Pills */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-white/[0.1] flex flex-wrap gap-1.5">
                      {msg.actions.map((act, aIdx) => (
                        <a
                          key={aIdx}
                          href={act.href}
                          target={act.isExternal ? "_blank" : undefined}
                          rel={act.isExternal ? "noopener noreferrer" : undefined}
                          onClick={() => {
                            if (!act.isExternal && act.href.startsWith("#")) {
                              setIsOpen(false);
                            }
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/[0.08] hover:bg-[#FF9900] text-[#E2E8F0] hover:text-[#08090C] border border-white/[0.12] hover:border-[#FF9900] transition-all hover:scale-105 active:scale-95"
                        >
                          <span>{act.label}</span>
                          {act.isExternal ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                        </a>
                      ))}
                    </div>
                  )}

                  <div
                    className={`mt-1.5 text-[10px] font-mono text-right ${
                      msg.sender === "user" ? "text-[#08090C]/70" : "text-[#64748B]"
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 text-white">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-[#08090C] border border-[#FF9900]/40 flex items-center justify-center shrink-0 overflow-hidden">
                  <RobotAvatar className="w-6 h-6 animate-pulse" idSuffix="typing" />
                </div>
                <div className="bg-[#161922] border border-white/[0.08] rounded-2xl rounded-tl-none p-3.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Starter Chips */}
          {messages.length <= 2 && !isTyping && (
            <div className="px-4 py-2 bg-[#12151D]/60 border-t border-white/[0.04]">
              <p className="text-[11px] font-mono text-[#94A3B8] mb-1.5">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {INITIAL_SUGGESTIONS.map((suggestion, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleSendMessage(suggestion)}
                    className="text-[11px] font-sans px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-[#FF9900]/15 border border-white/[0.08] hover:border-[#FF9900]/40 text-[#CBD5E1] hover:text-[#FF9900] transition-colors text-left"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-[#111319] border-t border-white/[0.08]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Jay's AI projects, skills, resume..."
                disabled={isTyping}
                className="flex-1 px-4 py-2.5 rounded-full bg-[#08090C] border border-white/[0.12] focus:border-[#FF9900] text-xs sm:text-sm text-white placeholder-[#64748B] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message to AI"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-[#08090C] hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#FF9900]/20 shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-[#64748B] font-mono px-1">
              <span>Powered by RAG Knowledge Engine</span>
              <span>Press Enter ↵</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
