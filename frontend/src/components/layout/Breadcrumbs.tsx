import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb"
      className="w-full px-5 py-3.5 bg-[var(--afri-surface)] border-b border-[var(--afri-border)] overflow-x-auto scrollbar-none"
    >
      <ol className="flex items-center gap-2 whitespace-nowrap min-w-max">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li 
              key={item.label} 
              className="flex items-center gap-2 text-xs font-medium"
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                // Active Leaf Node
                <span className="px-2 py-0.5 text-[var(--afri-gold)] bg-[var(--afri-gold)]/10 rounded-md font-semibold border border-[var(--afri-gold)]/20 tracking-wide">
                  {item.label}
                </span>
              ) : (
                // Intermediary Navigational Segments
                <Link
                  to={item.href || "#"}
                  className="text-[var(--afri-text-muted)] transition-colors duration-150 hover:text-[var(--afri-text)] active:text-[var(--afri-gold)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--afri-gold)] rounded-sm"
                >
                  {item.label}
                </Link>
              )}

              {/* Traversal Separator Icon */}
              {!isLast && (
                <ChevronRight
                  size={12}
                  className="text-slate-400/70 shrink-0 mt-[1px]"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
