import { useState } from 'react';
import { StudioCard, StudioButton, StudioInput } from '../../components/StudioUI';
import { Search, Plus, Filter, ChevronLeft } from 'lucide-react';
import EntityDetail from './EntityDetail';

const MOCK_ENTITIES = [
  { id: 1, name: 'Nelson Mandela', type: 'Person', status: 'Verified', quality: '96%' },
  { id: 2, name: 'South Africa', type: 'Place', status: 'Verified', quality: '97%' },
];

const MetricCard = ({ title, value, subtext }: any) => (
  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900 flex-1">
    <h3 className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">{title}</h3>
    <p className="text-2xl font-bold text-white mt-1">{value}</p>
    {subtext && <p className="text-emerald-500 text-[10px] font-medium mt-1">{subtext}</p>}
  </div>
);

export const EntityManagement = () => {
  const [selectedEntity, setSelectedEntity] = useState<any>(null);

  if (selectedEntity) {
    return (
        <div className="space-y-4">
            <button onClick={() => setSelectedEntity(null)} className="text-zinc-400 hover:text-white flex items-center gap-1 text-sm">
                <ChevronLeft size={16}/> Back to Dashboard
            </button>
            <EntityDetail />
        </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Entity Dashboard</h1>
          <p className="text-zinc-400 text-sm mt-1">Manage, verify and maintain entities in the Afriseek knowledge base.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
            <StudioButton variant="secondary" className="flex-1 md:flex-none">Export</StudioButton>
            <StudioButton className="flex-1 md:flex-none"><Plus size={16} /> New Entity</StudioButton>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard title="Total" value="2.45M" subtext="+12,540 this week" />
        <MetricCard title="Verified" value="1.98M" subtext="80.8% of total" />
        <MetricCard title="Pending" value="24,521" />
        <MetricCard title="Updated" value="18,320" subtext="+2,340 this week" />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-zinc-800 rounded-lg bg-zinc-900">
        <div className="w-full sm:flex-1">
            <StudioInput icon={Search} placeholder="Search..." />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
            <StudioButton variant="secondary" className="flex-1 sm:flex-none"><Filter size={16} /> Type</StudioButton>
            <StudioButton variant="secondary" className="flex-1 sm:flex-none"><Filter size={16} /> Status</StudioButton>
        </div>
      </div>

      <StudioCard>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-300 min-w-[500px]">
                <thead>
                    <tr className="text-zinc-500 uppercase text-[10px] tracking-widest border-b border-zinc-800">
                        <th className="pb-3 font-bold">Entity</th>
                        <th className="pb-3 font-bold">Type</th>
                        <th className="pb-3 font-bold">Status</th>
                        <th className="pb-3 font-bold">Quality</th>
                    </tr>
                </thead>
                <tbody>
                    {MOCK_ENTITIES.map(entity => (
                        <tr key={entity.id} onClick={() => setSelectedEntity(entity)} className="border-b border-zinc-800 hover:bg-zinc-800 cursor-pointer">
                            <td className="py-3 text-white font-medium">{entity.name}</td>
                            <td className="py-3">{entity.type}</td>
                            <td className="py-3 text-emerald-500">{entity.status}</td>
                            <td className="py-3">{entity.quality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </StudioCard>
    </div>
  );
};

export default EntityManagement;
