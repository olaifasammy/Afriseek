import React, { useState } from "react";

const categories = [
  { 
    name: "Countries", 
    path: <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20 M2 12h20 C22 12 22 12 22 12" /> 
  },
  { 
    name: "Languages", 
    path: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/> 
  },
  { 
    name: "Kingdoms", 
    path: <path d="m12 3-10 9h3v8h14v-8h3L12 3z"/> 
  },
  { 
    name: "Ethnic Groups", 
    path: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75"/> 
  }
];

export default function CategoryFilters() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-4 px-6 select-none">
      <div className="max-w-xl mx-auto w-full">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-xs font-black tracking-wider uppercase text-neutral-800 cursor-pointer focus:outline-none"
        >
          <span>Taxonomy Directory</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        {open && (
          <div className="grid grid-cols-2 gap-3 mt-4 animate-fadeIn">
            {categories.map((item) => (
              <div
                key={item.name}
                className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 flex flex-col items-center text-center hover:border-[var(--afri-gold)] transition-colors cursor-pointer group"
              >
                <div className="text-[var(--afri-gold)] mb-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    {item.path}
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-neutral-700 tracking-wide">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
