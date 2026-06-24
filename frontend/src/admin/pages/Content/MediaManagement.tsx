import { useState } from 'react';
import { StudioCard } from '../../components/StudioUI';

const tabs = [
  'Library', 'Images', 'Videos', 'Documents', 
  'Upload', 'Storage Usage', 'Duplicates', 'Metadata', 'Settings'
];

export const MediaManagement = () => {
  const [activeTab, setActiveTab] = useState('Library');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Media Management</h1>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-800 pb-2">
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

      <StudioCard title={activeTab}>
        <div className="text-zinc-600 text-sm">
          Viewing content for: {activeTab}. [Data table implementation pending...]
        </div>
      </StudioCard>
    </div>
  );
};

export default MediaManagement;
