import React from 'react';
import {
  ChevronRight,
  Landmark,
  Ship,
  Route,
  CalendarDays,
  LucideIcon
} from 'lucide-react';

interface PathItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const paths: PathItem[] = [
  {
    title: "Kingdoms of West Africa",
    description: "From Ghana Empire to Songhai",
    icon: Landmark,
    color: "#E2A540" // Replaced CSS variable string interpolation with clean fallback hex code
  },
  {
    title: "Origins of the Swahili Coast",
    description: "Trade, language and cultural exchange",
    icon: Ship,
    color: "#4F7EF7"
  },
  {
    title: "Ancient African Trade Routes",
    description: "The routes that connected empires",
    icon: Route,
    color: "#57C785"
  },
  {
    title: "African Independence Timeline",
    description: "A journey through liberation movements",
    icon: CalendarDays,
    color: "#F87171"
  }
];

export default function FeaturedKnowledgePaths() {
  return (
    <section className="px-5 py-6 bg-[var(--afri-surface)]">
      
      {/* Component Title Header */}
      <h2 className="text-base font-bold text-[var(--afri-text)] tracking-tight mb-4">
        Featured Knowledge Paths
      </h2>

      {/* Traversal List Framework */}
      <div className="flex flex-col gap-3">
        {paths.map((path) => {
          const IconComponent = path.icon;

          return (
            <button
              key={path.title}
              className="group w-full text-left flex items-center justify-between p-3.5 bg-[var(--afri-surface)] border border-[var(--afri-border)] rounded-2xl shadow-sm transition-all duration-150 active:scale-[0.99] active:bg-slate-50/60 cursor-pointer focus:outline-none"
            >
              {/* Left Content Cluster */}
              <div className="flex items-center gap-3.5 min-w-0">
                
                {/* Visual Icon Bubble Frame */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  style={{ backgroundColor: `${path.color}12` }}
                >
                  <IconComponent
                    size={22}
                    style={{ color: path.color }}
                  />
                </div>

                {/* Typography Labels Stack */}
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-[var(--afri-text)] leading-tight mb-0.5 break-words group-hover:text-[var(--afri-gold)] transition-colors duration-150">
                    {path.title}
                  </span>
                  <span className="text-[11px] font-medium text-[var(--afri-text-muted)] line-clamp-1 break-words">
                    {path.description}
                  </span>
                </div>

              </div>

              {/* Navigation Indicator Icon */}
              <ChevronRight
                size={16}
                className="text-slate-400 group-active:translate-x-0.5 transition-transform duration-150 ml-2 shrink-0"
              />
            </button>
          );
        })}
      </div>

    </section>
  );
}
