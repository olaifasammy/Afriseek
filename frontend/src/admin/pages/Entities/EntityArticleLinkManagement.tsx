import { StudioCard, StudioButton } from '../../components/StudioUI';
import { BookOpen } from 'lucide-react';

export const EntityArticleLinkManagement = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-white">Article Linking</h2>
    <StudioCard>
        <p className="text-sm text-zinc-400 mb-4">Link this entity to relevant articles.</p>
        <StudioButton><BookOpen size={16} /> Link Article</StudioButton>
    </StudioCard>
  </div>
);
