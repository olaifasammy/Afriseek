import React, { useState } from "react";

export default function SearchFilters() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white pb-6 px-6 select-none">
      <div className="max-w-xl mx-auto w-full">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-neutral-50 border border-neutral-200/60 rounded-xl py-2.5 px-4 cursor-pointer focus:outline-none transition-all active:scale-98"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[var(--afri-gold)]">
            <line x1="4" x2="20" y1="21" y2="21"/>
            <line x1="4" x2="20" y1="14" y2="14"/>
            <line x1="4" x2="20" y1="7" y2="7"/>
            <circle cx="9" cy="7" r="2"/>
            <circle cx="15" cy="14" r="2"/>
            <circle cx="9" cy="21" r="2"/>
          </svg>
          <span className="text-[11px] font-black tracking-wider uppercase text-neutral-700">
            Advanced Architecture Filters
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        {open && (
          <div className="mt-4 bg-neutral-50/50 border border-neutral-100 rounded-2xl p-4 flex flex-col gap-4 animate-fadeIn">
            
            {/* Country Selector */}
            <label className="block">
              <div className="flex items-center gap-1.5 text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-[var(--afri-gold)]">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
                Regional Demographics
              </div>
              <select className="w-full bg-white text-xs font-bold text-neutral-700 p-3 rounded-xl border border-neutral-200/70 outline-none focus:border-[var(--afri-gold)] appearance-none">
                <option>All Contemporary Regions</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
                <option>Ethiopia</option>
              </select>
            </label>

            {/* Historical Period */}
            <label className="block">
              <div className="flex items-center gap-1.5 text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-[var(--afri-gold)]">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Chronological Era
              </div>
              <select className="w-full bg-white text-xs font-bold text-neutral-700 p-3 rounded-xl border border-neutral-200/70 outline-none focus:border-[var(--afri-gold)] appearance-none">
                <option>All Eras</option>
                <option>Ancient Civilizations</option>
                <option>Medieval Dynasties</option>
                <option>Colonial Frameworks</option>
                <option>Post-Colonial / Modernity</option>
              </select>
            </label>

            {/* Entity Type */}
            <label className="block">
              <div className="flex items-center gap-1.5 text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-[var(--afri-gold)]">
                  <path d="m21 16-4 4-4-4"/>
                  <path d="M17 20V4"/>
                  <path d="m3 8 4-4 4 4"/>
                  <path d="M7 4v16"/>
                </svg>
                Graph Topology
              </div>
              <select className="w-full bg-white text-xs font-bold text-neutral-700 p-3 rounded-xl border border-neutral-200/70 outline-none focus:border-[var(--afri-gold)] appearance-none">
                <option>All Network Nodes</option>
                <option>Lineages & Peoples</option>
                <option>Sovereign Kingdoms</option>
                <option>Linguistic Structures</option>
                <option>Ancestral Faith Systems</option>
              </select>
            </label>

          </div>
        )}
      </div>
    </section>
  );
}
