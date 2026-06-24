import { StudioCard, StudioButton } from '../../components/StudioUI';
import { GitBranch } from 'lucide-react';

export const EntitySplitManagement = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-white">Split Operations</h2>
    <StudioCard>
        <p className="text-sm text-zinc-400 mb-4">Define split rules to separate facts into new entities.</p>
        <StudioButton><GitBranch size={16} /> Configure Split</StudioButton>
    </StudioCard>
  </div>
);
