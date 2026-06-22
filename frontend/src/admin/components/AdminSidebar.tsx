import { Link } from 'react-router-dom';
import { LayoutDashboard, Database, GitBranch, Settings, BookOpen, Image, FileText, Users, ShieldCheck, Lock, FileClock, Upload, Download, DatabaseBackup, Sliders } from 'lucide-react';

export const AdminSidebar = () => {
  return (
    <nav className="p-4 space-y-6">
      <div>
        <Link to="/admin" className="flex items-center gap-2 font-bold"><LayoutDashboard size={18} /> Dashboard</Link>
      </div>
      <div>
        <h4 className="text-xs font-bold text-brand-muted uppercase mb-2">Knowledge</h4>
        <div className="space-y-2 pl-2">
          <Link to="/admin/entities" className="block text-sm">Entities</Link>
          <Link to="/admin/relationships" className="block text-sm">Relationships</Link>
          <Link to="/admin/ontology" className="block text-sm">Ontology</Link>
          <Link to="/admin/graph" className="block text-sm">Knowledge Graph</Link>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-bold text-brand-muted uppercase mb-2">Content</h4>
        <div className="space-y-2 pl-2">
          <Link to="/admin/articles" className="block text-sm">Articles</Link>
          <Link to="/admin/media" className="block text-sm">Media</Link>
          <Link to="/admin/sources" className="block text-sm">Sources</Link>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-bold text-brand-muted uppercase mb-2">Governance</h4>
        <div className="space-y-2 pl-2">
          <Link to="/admin/users" className="block text-sm">Users</Link>
          <Link to="/admin/roles" className="block text-sm">Roles</Link>
          <Link to="/admin/permissions" className="block text-sm">Permissions</Link>
          <Link to="/admin/audit-log" className="block text-sm">Audit Log</Link>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-bold text-brand-muted uppercase mb-2">Operations</h4>
        <div className="space-y-2 pl-2">
          <Link to="/admin/import" className="flex items-center gap-2 text-sm"><Upload size={14} /> Import</Link>
          <Link to="/admin/export" className="flex items-center gap-2 text-sm"><Download size={14} /> Export</Link>
          <Link to="/admin/backups" className="flex items-center gap-2 text-sm"><DatabaseBackup size={14} /> Backups</Link>
          <Link to="/admin/settings" className="flex items-center gap-2 text-sm"><Sliders size={14} /> Settings</Link>
        </div>
      </div>
    </nav>
  );
};
