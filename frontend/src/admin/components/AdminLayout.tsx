import { Layout } from '../../shared/components/Layout';
import { AdminSidebar } from './AdminSidebar';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout sidebarContent={<AdminSidebar />}>{children}</Layout>
);
