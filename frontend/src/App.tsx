import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './shared/store/authStore';
import Home from './public/pages/Home';
import Login from './public/pages/Login';
import UserControlPanel from './public/pages/UserControlPanel';
import SearchResults from './public/pages/SearchResults';
import { AdminCenterLayout } from './admin/components/AdminCenterLayout';
import EntityManagement from './admin/pages/Entities/EntityManagement';
import OntologyManagement from './admin/pages/Ontology/OntologyManagement';
import CreateOntology from './admin/pages/Ontology/CreateOntology';
import EditEntityType from './admin/pages/Ontology/EditEntityType';
import RelationshipManagement from './admin/pages/Relationships/RelationshipManagement';
import GraphManagement from './admin/pages/Graph/GraphManagement';
import SourcesManagement from './admin/pages/Content/SourcesManagement';
import MediaManagement from './admin/pages/Content/MediaManagement';
import ArticlesManagement from './admin/pages/Content/ArticlesManagement';
import UsersManagement from './admin/pages/Governance/UsersManagement';
import RolesManagement from './admin/pages/Governance/RolesManagement';
import PermissionsManagement from './admin/pages/Governance/PermissionsManagement';
import AuditLogManagement from './admin/pages/Governance/AuditLogManagement';
import AnalyticsManagement from './admin/pages/Analytics/AnalyticsManagement';
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
        
        {/* Admin Center */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={['HEAD_ADMIN', 'ADMIN', 'EDITOR', 'RESEARCHER']}>
              <AdminCenterLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="entities" element={<EntityManagement />} />
          <Route path="ontology" element={<OntologyManagement />} />
          <Route path="ontology/create" element={<CreateOntology />} />
          <Route path="ontology/entity-types/:id/edit" element={<EditEntityType />} />
          <Route path="relationships" element={<RelationshipManagement />} />
          <Route path="graph" element={<GraphManagement />} />
          <Route path="sources" element={<SourcesManagement />} />
          <Route path="media" element={<MediaManagement />} />
          <Route path="articles" element={<ArticlesManagement />} />
          <Route path="users" element={<UsersManagement />} />
          <Route path="roles" element={<RolesManagement />} />
          <Route path="permissions" element={<PermissionsManagement />} />
          <Route path="audit-log" element={<AuditLogManagement />} />
          <Route path="analytics" element={<AnalyticsManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
