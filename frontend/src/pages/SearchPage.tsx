import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
// Slotted with your own Header

import Footer from '../components/layout/Footer'; // Slotted with your bug-free Footer

interface GraphNode {
  id: string;
  title: string;
  type: string;
  connectionsCount: number;
  description: string;
  connectedNodes: string[];
}


export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Sync state with URL Search Parameters
  useEffect(() => {
    setInputValue(params.get('q') || '');
  }, [params]);

  // Premium mock dataset mirroring the Living Knowledge Graph design mockup
  const graphResults: GraphNode[] = [
    {
      id: "kongo",
      title: "Kingdom of Kongo",
      type: "Kingdom",
      connectionsCount: 12,
      description: "Powerful Central African state (c. 1390–1914) covering present-day Angola, DRC, and Republic of the Congo.",
      connectedNodes: ["King Afonso I", "M'banza-Kongo (Capital)", "Portuguese Contact"]
    },
    {
      id: "afonso",
      title: "King Afonso I",
      type: "Ruler",
      connectionsCount: 8,
      description: "Sixth ruler of the Kingdom of Kongo (r. 1509–1542), known for his complex diplomatic relationships with Europe.",
      connectedNodes: ["Kingdom of Kongo", "Christianity", "Lisbon Correspondence"]
    },
    {
      id: "portuguese-1482",
      title: "Arrival of Portuguese Explorers (1482)",
      type: "Historical Event",
      connectionsCount: 5,
      description: "Navigator Diogo Cão establishes contact with the coastal rim of the empire, launching significant global shifts.",
      connectedNodes: ["Kingdom of Kongo", "Diogo Cão", "Transatlantic Trade Routes"]
    }
  ];

  const filters = ["All", "Kingdoms", "Linguistic Maps", "People", "Timelines"];

  const handleSearchTrigger = (queryStr: string) => {
    if (!queryStr.trim()) return;
    setParams({ q: queryStr.trim() });
  };

  // Filter local results based on selected pill taxonomy or search input
  const displayResults = graphResults.filter(node => {
    const matchesFilter = selectedFilter === 'All' || 
      (selectedFilter === 'Kingdoms' && node.type === 'Kingdom') ||
      (selectedFilter === 'People' && node.type === 'Ruler') ||
      (selectedFilter === 'Timelines' && node.type === 'Historical Event');
    return matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-neutral-800 antialiased selection:bg-amber-100">
      
      {/* 1. Global Platform Header Component */}
      <Header />

      {/* 2. Primary Search Core Environment */}
      <main className="flex-1 w-full max-w-xl mx-auto px-6 pt-6 pb-12 select-none">
        
        {/* Persistent Search Bar Input Deck */}
        <div className="flex bg-neutral-50 border border-neutral-200/70 rounded-2xl overflow-hidden focus-within:border-[var(--afri-gold)] focus-within:bg-white transition-all duration-150 mb-4 shadow-sm shadow-neutral-100/50">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearchTrigger(inputValue)}
            placeholder="Search ancestral records, nodes..."
            className="flex-1 bg-transparent border-none outline-none py-3.5 px-4 text-xs font-semibold text-neutral-800 placeholder-neutral-400"
          />
          <button
            type="button"
            onClick={() => handleSearchTrigger(inputValue)}
            className="bg-[var(--afri-gold)] text-white px-5 flex items-center justify-center cursor-pointer hover:opacity-95 active:scale-95 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
        </div>

        {/* Horizontal Scrolling Filter Pills Stream */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none -mx-2 px-2 mask-image">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-black tracking-wide border transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--afri-gold)] text-white border-[var(--afri-gold)] shadow-sm shadow-amber-600/10 scale-102'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Dynamic Topology Feedback Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-black text-neutral-900 tracking-tight">
            Results for '{params.get('q') || 'Kingdom of Kongo'}'
          </h2>
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-0.5">
            {displayResults.length} Connected Graph Entities Found
          </p>
        </div>

        {/* The Connection Card Array Container */}
        <div className="flex flex-col gap-4">
          {displayResults.map((node) => (
            <div
              key={node.id}
              className="bg-white border border-neutral-200/70 rounded-2xl p-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-sm"
            >
              {/* Card Meta Row Header */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xs font-black text-[var(--afri-gold)] tracking-tight hover:underline cursor-pointer">
                    {node.title}
                  </h3>
                  <span className="bg-neutral-100 text-[9px] font-black text-neutral-500 uppercase tracking-wider px-2 py-0.5 rounded-md">
                    {node.type}
                  </span>
                </div>
                <span className="bg-neutral-50 border border-neutral-100 text-[9px] font-bold text-neutral-400 px-2 py-0.5 rounded-md shrink-0">
                  {node.connectionsCount} Connections
                </span>
              </div>

              {/* Node Explanatory Snippet */}
              <p className="text-[11px] font-medium leading-relaxed text-neutral-600 mb-4">
                {node.description}
              </p>

              {/* Network Graph Connected References Wrapper */}
              <div className="border-t border-neutral-100 pt-3">
                <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest block mb-1.5">
                  Connected Nodes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {node.connectedNodes.map((connectedName) => (
                    <span
                      key={connectedName}
                      className="bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-600 px-2.5 py-1 rounded-lg hover:border-[var(--afri-gold)] hover:text-[var(--afri-gold)] transition-colors cursor-pointer"
                    >
                      {connectedName}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

          {/* Fallback Empty Traversal State */}
          {displayResults.length === 0 && (
            <div className="text-center py-12 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                No Intersecting Nodes match current filter.
              </p>
            </div>
          )}
        </div>

        {/* Load More Pagination Node */}
        {displayResults.length > 0 && (
          <button
            type="button"
            className="w-full mt-6 bg-neutral-50 border border-neutral-200/60 hover:border-neutral-300 rounded-xl py-3 text-[10px] font-black uppercase tracking-widest text-neutral-500 transition-all cursor-pointer text-center focus:outline-none"
          >
            Traverse Deeper
          </button>
        )}

      </main>

      {/* 3. Global Platform Footer Component */}
      <Footer />
      
    </div>
  );
}
