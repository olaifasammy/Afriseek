import React from 'react';
import {
  FileText,
  ChevronRight
} from 'lucide-react';

interface ArticleItem {
  title: string;
  meta: string;
}

const articles: ArticleItem[] = [
  {
    title: "The Legacy of the Benin Empire",
    meta: "History • 5 min read"
  },
  {
    title: "Understanding the Yoruba People",
    meta: "Culture • 7 min read"
  },
  {
    title: "Ancient Trade Routes Across Africa",
    meta: "History • 8 min read"
  }
];

export default function RecentArticles() {
  return (
    <section className="px-5 py-6 bg-[var(--afri-surface)]">
      
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-bold text-[var(--afri-text)] tracking-tight">
          Recent Articles
        </h2>
        <button className="flex items-center gap-0.5 text-xs font-bold text-[var(--afri-gold)] transition-opacity active:opacity-70">
          <span>View all</span>
          <ChevronRight size={14} className="mt-0.5" />
        </button>
      </div>

      {/* Vertical Article Stream */}
      <div className="flex flex-col gap-3">
        {articles.map((article) => (
          <button
            key={article.title}
            className="group w-full text-left flex items-start gap-3.5 p-3.5 bg-[var(--afri-surface)] border border-[var(--afri-border)] rounded-2xl shadow-sm transition-all duration-150 active:scale-[0.99] active:bg-slate-50/60 cursor-pointer focus:outline-none"
          >
            
            {/* Context Icon Container */}
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
              style={{ backgroundColor: '#E2A54012' }}
            >
              <FileText
                size={20}
                style={{ color: '#E2A540' }}
              />
            </div>

            {/* Typography Metadata Stack */}
            <div className="flex flex-col flex-1 min-w-0 pt-0.5">
              <span className="text-xs font-bold text-[var(--afri-text)] leading-snug mb-1 break-words group-hover:text-[var(--afri-gold)] transition-colors duration-150">
                {article.title}
              </span>
              <span className="text-[11px] font-medium text-[var(--afri-text-muted)] tracking-wide">
                {article.meta}
              </span>
            </div>

          </button>
        ))}
      </div>

    </section>
  );
}
