import { StudioCard, StudioButton } from '../../components/StudioUI';
import { GitMerge } from 'lucide-react';

export const EntityMergeManagement = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-white">Merge Operations</h2>
    <StudioCard>
        <p className="text-sm text-zinc-400 mb-4">Select an entity to merge into this one.</p>
        <StudioButton><GitMerge size={16} /> Select Entity to Merge</StudioButton>
    </StudioCard>
  </div>
);
