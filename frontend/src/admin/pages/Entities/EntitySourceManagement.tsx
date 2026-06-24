import { StudioCard, StudioButton } from '../../components/StudioUI';
import { Link } from 'lucide-react';

export const EntitySourceManagement = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-white">Source Management</h2>
    <StudioCard>
        <div className="space-y-2 text-sm text-zinc-300">
            <p>Source 1: Official Biography (2020)</p>
            <p>Source 2: South African National Archives</p>
        </div>
    </StudioCard>
  </div>
);
