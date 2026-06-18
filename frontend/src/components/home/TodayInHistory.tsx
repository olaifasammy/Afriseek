import React from 'react';
import { Calendar, Network, Landmark, ShieldAlert } from 'lucide-react';

interface HistoricalEvent {
  year: string;
  title: string;
  desc: string;
  tag: string;
  icon: React.ReactNode;
}

export const TodayInHistory: React.FC = () => {
  const currentFormattedDate = "June 17";

  const events: HistoricalEvent[] = [
    {
      year: "1976",
      title: "Soweto Resistance Escalation",
      desc: "Following the structural shifts of the June 16 student marches, massive community-wide actions mobilized across regional townships on June 17, challenging systemic apartheid educational decrees.",
      tag: "Political History",
      icon: <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
    },
    {
      year: "1960",
      title: "Mali Federation Sovereignty Framework",
      desc: "Critical legal and administrative handovers advanced the final constitutional steps toward structural transition and independent federation governance.",
      tag: "State Sovereignty",
      icon: <Landmark className="w-3.5 h-3.5 text-emerald-600" />
    }
  ];

  return (
    <section className="px-5 py-6 bg-white">
      {/* Header Container */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-slate-900" />
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            Today in History
          </h3>
        </div>
        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100 shadow-sm">
          {currentFormattedDate}
        </span>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l border-slate-100 pl-5 ml-3.5 space-y-6">
        {events.map((event, index) => (
          <div key={index} className="relative group">
            
            {/* Custom Icon Node Anchor */}
            <div className="absolute -left-[35px] top-0.5 flex items-center justify-center w-7 h-7 rounded-full bg-slate-50 border border-slate-200 shadow-sm group-hover:border-amber-400 transition-colors duration-200">
              {event.icon}
            </div>

            {/* Event Block */}
            <div className="bg-slate-50/60 rounded-xl p-4 border border-slate-100/80 hover:border-slate-200/80 transition-all duration-200">
              <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-black text-slate-900 tracking-wide">
                    {event.year}
                  </span>
                  <h4 className="text-sm font-bold text-slate-800 leading-tight">
                    {event.title}
                  </h4>
                </div>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded-md">
                  {event.tag}
                </span>
              </div>
              
              <p className="text-xs text-slate-600 leading-relaxed">
                {event.desc}
              </p>

              {/* Graphical Network Traversal Hook */}
              <button className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-amber-600 hover:text-amber-700 transition-colors">
                <Network className="w-3 h-3" />
                <span>Explore Event Network</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};


