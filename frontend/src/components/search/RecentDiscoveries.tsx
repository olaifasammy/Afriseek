import React from 'react';

const items = [
  "New Article: Timbuktu Libraries",
  "New Entity: Queen Amina",
  "New Knowledge Path: West African Kingdoms"
];

export default function RecentDiscoveries() {
  return (
    <section className="bg-white pt-4 pb-16 px-6 select-none">
      <div className="max-w-xl mx-auto w-full">
        <h2 className="text-[10px] font-black tracking-[0.2em] uppercase text-neutral-400 mb-3">
          Graph Live Stream
        </h2>
        <div className="flex flex-col gap-2.5">
          {items.map((item) => (
            <div
              key={item}
              className="bg-neutral-50 border border-neutral-100 rounded-xl py-3 px-4 text-xs font-semibold text-neutral-600 tracking-tight flex items-center gap-2.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
