import { StudioCard } from '../../components/StudioUI';
import { ShieldAlert } from 'lucide-react';

export const EntityAuditManagement = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Entity Audit Trail</h2>
      
      <StudioCard>
        <div className="space-y-4">
            <div className="flex gap-4 items-start p-3 border border-zinc-800 rounded bg-zinc-800/50">
                <div className="p-2 bg-zinc-700 rounded text-red-500"><ShieldAlert size={16} /></div>
                <div className="text-sm">
                    <p className="text-white">Permission Check Failed</p>
                    <p className="text-zinc-400 text-xs mt-1">10 mins ago • User: Researcher_1</p>
                </div>
            </div>
            <div className="flex gap-4 items-start p-3 border border-zinc-800 rounded bg-zinc-800/50">
                <div className="p-2 bg-zinc-700 rounded text-zinc-400"><ShieldAlert size={16} /></div>
                <div className="text-sm">
                    <p className="text-white">Entity Verified</p>
                    <p className="text-zinc-400 text-xs mt-1">1 hour ago • User: Senior_Admin</p>
                </div>
            </div>
        </div>
      </StudioCard>
    </div>
  );
};
