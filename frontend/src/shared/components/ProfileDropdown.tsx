import { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';

export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuthStore();

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
        <User /> {user?.name}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-brand-dark border border-white/10 rounded shadow-lg p-2 z-50">
          <Link to="/cp" className="block p-2 hover:bg-white/5 rounded">Control Panel</Link>
          <button onClick={logout} className="w-full text-left p-2 hover:bg-white/5 rounded flex items-center gap-2 text-red-400">
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </div>
  );
};
