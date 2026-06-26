import { LucideIcon } from 'lucide-react';

interface MetricProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
  color: string;
}

export const MetricCard = ({ icon: Icon, label, value, trend, color }: MetricProps) => {
  const bgColor = `bg-${color.replace('#', '')}/10`; // Simplified mapping for now
  
  return (
    <div className="bg-[#121824] border border-slate-800/70 p-5 rounded-lg">
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-lg`} style={{ backgroundColor: `${color}20` }}>
          <Icon size={20} style={{ color }} />
        </div>
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <h3 className="text-2xl font-bold text-slate-100">{value}</h3>
          <p className="text-xs" style={{ color }}>{trend}</p>
        </div>
      </div>
    </div>
  );
};
