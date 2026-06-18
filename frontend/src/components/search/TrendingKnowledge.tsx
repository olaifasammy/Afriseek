import React, { useState } from "react";

const items = [
  { title: "Kingdom of Aksum", desc: "Ancient Ethiopian civilization", iconPath: <path d="m12 3-10 9h3v8h14v-8h3L12 3z"/> },
  { title: "Great Zimbabwe", desc: "Stone city architectural node", iconPath: <path d="M12 2L2 22h20L12 2z M12 18h.01"/> },
  { title: "Benin Empire", desc: "Renowned structural bronze systems", iconPath: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/> }
];

export default function TrendingKnowledge() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-4 px-6 select-none">
      <div className="max-w-xl mx-auto w-full">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-xs font-black tracking-wider uppercase text-neutral-800 cursor-pointer focus:outline-none"
        >
          <span>Trending Nodes</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        {open && (
          <div className="flex flex-col gap-3 mt-4 animate-fadeIn">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-neutral-50 border border-neutral-100 rounded-2xl p-3.5 flex items-center gap-4 hover:border-neutral-200/80 transition-colors cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 text-[var(--afri-gold)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    {item.iconPath}
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-neutral-800 tracking-tight">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-medium text-neutral-400 mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
