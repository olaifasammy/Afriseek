import { Plus, FileText, Upload, Database } from 'lucide-react';

export const RightRail = () => {
  return (
    <div className="space-y-6">
      {/* System Health Panel */}
      <div className="bg-[#121824] border border-slate-800/70 p-6 rounded-lg flex flex-col items-center">
        <h3 className="text-slate-100 font-semibold mb-4 w-full">System Health</h3>
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" />
            <path className="text-emerald-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" strokeDasharray="98, 100" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-slate-100">98%</div>
        </div>
      </div>

      {/* Recent Activity Panel */}
      <div className="bg-[#121824] border border-slate-800/70 p-6 rounded-lg">
        <h3 className="text-slate-100 font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[{text: 'Samuel verified "Lagos"', time: '2m ago'}, {text: 'Amina updated "Igbo Culture"', time: '15m ago'}].map((act, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500" />
              <div className="flex-1">
                <p className="text-sm text-slate-300 font-medium">{act.text}</p>
                <p className="text-xs text-slate-500">{act.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="bg-[#121824] border border-slate-800/70 p-6 rounded-lg">
        <h3 className="text-slate-100 font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Plus, label: 'Create Entity' },
            { icon: FileText, label: 'Add Article' },
            { icon: Upload, label: 'Upload Media' },
            { icon: Database, label: 'Import Data' },
          ].map((action, i) => (
            <button key={i} className="flex flex-col items-center justify-center gap-2 p-4 bg-[#0B0F17] rounded-lg border border-slate-800/70 text-slate-400 hover:text-white">
              <action.icon size={20} />
              <span className="text-xs">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
