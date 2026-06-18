import React from 'react';
import { Lightbulb } from 'lucide-react';

export const OntologySpotlight: React.FC = () => {
  return (
    <section className="px-5 py-6 bg-slate-50 border-y border-slate-100">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-5 h-5 text-amber-500" />
        <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">
          Ontology Spotlight
        </span>
      </div>
      
      {/* Card Wrapper */}
      <div className="overflow-hidden bg-white border border-slate-100 rounded-xl shadow-sm">
        
        {/* Visual Banner Container */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-200">
          <img 
            src="https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=600&q=80" 
            alt="Mount Kilimanjaro landscape" 
            className="object-cover w-full h-full"
            loading="lazy"
          />
          {/* Subtle gradient overlay to soften the bottom image boundary */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4">
            <span className="text-[10px] font-bold tracking-wide uppercase bg-amber-500 text-white px-2 py-0.5 rounded-md">
              Geography Node
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 border-l-4 border-amber-500">
          <h4 className="text-sm font-bold text-slate-900 mb-1">
            Linguistic Shift: Kilimanjaro
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            While popularized globally as a single title, in the local **KiChagga** language framework, the mountain{"'"}s crown is understood via two distinct entities:{" "}
            <span className="font-semibold text-slate-800">Kibo (Kipoo)</span> meaning {"\""}Spotted{"\""} and{" "}
            <span className="font-semibold text-slate-800">Mawenzi</span> meaning {"\""}Cracked{"\""}. Your graph explores these interconnected structures.
          </p>
          
          {/* Metatags */}
          <div className="mt-3 flex gap-2">
            <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
              Geography
            </span>
            <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
              Linguistics
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};


