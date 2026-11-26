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
      className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#111319]/90 border border-white/[0.1] backdrop-blur-md max-w-fit mx-auto"
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
              "px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900] flex items-center gap-2",
              isActive
                ? "bg-[#FF9900] text-[#08090C] shadow-md shadow-[#FF9900]/30 font-semibold"
                : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#161822]"
            )}
          >
            <span>{cat}</span>
            {count !== undefined && (
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded-md text-[10px] font-mono",
                  isActive
                    ? "bg-[#08090C]/25 text-[#08090C] font-semibold"
                    : "bg-[#08090C] text-[#94A3B8] border border-white/[0.08]"
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
