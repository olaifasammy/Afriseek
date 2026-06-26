import { Database, GitBranch, FileText, BookOpen, Users, Activity, Cpu, CheckSquare } from 'lucide-react';
import { MetricCard } from './MetricCard';

export const MetricsGrid = () => {
  const metrics = [
    { icon: Database, label: "Total Entities", value: "1,284", trend: "+12% vs last week", color: "#A855F7" },
    { icon: GitBranch, label: "Relationships", value: "3,402", trend: "+8% vs last week", color: "#3B82F6" },
    { icon: FileText, label: "Articles", value: "856", trend: "+5% vs last week", color: "#22C55E" },
    { icon: BookOpen, label: "Sources", value: "241", trend: "+2% vs last week", color: "#F59E0B" },
    { icon: Users, label: "Users", value: "54", trend: "+1 new user", color: "#64748b" },
    { icon: Activity, label: "Active Sessions", value: "12", trend: "3m ago", color: "#64748b" },
    { icon: Cpu, label: "System Health", value: "98%", trend: "Optimal", color: "#64748b" },
    { icon: CheckSquare, label: "Pending Tasks", value: "8", trend: "Review required", color: "#64748b" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {metrics.map((m, i) => <MetricCard key={i} {...m} />)}
    </div>
  );
};
