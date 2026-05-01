"use client";

import { useTasks } from "@/src/hooks/useTasks";
import { KanbanBoard } from "@/src/components/tasks/KanbanBoard";

export function TasksPageView() {
  const { tasks, updateStatus } = useTasks();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tasks Management</h1>

      <KanbanBoard tasks={tasks} onStatusChange={updateStatus} onTaskClick={() => {}} />
    </div>
  );
}
