import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StudioCard, StudioButton } from '../../components/StudioUI';
import { SidebarCard } from '../../components/UIComponents';
import { ResponsivePageTemplate } from '../../../shared/templates/ResponsivePageTemplate';
import { ExternalLink, Save } from 'lucide-react';

const tabs = ['General', 'Properties', 'Relationships', 'Constraints', 'Validation Rules', 'Metadata', 'Versions', 'Audit'];

export const EditEntityType = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('General');

  return (
    <ResponsivePageTemplate
        title={`Edit Entity: Person`}
        description="Update the entity type details, properties, rules and relationships."
        actions={
            <>
                <StudioButton variant="secondary">More Actions</StudioButton>
                <StudioButton variant="secondary" className="gap-2">View in Explorer <ExternalLink size={16}/></StudioButton>
                <StudioButton className="gap-2"><Save size={16}/> Save Changes</StudioButton>
            </>
        }
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
            <div className="flex gap-4 border-b border-zinc-800 overflow-x-auto pb-2">
                {tabs.map(tab => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 text-sm font-medium whitespace-nowrap ${activeTab === tab ? 'text-amber-500 border-b-2 border-amber-500' : 'text-zinc-400 hover:text-white'}`}>
                        {tab}
                    </button>
                ))}
            </div>
            
            <StudioCard title={activeTab}>
                <div className="text-zinc-300 min-h-[300px]">Content for {activeTab}...</div>
            </StudioCard>
        </div>

        <div className="w-full lg:w-96 space-y-6">
            <SidebarCard title="Entity Type Info">
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-zinc-500">Type ID</span>
                        <span className="text-white">ET-PERSON-001</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-zinc-500">Last Updated</span>
                        <span className="text-white">May 20, 2025</span>
                    </div>
                </div>
            </SidebarCard>
            <SidebarCard title="Schema Preview">
                <pre className="text-emerald-500 text-xs font-mono overflow-x-auto bg-zinc-950 p-3 rounded">
                    {`{ "type": "Person", ... }`}
                </pre>
            </SidebarCard>
        </div>
      </div>
    </ResponsivePageTemplate>
  );
};

export default EditEntityType;
