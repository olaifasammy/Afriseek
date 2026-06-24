import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { StudioButton, StudioCard, StudioInput } from '../../components/StudioUI';

const tabs = [
  'All Sources', 'Books', 'Journals', 'Websites', 
  'Archives', 'Citations', 'Verification'
];

export const SourcesManagement = () => {
  const [activeTab, setActiveTab] = useState('All Sources');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Sources Management</h1>
          <p className="text-zinc-400 text-sm mt-1">Manage and verify platform knowledge sources.</p>
        </div>
        <StudioButton>
          <Plus size={16} /> Add Source
        </StudioButton>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-zinc-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-b-2 text-sm font-medium transition-colors ${
              activeTab === tab 
                ? 'border-amber-500 text-amber-500' 
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Toolbar */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex-1 max-w-sm">
          <StudioInput icon={Search} placeholder="Search sources..." />
        </div>
      </div>

      {/* Tab Content */}
      <StudioCard title={activeTab}>
        <div className="text-zinc-600 text-sm">
          Viewing content for: {activeTab}. [Data table implementation pending...]
        </div>
      </StudioCard>
    </div>
  );
};

export default SourcesManagement;
