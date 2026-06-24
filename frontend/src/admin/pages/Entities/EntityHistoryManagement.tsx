import { StudioCard } from '../../components/StudioUI';
import { History } from 'lucide-react';

export const EntityHistoryManagement = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Entity History</h2>
      
      <StudioCard>
        <div className="space-y-4">
            <div className="flex gap-4 items-start p-3 border border-zinc-800 rounded bg-zinc-800/50">
                <div className="p-2 bg-zinc-700 rounded text-amber-500"><History size={16} /></div>
                <div className="text-sm">
                    <p className="text-white"><span className="font-bold">v2.1</span> published by Admin</p>
                    <p className="text-zinc-400 text-xs mt-1">2 hours ago • Updated description</p>
                </div>
            </div>
            <div className="flex gap-4 items-start p-3 border border-zinc-800 rounded bg-zinc-800/50">
                <div className="p-2 bg-zinc-700 rounded text-zinc-400"><History size={16} /></div>
                <div className="text-sm">
                    <p className="text-white"><span className="font-bold">v2.0</span> published by Editor</p>
                    <p className="text-zinc-400 text-xs mt-1">1 day ago • Changed birth date</p>
                </div>
            </div>
        </div>
      </StudioCard>
    </div>
  );
};
