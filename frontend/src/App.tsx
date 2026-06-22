import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './shared/store/authStore';
import Home from './public/pages/Home';
import Login from './public/pages/Login';
import UserControlPanel from './public/pages/UserControlPanel';
import SearchResults from './public/pages/SearchResults';
import Dashboard from './admin/pages/Dashboard';

// Simple Auth Guard
const ProtectedRoute = ({ children, allowedRoles }: { children: JSX.Element, allowedRoles?: string[] }) => {
  const { isAuthenticated, user } = useAuthStore();
  
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (allowedRoles && user && !allowedRoles.map(r => r.toUpperCase()).includes(user.role.toUpperCase())) return <Navigate to="/cp" />;
  
  return children;
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cp" element={
          <ProtectedRoute>
            <UserControlPanel />
          </ProtectedRoute>
        } />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={['HEAD_ADMIN', 'ADMIN', 'EDITOR', 'RESEARCHER']}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};
