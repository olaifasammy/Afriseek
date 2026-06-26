import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { ProfileDropdown } from '../../shared/components/ProfileDropdown';

export const AdminCenterLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex font-sans">
      {/* Mobile Menu Button - Visible only on mobile */}
      <button 
        onClick={() => setIsSidebarOpen(true)} 
        className="fixed top-4 left-4 z-40 xl:hidden p-2 bg-[#121824] border border-slate-800/70 rounded text-slate-400 hover:text-white"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar - Responsive */}
      <aside className={`fixed inset-y-0 left-0 z-50 bg-[#0D111C] border-r border-slate-800/70 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0 xl:static flex flex-col w-64`}>
        <div className="p-5 border-b border-slate-800/70 flex items-center justify-between">
            <span className="font-semibold text-amber-500 text-sm tracking-wide uppercase">Admin Studio</span>
            <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 hover:text-white xl:hidden"><X size={18} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
            <AdminSidebar />
        </div>
      </aside>

      {/* Backdrop for Mobile Sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 xl:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Content */}
      <main className="flex-1 overflow-y-auto flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};
