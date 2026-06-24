import { useState } from 'react';
import { LayoutDashboard, Database, GitBranch, BrainCircuit, Network, BookOpen, FileText, Image, ShieldCheck, Users, Lock, FileClock, Settings, Upload, Download, DatabaseBackup, Sliders, BarChart, ChevronDown, ChevronRight, LucideIcon, Activity } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type NavItem = {
  title: string;
  path?: string;
  children?: NavItem[];
  icon?: LucideIcon;
};

type NavCategory = {
  title: string;
  icon: LucideIcon;
  children: NavItem[];
};

const SIDEBAR_CONFIG: NavCategory[] = [
  {
    title: "Knowledge",
    icon: Database,
    children: [
      { title: "Entities", path: "/admin/entities", icon: Database },
      { title: "Relationships", path: "/admin/relationships", icon: GitBranch },
      { title: "Ontology", path: "/admin/ontology", icon: BrainCircuit },
      { title: "Knowledge Graph", path: "/admin/graph", icon: Network },
    ]
  },
  {
    title: "Content",
    icon: BookOpen,
    children: [
      { title: "Articles", path: "/admin/articles", icon: FileText },
      { title: "Media", path: "/admin/media", icon: Image },
      { title: "Sources", path: "/admin/sources", icon: BookOpen },
    ]
  },
  {
    title: "Governance",
    icon: ShieldCheck,
    children: [
      { title: "Users", path: "/admin/users", icon: Users },
      { title: "Roles", path: "/admin/roles", icon: ShieldCheck },
      { title: "Permissions", path: "/admin/permissions", icon: Lock },
      { title: "Audit Log", path: "/admin/audit-log", icon: FileClock },
    ]
  },
  {
    title: "Analytics",
    icon: BarChart,
    children: [
      { title: "Metrics", path: "/admin/analytics", icon: BarChart },
    ]
  },
  {
    title: "Operations",
    icon: Settings,
    children: [
      { title: "Settings", path: "/admin/settings", icon: Sliders },
    ]
  }
];

const SidebarCategory = ({ category }: { category: NavCategory }) => {
  const [isOpen, setIsOpen] = useState(true); 
  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-amber-500 mb-2 px-3"
      >
        <span className="flex items-center gap-2"><category.icon size={14} /> {category.title}</span>
        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      {isOpen && (
        <div className="space-y-0.5">
          {category.children.map((item, idx) => (
              <NavLink key={idx} to={item.path!} className={({isActive}) => `flex w-full items-center gap-3 px-6 py-2 text-sm rounded-md ${isActive ? 'bg-zinc-800 text-white' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'}`}>
                {item.icon && <item.icon size={16} className="text-zinc-500" />}
                {item.title}
              </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export const AdminSidebar = () => {
  return (
    <nav className="py-4">
      <div className="px-3 mb-6">
        <NavLink to="/admin" end className={({isActive}) => `flex items-center gap-3 w-full px-3 py-2 text-sm font-bold rounded-md ${isActive ? 'bg-zinc-800 text-white' : 'text-zinc-300 hover:bg-zinc-700'}`}>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
      </div>

      {SIDEBAR_CONFIG.map((category, idx) => (
        <SidebarCategory key={idx} category={category} />
      ))}
    </nav>
  );
};
