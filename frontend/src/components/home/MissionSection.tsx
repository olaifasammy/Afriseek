import React from 'react';
import { Shield, Network, BookOpen } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="bg-white border-t border-neutral-100 pt-16 pb-12 px-6 select-none">
      <div className="max-w-xl mx-auto w-full">
        
        {/* Section Identifier Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--afri-gold)]" />
          <span className="text-[10px] font-black tracking-[0.25em] text-[var(--afri-gold)] uppercase">
            Our Foundation
          </span>
        </div>

        {/* Core Narrative Statement */}
        <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight leading-snug mb-8">
          To build an immutable, <span className="text-[var(--afri-gold)]">leading knowledge network</span> that maps, preserves, and honors the vast continuity of African history, ancestry, and cultural truth.
        </h2>

        {/* Strategic Pillars Stack */}
        <div className="flex flex-col gap-6 border-l border-neutral-100 pl-4 ml-1">
          
          {/* Pillar 1: Preservation */}
          <div className="group relative">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 text-[var(--afri-gold)] shrink-0">
                <Shield size={18} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-bold text-neutral-800 tracking-wide uppercase">
                  Sovereign Archiving
                </h3>
                <p className="text-[11px] font-medium text-neutral-500 leading-relaxed mt-1">
                  Safeguarding fragmented historical accounts, oral lineages, and classic kingdoms within an uncompromised digital repository.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Graph Connections */}
          <div className="group relative">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 text-[var(--afri-gold)] shrink-0">
                <Network size={18} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-bold text-neutral-800 tracking-wide uppercase">
                  Relational Geometry
                </h3>
                <p className="text-[11px] font-medium text-neutral-500 leading-relaxed mt-1">
                  Tracing hidden threads across linguistic shifts, regional trade pathways, and ancient migrations using graph dependencies.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Democratic Access */}
          <div className="group relative">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 text-[var(--afri-gold)] shrink-0">
                <BookOpen size={18} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-bold text-neutral-800 tracking-wide uppercase">
                  Democratic Access
                </h3>
                <p className="text-[11px] font-medium text-neutral-500 leading-relaxed mt-1">
                  Placing curated, verified structural data into the hands of continuous builders, students, and global descendants.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
