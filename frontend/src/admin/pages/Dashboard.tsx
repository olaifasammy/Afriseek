import { useEffect, useState } from 'react';
import { AdminLayout } from '../components/AdminLayout';
import { Database, BookOpen, Users, BarChart, Settings } from 'lucide-react';
import { apiClient } from '../../shared/services/apiClient';

const MetricCard = ({ title, value, icon: Icon }: any) => (
  <div className="p-6 border border-white/10 rounded-xl bg-brand-dark flex items-center gap-4">
    <div className="p-3 rounded-full bg-brand-gold/20 text-brand-gold">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-brand-muted text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value || '0'}</p>
    </div>
  </div>
);

export const Dashboard = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    apiClient('/dashboard').then(res => setStats(res.data)).catch(console.error);
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-brand-gold">Admin Dashboard</h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard title="Total Entities" value={stats?.entities} icon={Database} />
          <MetricCard title="Total Articles" value={stats?.articles} icon={BookOpen} />
          <MetricCard title="Total Users" value={stats?.users} icon={Users} />
          <MetricCard title="Total Ontologies" value={stats?.ontologies} icon={Settings} />
          <MetricCard title="Audit Events" value={stats?.auditEvents} icon={BarChart} />
        </div>

        {/* Placeholder for Management Links */}
        <div className="p-6 border border-white/10 rounded-xl bg-brand-dark">
          <h2 className="text-xl font-bold mb-4">Quick Management</h2>
          <p className="text-brand-muted">Select a category from the sidebar to begin management.</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
