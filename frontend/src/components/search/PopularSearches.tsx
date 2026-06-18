import React from 'react';

const searches = ["Yoruba", "Hausa", "Swahili", "Timbuktu", "Nile River", "Songhai Empire"];

export default function PopularSearches() {
  return (
    <section className="bg-white py-4 px-6 select-none">
      <div className="max-w-xl mx-auto w-full">
        <h2 className="text-[10px] font-black tracking-[0.2em] uppercase text-neutral-400 mb-3">
          Frequent Inquiries
        </h2>
        <div className="flex flex-wrap gap-2">
          {searches.map((item) => (
            <button
              key={item}
              type="button"
              className="border border-neutral-200/70 bg-white text-[11px] font-bold text-neutral-600 px-3.5 py-1.5 rounded-full cursor-pointer hover:border-[var(--afri-gold)] hover:text-[var(--afri-gold)] active:scale-95 transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
