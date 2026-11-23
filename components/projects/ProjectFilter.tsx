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
      className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#151C2C]/90 border border-[rgba(148,163,184,0.12)] backdrop-blur-md max-w-fit mx-auto"
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
              "px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] flex items-center gap-2",
              isActive
                ? "bg-[#8B5CF6] text-white shadow-md shadow-[#8B5CF6]/30 font-semibold"
                : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0B1120]"
            )}
          >
            <span>{cat}</span>
            {count !== undefined && (
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded-md text-[10px] font-mono",
                  isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "bg-[#0B1120] text-[#94A3B8] border border-[rgba(148,163,184,0.12)]"
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
