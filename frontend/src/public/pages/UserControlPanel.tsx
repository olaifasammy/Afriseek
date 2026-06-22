import { Layout } from '../../shared/components/Layout';
import { useAuthStore } from '../../shared/store/authStore';
import { Link } from 'react-router-dom';
import { User, Shield, LogOut } from 'lucide-react';

export const UserControlPanel = () => {
  const { user, logout } = useAuthStore();
  const isAdmin = ['head_admin', 'admin', 'editor', 'researcher'].includes(user?.role?.toLowerCase() || '');

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-brand-gold">Control Panel</h1>
        
        {/* User Info Card */}
        <div className="p-6 border border-white/10 rounded-xl bg-brand-dark flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
            <User size={32} />
          </div>
          <div>
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-brand-muted">{user?.role?.toUpperCase()}</p>
          </div>
        </div>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isAdmin && (
            <div className="p-6 border border-brand-gold/30 rounded-xl bg-brand-gold/5">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-brand-gold" />
                <h3 className="text-xl font-bold">Admin Tools</h3>
              </div>
              <p className="text-brand-muted mb-4">Manage entities, ontology, and system settings.</p>
              <Link 
                to="/admin" 
                className="text-brand-gold font-bold hover:underline"
                onClick={() => console.log('Admin link clicked')}
              >
                Go to Admin Dashboard →
              </Link>
            </div>
          )}
          
          <div className="p-6 border border-white/10 rounded-xl bg-brand-dark">
            <h3 className="text-xl font-bold mb-4">Account</h3>
            <button onClick={logout} className="flex items-center gap-2 text-red-400 hover:text-red-300">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserControlPanel;
