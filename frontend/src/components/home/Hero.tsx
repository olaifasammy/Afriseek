import React, { useState, FormEvent } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const searches: string[] = [
    "Yoruba",
    "Benin Empire",
    "Timbuktu",
    "Nile River"
  ];

  const handleSearchAction = (searchQuery: string): void => {
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <section
      className="relative overflow-hidden px-5 py-12 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(4, 17, 31, 0.85), rgba(4, 17, 31, 0.85)), url('/images/Afh.jpg')"
      }}
    >
      <div className="max-w-2xl mx-auto md:max-w-6xl w-full">
        
        {/* Content Block */}
        <div className="max-w-xl">
          <div className="text-[10px] md:text-xs font-bold tracking-[2px] text-[var(--afri-gold)] mb-2 uppercase">
            Africa's Living Knowledge Graph
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
            Explore <span className="text-[var(--afri-gold)]">Africa's</span>
            <br />
            Knowledge Network
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed font-medium">
            Discover interconnected knowledge about African history, kingdoms, cultures, languages, people, places, traditions and civilizations.
          </p>
        </div>

        {/* Omnibox Search Interface */}
        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            handleSearchAction(query);
          }}
          className="mt-6 flex bg-white/95 rounded-2xl overflow-hidden shadow-lg border border-white/10 w-full focus-within:ring-2 focus-within:ring-[var(--afri-gold)]/40 transition-all duration-200"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search people, kingdoms, languages, cultures..."
            className="flex-1 bg-transparent px-4 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 font-medium"
          />

          <button
            type="submit"
            className="w-14 bg-[var(--afri-gold)] flex items-center justify-center transition-transform active:scale-95 cursor-pointer focus:outline-none"
          >
            <Search
              size={18}
              className="text-[#04111f]"
            />
          </button>
        </form>

        {/* Popular Tags Discovery Row */}
        <div className="mt-5">
          <div className="text-xs text-white/60 font-medium mb-2">
            Popular searches
          </div>

          <div className="flex flex-wrap gap-2">
            {searches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleSearchAction(item)}
                className="px-3.5 py-1.5 text-xs font-semibold border border-white/15 bg-white/5 text-white rounded-full backdrop-blur-md transition-all duration-150 active:scale-[0.96] active:bg-white/15 cursor-pointer focus:outline-none"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
