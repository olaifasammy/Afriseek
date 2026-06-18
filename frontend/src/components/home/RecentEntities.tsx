import React from 'react';
import {
  Building2,
  Users,
  Landmark,
  ChevronRight,
  LucideIcon
} from 'lucide-react';

interface EntityItem {
  name: string;
  type: string;
  icon: LucideIcon;
  color: string;
}

const entities: EntityItem[] = [
  {
    name: "Misrata",
    type: "City • Libya",
    icon: Building2,
    color: "#4F7EF7"
  },
  {
    name: "Amazigh",
    type: "Ethnic Group",
    icon: Users,
    color: "#57C785"
  },
  {
    name: "Oyo Empire",
    type: "Historical Kingdom",
    icon: Landmark,
    color: "#E2A540" // Swapped var string to hex to safely handle the transparent alpha mix
  }
];

export default function RecentEntities() {
  return (
    <section className="px-5 py-6 bg-[var(--afri-surface)]">
      
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-bold text-[var(--afri-text)] tracking-tight">
          Recently Added
        </h2>
        <button className="flex items-center gap-0.5 text-xs font-bold text-[var(--afri-gold)] transition-opacity active:opacity-70">
          <span>View all</span>
          <ChevronRight size={14} className="mt-0.5" />
        </button>
      </div>

      {/* Vertical Interactive List */}
      <div className="flex flex-col gap-3">
        {entities.map((item) => {
          const IconComponent = item.icon;

          return (
            <button
              key={item.name}
              className="group w-full text-left flex items-center justify-between p-3.5 bg-[var(--afri-surface)] border border-[var(--afri-border)] rounded-2xl shadow-sm transition-all duration-150 active:scale-[0.99] active:bg-slate-50/60 cursor-pointer focus:outline-none"
            >
              {/* Left Content Cluster */}
              <div className="flex items-center gap-3.5">
                
                {/* Icon Wrapper Frame */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  style={{ backgroundColor: `${item.color}12` }}
                >
                  <IconComponent
                    size={22}
                    style={{ color: item.color }}
                  />
                </div>

                {/* Typography Labels */}
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[var(--afri-text)] leading-tight mb-0.5">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-medium text-[var(--afri-text-muted)]">
                    {item.type}
                  </span>
                </div>

              </div>

              {/* Traversal Chevron Indicator */}
              <ChevronRight
                size={16}
                className="text-slate-400 group-active:translate-x-0.5 transition-transform duration-150"
              />
            </button>
          );
        })}
      </div>

    </section>
  );
}
