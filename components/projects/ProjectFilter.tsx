"use client";

import React from "react";
import { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

export type FilterCategory = "All" | ProjectCategory;

const CATEGORIES: FilterCategory[] = [
  "All",
  "Generative AI",
  "Full-Stack",
  "Machine Learning",
  "Automation",
];

interface ProjectFilterProps {
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  counts?: Record<FilterCategory, number>;
}

export function ProjectFilter({
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0A1020]/90 border border-[#1E2A4A] backdrop-blur-md max-w-fit mx-auto"
    >
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat;
        const count = counts ? counts[cat] : undefined;

        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] flex items-center gap-2",
              isActive
                ? "bg-gradient-to-r from-[#2F6BFF] to-[#8B5CF6] text-white shadow-md shadow-[#2F6BFF]/20 font-semibold"
                : "text-[#8C97B5] hover:text-[#E8ECF8] hover:bg-[#101935]"
            )}
          >
            <span>{cat}</span>
            {count !== undefined && (
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded-md text-[10px] font-mono",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#1E2A4A] text-[#8C97B5]"
                )}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
