import { useEffect, useState } from 'react';
import { Database, GitBranch, BookOpen, BookText, Users, Activity, ShieldCheck, ClipboardList, Plus, FileText, Upload, Download, ChevronDown } from 'lucide-react';
import { StudioCard, StudioButton } from '../components/StudioUI';
import { SidebarCard } from '../components/UIComponents';
import { ResponsivePageTemplate } from '../../shared/templates/ResponsivePageTemplate';

const MetricCard = ({ title, value, change, icon: Icon }: any) => (
  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900 flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded bg-amber-500/10 text-amber-500"><Icon size={18} /></div>
      <h3 className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">{title}</h3>
    </div>
    <p className="text-xl font-bold text-white">{value || '0'}</p>
    <p className="text-emerald-500 text-[10px] font-medium">{change}</p>
  </div>
);

export const Dashboard = () => {
  return (
    <ResponsivePageTemplate
        title=""
        description=""
    >
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">Welcome back, Samuel 👋</h1>
            <StudioButton variant="secondary" className="flex items-center gap-2">
                May 20 – May 27, 2025 <ChevronDown size={16} />
            </StudioButton>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* Main Area (Left - 2/3) */}
            <div className="xl:col-span-2 space-y-6">
                {/* Expanded Metrics Grid (8 items) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricCard title="Total Entities" value="2.45M" change="+12.5k this week" icon={Database} />
                <MetricCard title="Relationships" value="7.89M" change="+32.1k this week" icon={GitBranch} />
                <MetricCard title="Articles" value="64,320" change="+1.2k this week" icon={BookOpen} />
                <MetricCard title="Sources" value="120,450" change="+2.3k this week" icon={BookText} />
                <MetricCard title="Users" value="1,248" change="+18 this week" icon={Users} />
                <MetricCard title="Active Sessions" value="142" change="+8 this week" icon={Activity} />
                <MetricCard title="System Health" value="98%" change="All systems operational" icon={ShieldCheck} />
                <MetricCard title="Pending Tasks" value="24" change="Requires attention" icon={ClipboardList} />
                </div>

                {/* Main Visualizations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StudioCard title="Knowledge Graph Overview" className="h-80">
                        <div className="h-full flex items-center justify-center text-zinc-600 bg-zinc-950 rounded border border-dashed border-zinc-800">Graph visualization</div>
                    </StudioCard>
                    <StudioCard title="Knowledge Growth" className="h-80">
                        <div className="text-zinc-500 text-sm italic">Growth chart...</div>
                    </StudioCard>
                </div>

                {/* Recent Entities Table Placeholder */}
                <StudioCard title="Recent Entities">
                    <div className="text-zinc-500 text-sm italic p-4">Recent Entities table placeholder...</div>
                </StudioCard>
            </div>

            {/* Sidebar (Right - 1/3) */}
            <div className="space-y-6">
                <SidebarCard title="System Health">
                    <div className="flex items-center justify-center p-4">
                        <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-zinc-800 border-t-emerald-500">
                                <span className="text-emerald-500 font-bold text-3xl">98%</span>
                        </div>
                    </div>
                </SidebarCard>
                
                <SidebarCard title="Recent Activity">
                    <div className="text-zinc-400 text-sm italic">Activity feed...</div>
                </SidebarCard>

                <SidebarCard title="Quick Actions">
                    <div className="grid grid-cols-2 gap-2">
                        <StudioButton variant="secondary" className="justify-center"><Plus size={16} /> Create Entity</StudioButton>
                        <StudioButton variant="secondary" className="justify-center"><FileText size={16} /> Add Article</StudioButton>
                        <StudioButton variant="secondary" className="justify-center"><Upload size={16} /> Upload Media</StudioButton>
                        <StudioButton variant="secondary" className="justify-center"><Download size={16} /> Import Data</StudioButton>
                    </div>
                </SidebarCard>
            </div>
        </div>
    </ResponsivePageTemplate>
  );
};

export default Dashboard;
