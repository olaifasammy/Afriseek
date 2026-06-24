import { useState } from 'react';
import { StudioCard, StudioButton } from '../../components/StudioUI';
import { SidebarCard } from '../../components/UIComponents';
import { ExternalLink, RefreshCw, Trash2 } from 'lucide-react';
import { ResponsivePageTemplate } from '../../../shared/templates/ResponsivePageTemplate';
import { EntityFactManagement } from './EntityFactManagement';
import { EntityTraitManagement } from './EntityTraitManagement';
import { EntityHistoryManagement } from './EntityHistoryManagement';
import { EntityAuditManagement } from './EntityAuditManagement';
import { EntityQualityManagement } from './EntityQualityManagement';
import { EntityMediaManagement } from './EntityMediaManagement';
import { EntitySourceManagement } from './EntitySourceManagement';
import { EntityMergeManagement } from './EntityMergeManagement';
import { EntitySplitManagement } from './EntitySplitManagement';
import { EntityArticleLinkManagement } from './EntityArticleLinkManagement';

const tabs = ['General', 'Properties', 'Relationships', 'Constraints', 'Validation Rules', 'Metadata', 'Versions', 'Audit'];

export const EntityDetail = () => {
  const [activeTab, setActiveTab] = useState('General');

  const renderContent = () => {
      switch (activeTab) {
          case 'Facts': return <EntityFactManagement />;
          case 'Traits': return <EntityTraitManagement />;
          case 'Versions': return <EntityHistoryManagement />;
          case 'Quality': return <EntityQualityManagement />;
          case 'Audit': return <EntityAuditManagement />;
          case 'Media': return <EntityMediaManagement />;
          case 'Sources': return <EntitySourceManagement />;
          case 'Merge': return <EntityMergeManagement />;
          case 'Split': return <EntitySplitManagement />;
          case 'Articles': return <EntityArticleLinkManagement />;
          default: return <StudioCard className="min-h-[400px]">{activeTab} management content...</StudioCard>;
      }
  };

  return (
    <ResponsivePageTemplate 
      title="Edit Entity: Person" 
      description="Update the entity type details, properties, rules and relationships."
      actions={
        <>
            <StudioButton variant="secondary">More Actions</StudioButton>
            <StudioButton variant="secondary" className="gap-2">View in Explorer <ExternalLink size={16}/></StudioButton>
            <StudioButton>Save Changes</StudioButton>
        </>
      }
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
            <div className="flex gap-4 border-b border-zinc-800 overflow-x-auto pb-2">
                {tabs.map(tab => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 text-sm font-medium whitespace-nowrap ${tab === activeTab ? 'text-amber-500 border-b-2 border-amber-500' : 'text-zinc-400 hover:text-white'}`}>
                        {tab}
                    </button>
                ))}
            </div>
            {renderContent()}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-96 space-y-6">
          <SidebarCard title="Entity Information">
             <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-zinc-500">Entity ID</span>
                    <span className="text-white">ET-PERSON-001</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-zinc-500">Last Updated</span>
                    <span className="text-white">May 20, 2025</span>
                </div>
             </div>
          </SidebarCard>
          
          <SidebarCard title="Entity Usage">
             <div className="grid grid-cols-2 gap-4 text-center">
                 <div className="bg-zinc-800 p-2 rounded"><div className="text-lg font-bold">1.2M</div><div className="text-[10px] text-zinc-400 uppercase">Instances</div></div>
                 <div className="bg-zinc-800 p-2 rounded"><div className="text-lg font-bold">5.3M</div><div className="text-[10px] text-zinc-400 uppercase">Relationships</div></div>
             </div>
          </SidebarCard>

          <SidebarCard title="Quick Actions">
             <div className="space-y-2">
                 <StudioButton variant="secondary" className="w-full"><RefreshCw size={16} /> Duplicate Entity</StudioButton>
                 <StudioButton variant="secondary" className="w-full text-red-500"><Trash2 size={16} /> Deactivate Entity</StudioButton>
             </div>
          </SidebarCard>
        </div>
      </div>
    </ResponsivePageTemplate>
  );
};

export default EntityDetail;
