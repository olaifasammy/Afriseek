import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../shared/store/authStore';
import { Layout } from '../../shared/components/Layout';
import { apiClient } from '../../shared/services/apiClient';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus('idle');
    try {
      // Endpoint is /api/auth/login. apiClient handles the /api prefix.
      const data = await apiClient('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      login(data.token, data.user);
      setStatus('success');
      setTimeout(() => navigate('/cp'), 1000);
    } catch (e: any) {
      setError(e.message || 'Login failed.');
      setStatus('error');
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto p-8 border border-white/10 rounded-xl bg-brand-dark">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {status === 'success' && <p className="text-green-500 mb-4">Login successful!</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 rounded bg-white/5 border border-white/10" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 rounded bg-white/5 border border-white/10" required />
          <button type="submit" className="w-full p-2 bg-brand-gold text-brand-dark font-bold rounded">Login</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
