import DashboardLayout from "@/src/components/layout/DashboardLayout";
import { StatsCard } from "@/src/app/dashboard/StatsCard";
import { ProjectOverview } from "@/src/components/dashboard/ProjectOverview";
import { RecentTasks } from "@/src/components/dashboard/RecentTasks";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Welcome to CollabSync 🚀</h2>
          <p className="text-sm text-muted-foreground">
            Manage your projects, tasks, and team collaboration from one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard title="Total Projects" value="12" />
          <StatsCard title="Active Tasks" value="34" />
          <StatsCard title="Completed Tasks" value="18" />
          <StatsCard title="Team Members" value="8" />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <ProjectOverview />
          <RecentTasks />
        </div>
      </div>
    </DashboardLayout>
  );
}