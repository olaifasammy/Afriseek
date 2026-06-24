import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudioCard, StudioButton } from '../../components/StudioUI';
import { SidebarCard } from '../../components/UIComponents';
import { Layers, GitBranch, ShieldCheck, Lock, FileCode, Plus, CheckCircle, ChevronRight } from 'lucide-react';
import { ResponsivePageTemplate } from '../../../shared/templates/ResponsivePageTemplate';

const MetricCard = ({ title, value, icon: Icon }: any) => (
  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900 flex items-center gap-4">
    <div className="p-3 rounded bg-zinc-800 text-zinc-400"><Icon size={20} /></div>
    <div>
        <h3 className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">{title}</h3>
        <p className="text-xl font-bold text-white">{value}</p>
    </div>
  </div>
);

export const OntologyManagement = () => {
  const navigate = useNavigate();
  const [ontologies, setOntologies] = useState([]);

  useEffect(() => {
    const fetchOntologies = async () => {
        try {
            const response = await fetch('/api/studio/ontology-definitions');
            const result = await response.json();
            if (result.success) {
                setOntologies(result.data);
            }
        } catch (error) {
            console.error('Failed to fetch ontologies:', error);
        }
    };
    fetchOntologies();
  }, []);

  return (
    <ResponsivePageTemplate
        title="Ontology Management"
        description="Manage the structure, rules and semantics of the Afriseek knowledge model."
        actions={
            <StudioButton onClick={() => navigate('/admin/ontology/create')}><Plus size={16} /> Create New Ontology</StudioButton>
        }
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                <MetricCard title="Entity Types" value="189" icon={Layers} />
                <MetricCard title="Relationships" value="362" icon={GitBranch} />
                <MetricCard title="Rules" value="578" icon={ShieldCheck} />
                <MetricCard title="Constraints" value="214" icon={Lock} />
                <MetricCard title="Version" value="v2.4.1" icon={FileCode} />
            </div>

            <h2 className="text-lg font-bold text-white mt-6">Active Ontologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ontologies.map((ontology: any) => (
                    <StudioCard key={ontology.id} title={ontology.name}>
                        <p className="text-zinc-400 text-sm mb-4">Slug: {ontology.slug}</p>
                        <StudioButton variant="secondary" size="sm">Edit</StudioButton>
                    </StudioCard>
                ))}
            </div>
        </div>

        <div className="w-full lg:w-80 space-y-6">
            <SidebarCard title="Ontology Health">
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-emerald-500 py-4">94%</div>
                    <div className="w-full space-y-2 text-xs text-zinc-400">
                        <div className="flex justify-between"><span>Completeness</span> <span>96%</span></div>
                        <div className="flex justify-between"><span>Consistency</span> <span>93%</span></div>
                    </div>
                </div>
            </SidebarCard>
            <SidebarCard title="Validation Status">
                <div className="flex items-center gap-2 text-xs text-emerald-500"><CheckCircle size={14}/> Schema Passed</div>
            </SidebarCard>
        </div>
      </div>
    </ResponsivePageTemplate>
  );
};

export default OntologyManagement;
