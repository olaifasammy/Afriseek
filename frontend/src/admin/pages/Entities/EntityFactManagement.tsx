import { StudioCard, StudioButton, StudioInput } from '../../components/StudioUI';
import { Plus, Trash2, Edit } from 'lucide-react';

export const EntityFactManagement = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">Entity Facts</h2>
        <StudioButton size="sm"><Plus size={16} /> Add Fact</StudioButton>
      </div>
      
      <StudioCard>
        <div className="space-y-4">
            <div className="flex justify-between items-center p-3 border border-zinc-800 rounded bg-zinc-800/50">
                <div className="text-sm">
                    <span className="font-bold text-amber-500">Born:</span> 18 Jul 1918
                </div>
                <div className="flex gap-2">
                    <button className="text-zinc-500 hover:text-white"><Edit size={16} /></button>
                    <button className="text-zinc-500 hover:text-red-500"><Trash2 size={16} /></button>
                </div>
            </div>
            <div className="flex justify-between items-center p-3 border border-zinc-800 rounded bg-zinc-800/50">
                <div className="text-sm">
                    <span className="font-bold text-amber-500">Nationality:</span> South African
                </div>
                <div className="flex gap-2">
                    <button className="text-zinc-500 hover:text-white"><Edit size={16} /></button>
                    <button className="text-zinc-500 hover:text-red-500"><Trash2 size={16} /></button>
                </div>
            </div>
        </div>
      </StudioCard>
    </div>
  );
};
