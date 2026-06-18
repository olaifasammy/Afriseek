import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const suggestions = [
  "Yoruba People",
  "Yorubaland",
  "Yoruba Religion",
  "Benin Empire",
  "Kingdom of Aksum",
  "Swahili Coast",
  "Fulani People",
  "Timbuktu",
  "Nile River",
  "Great Zimbabwe"
];

export default function SearchHero() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(params.get("q") || "");
  }, [params]);

  const filtered = query.length > 1
    ? suggestions.filter(item => item.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSearch = (value: string) => {
    if (!value.trim()) return;
    navigate(`/search?q=${encodeURIComponent(value.trim())}`);
  };

  return (
    <section className="bg-white pt-12 pb-6 px-6 select-none">
      <div className="max-w-xl mx-auto w-full">
        <h1 className="text-2xl font-black text-neutral-900 tracking-tight leading-none mb-2">
          Africa's Living Knowledge Graph
        </h1>
        <p className="text-xs font-medium text-neutral-500 tracking-wide mb-6">
          Explore interconnected people, cultures, kingdoms, languages, and structural lineages.
        </p>

        <div className="relative w-full">
          <div className="flex bg-neutral-50 border border-neutral-200/70 rounded-2xl overflow-hidden focus-within:border-[var(--afri-gold)] transition-colors duration-150">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
              placeholder="Search ancestral paths, dynasties..."
              className="flex-1 bg-transparent border-none outline-none py-3.5 px-4 text-xs font-semibold text-neutral-800 placeholder-neutral-400"
            />
            <button
              type="button"
              onClick={() => handleSearch(query)}
              className="bg-[var(--afri-gold)] text-white px-5 flex items-center justify-center cursor-pointer hover:opacity-90 active:scale-95 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
          </div>

          {/* Auto-suggestions Box */}
          {filtered.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-neutral-100 shadow-xl shadow-neutral-200/30 rounded-2xl overflow-hidden z-50">
              {filtered.slice(0, 5).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleSearch(item)}
                  className="w-full text-left py-3 px-4 text-xs font-bold text-neutral-700 hover:bg-neutral-50 hover:text-[var(--afri-gold)] border-b border-neutral-50 last:border-none transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
