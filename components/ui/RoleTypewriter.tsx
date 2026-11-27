"use client";

import React, { useState, useEffect } from "react";

const roles = [
  "AI/ML Engineer | Generative AI Developer",
  "LLM & Multi-Agent Systems Architect",
  "Production RAG & Vector Pipeline Engineer",
];

export function RoleTypewriter() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(55 + Math.random() * 30); // Natural human rhythm

        if (displayText.length + 1 === fullText.length) {
          // Pause at completed text before deleting
          setTypingSpeed(2600);
          setIsDeleting(true);
        }
      } else {
        // Deleting characters
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(30);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // Pause before typing next role
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed, currentRoleIndex]);

  return (
    <div className="mt-2.5 flex items-center gap-2.5 text-base sm:text-lg font-sans min-h-[32px]">
      <span className="text-[#FF9900] font-black text-xl animate-pulse">|</span>
      <span className="text-[#E2E8F0] font-semibold tracking-wide font-mono">
        {displayText}
        <span className="inline-block w-2 h-4 sm:h-5 ml-1 bg-[#FF9900] animate-pulse align-middle rounded-sm" />
      </span>
    </div>
  );
}
