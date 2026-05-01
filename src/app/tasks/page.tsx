import DashboardLayout from "@/src/components/layout/DashboardLayout";
import { TasksPageView } from "@/src/components/pages/TasksPageView";

export default function TasksPage() {
  return (
    <DashboardLayout>
      <TasksPageView />
    </DashboardLayout>
  );
}