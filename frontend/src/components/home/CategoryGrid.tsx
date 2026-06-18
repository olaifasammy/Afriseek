import React from 'react';
import {
  Globe,
  Users,
  Landmark,
  ScrollText,
  CalendarDays,
  FileText,
  ChevronRight,
  LucideIcon
} from 'lucide-react';

interface CategoryItem {
  name: string;
  count: string;
  color: string;
  icon: LucideIcon;
}

const categories: CategoryItem[] = [
  {
    name: "Geography",
    count: "532",
    color: "#4F7EF7",
    icon: Globe
  },
  {
    name: "Peoples & Identity",
    count: "432",
    color: "#57C785",
    icon: Users
  },
  {
    name: "Culture",
    count: "423",
    color: "#8B7CFF",
    icon: Landmark
  },
  {
    name: "History",
    count: "412",
    color: "#E2A540", // Standardized to hex matching your golden brand tone
    icon: ScrollText
  },
  {
    name: "Events",
    count: "318",
    color: "#F87171",
    icon: CalendarDays
  },
  {
    name: "Articles",
    count: "1,243",
    color: "#60A5FA",
    icon: FileText
  }
];

export default function CategoryGrid() {
  return (
    <section className="px-5 py-6 bg-[var(--afri-surface)]">
      
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-bold text-[var(--afri-text)] tracking-tight">
          Explore by Category
        </h2>
        <button className="flex items-center gap-0.5 text-xs font-bold text-[var(--afri-gold)] transition-opacity active:opacity-70">
          <span>View all</span>
          <ChevronRight size={14} className="mt-0.5" />
        </button>
      </div>

      {/* Interactive Grid System */}
      <div className="grid grid-cols-2 gap-3.5">
        {categories.map((item) => {
          const IconComponent = item.icon;

          return (
            <button
              key={item.name}
              className="flex flex-col items-center p-4 text-center bg-[var(--afri-surface)] border border-[var(--afri-border)] rounded-2xl shadow-sm transition-all duration-150 active:scale-[0.96] active:border-slate-300 active:shadow-none cursor-pointer focus:outline-none"
            >
              {/* Dynamic Tinted Icon Bubble */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full mb-3"
                style={{ backgroundColor: `${item.color}12` }}
              >
                <IconComponent
                  size={24}
                  style={{ color: item.color }}
                />
              </div>

              {/* Category Name Label */}
              <span className="text-xs font-bold text-[var(--afri-text)] leading-tight mb-1">
                {item.name}
              </span>

              {/* Quantified Node Counter Subtext */}
              <span className="text-[11px] font-medium text-[var(--afri-text-muted)] tracking-wide">
                {item.count} <span className="text-[10px] opacity-70">nodes</span>
              </span>
            </button>
          );
        })}
      </div>

    </section>
  );
}
