import { AdminHeader } from '../components/AdminHeader';
import { MetricsGrid } from '../components/MetricsGrid';
import { AnalyticsSection } from '../components/AnalyticsSection';
import { RecentEntitiesTable } from '../components/RecentEntitiesTable';
import { RightRail } from '../components/RightRail';

export const MainDashboard = () => {
  return (
    <div className="flex flex-col h-full bg-[#0B0F17]">
      <AdminHeader />
      
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-4 gap-6">
          {/* Main Body Area: 3/4 Width */}
          <div className="col-span-3 space-y-6">
            <MetricsGrid />
            <AnalyticsSection />
            <RecentEntitiesTable />
          </div>

          {/* Right Rail: 1/4 Width */}
          <div className="col-span-1">
            <RightRail />
          </div>
        </div>
      </div>
    </div>
  );
};
