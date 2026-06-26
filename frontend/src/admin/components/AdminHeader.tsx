import { Search, Bell, ChevronDown } from 'lucide-react';

export const AdminHeader = () => {
  return (
    <header className="h-20 border-b border-slate-800/70 flex items-center justify-between px-8 bg-[#0B0F17]">
      {/* Left: Welcome */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">Welcome back, Samuel 👋</h1>
        <p className="text-sm text-slate-400">Here's what's happening with your knowledge base today.</p>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Date Filter */}
        <button className="flex items-center gap-2 bg-[#121824] px-4 py-2 rounded-full border border-slate-800/70 text-sm text-slate-300">
          May 20 - May 27, 2025
          <ChevronDown size={14} />
        </button>

        {/* Search */}
        <button className="text-slate-400 hover:text-slate-100">
          <Search size={20} />
        </button>

        {/* Notifications */}
        <button className="text-slate-400 hover:text-slate-100 relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full" />
        </button>

        {/* User Thumbnail */}
        <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600" />
      </div>
    </header>
  );
};
