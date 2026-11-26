"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  Bot,
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
    // Split into paragraphs
    const paragraphs = content.split("\n\n");
    return paragraphs.map((para, pIdx) => {
      // Split into lines for bullet lists
      const lines = para.split("\n");
      return (
        <div key={pIdx} className={pIdx > 0 ? "mt-2" : ""}>
          {lines.map((line, lIdx) => {
            const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
            // Bold parser **text**
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
              <p
                key={lIdx}
                className={`${isBullet ? "pl-3 text-[13px] leading-relaxed relative my-1 text-[#CBD5E1]" : "text-[13px] leading-relaxed"} ${
                  lIdx > 0 && !isBullet ? "mt-1" : ""
                }`}
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
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => {
              setIsOpen(true);
              setHasUnread(false);
            }}
            aria-label="Chat with Jay's AI Assistant"
            className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#111319]/95 hover:bg-[#181B24] border border-[#FF9900]/40 hover:border-[#FF9900] shadow-[0_8px_30px_rgba(255,153,0,0.25)] hover:shadow-[0_10px_35px_rgba(255,153,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            {/* Pulsing Radar Ring */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9900] opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FF9900]" />
            </span>

            {/* Glowing Icon */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF9900] to-[#FFB84D] flex items-center justify-center text-[#08090C] font-bold shadow-md shadow-[#FF9900]/30 group-hover:rotate-12 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#FF9900] flex items-center gap-1">
                Ask Jay&apos;s AI
              </span>
              <span className="text-[11px] text-[#94A3B8] font-sans">
                Interactive Assistant
              </span>
            </div>

            {hasUnread && (
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-[#FF9900]/20 text-[#FF9900] border border-[#FF9900]/30 animate-pulse">
                New
              </span>
            )}
          </button>
        )}
      </div>

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Jay Chavda AI Assistant Chat"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[85vh] flex flex-col bg-[#0D0F16]/98 backdrop-blur-2xl border border-white/[0.14] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,153,0,0.15)] overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-[#141721]/90 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF9900] to-[#FFAA33] flex items-center justify-center text-[#08090C] font-bold shadow-md shadow-[#FF9900]/30">
                  <Bot className="w-5 h-5 text-[#08090C]" />
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
                  <div className="w-7 h-7 rounded-full bg-[#FF9900]/20 border border-[#FF9900]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#FF9900]">
                    <Sparkles className="w-3.5 h-3.5" />
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
                <div className="w-7 h-7 rounded-full bg-[#FF9900]/20 border border-[#FF9900]/40 flex items-center justify-center shrink-0 text-[#FF9900]">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
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
