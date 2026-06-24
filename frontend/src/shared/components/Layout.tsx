import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs } from './Breadcrumbs';
import { ProfileDropdown } from './ProfileDropdown';
import { useAuthStore } from '../store/authStore';

export const Layout = ({ children, sidebarContent }: { children: React.ReactNode, sidebarContent?: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-brand-darker text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 p-4 flex justify-between items-center bg-brand-dark sticky top-0 z-50">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        <Link to="/" className="text-2xl font-bold text-brand-gold">AFRISEEK</Link>
        {isAuthenticated ? (
          <ProfileDropdown />
        ) : (
          <Link to="/login" className="flex items-center gap-2">Login</Link>
        )}
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsSidebarOpen(false)} />
      )}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-brand-dark border-r border-white/10 z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b border-white/10">
          <span className="font-bold text-brand-gold">Administrator Dashboard</span>
          <button onClick={() => setIsSidebarOpen(false)}><X /></button>
        </div>
        {sidebarContent || (
          <nav className="p-4 space-y-4">
            <Link to="/entities" className="block p-2 hover:bg-white/5 rounded">Entities</Link>
            <Link to="/articles" className="block p-2 hover:bg-white/5 rounded">Articles</Link>
          </nav>
        )}
      </aside>

      {/* Main Container */}
      <main className="flex-1 p-4 md:p-8">
        {!isHome && <Breadcrumbs />}
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 p-4 text-center text-brand-muted">
        © 2026 AFRISEEK
      </footer>
    </div>
  );
};
