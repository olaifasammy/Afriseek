import { StudioCard, StudioButton } from '../../components/StudioUI';
import { Image, FileText } from 'lucide-react';

export const EntityMediaManagement = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-white">Media Management</h2>
    <StudioCard>
        <div className="h-32 flex flex-col items-center justify-center text-zinc-500 border-2 border-dashed border-zinc-800 rounded-lg">
            <Image size={32} />
            <p className="text-sm mt-2">No media uploaded. Click to upload.</p>
        </div>
    </StudioCard>
  </div>
);
