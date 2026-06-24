import { StudioCard } from '../../components/StudioUI';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export const EntityQualityManagement = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Quality & Integrity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StudioCard title="Completeness Score">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-emerald-500">96%</div>
            <div className="text-sm text-zinc-400">All required fields populated.</div>
          </div>
        </StudioCard>
        <StudioCard title="Integrity Issues">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
                <CheckCircle size={16} className="text-emerald-500" /> No broken links
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
                <AlertTriangle size={16} className="text-amber-500" /> 2 duplicate nodes detected
            </div>
          </div>
        </StudioCard>
      </div>
    </div>
  );
};
