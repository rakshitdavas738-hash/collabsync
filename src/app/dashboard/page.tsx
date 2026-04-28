"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/src/components/layout/DashboardLayout";
import { StatsCard } from "./StatsCard";
import { ProjectOverview } from "@/src/components/dashboard/ProjectOverview";
import { RecentTasks } from "@/src/components/dashboard/RecentTasks";
import { KanbanBoard, Task } from "@/src/components/tasks/KanbanBoard";
import {
  CreateTaskModal,
  NewTask,
  TaskStatus,
} from "@/src/components/tasks/CreateTaskModal";
import { TaskDetailsModal } from "@/src/components/tasks/TaskDetailsModal";
import {
  PriorityFilter,
  TaskFilters,
} from "@/src/components/tasks/TaskFilters";

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Create dashboard layout",
      priority: "High",
      status: "done",
    },
    {
      id: "2",
      title: "Design project cards",
      priority: "Medium",
      status: "todo",
    },
    {
      id: "3",
      title: "Add task management UI",
      priority: "High",
      status: "inprogress",
    },
  ]);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] =
    useState<PriorityFilter>("All");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesPriority =
        priorityFilter === "All" || task.priority === priorityFilter;

      return matchesSearch && matchesPriority;
    });
  }, [tasks, search, priorityFilter]);

  const handleCreateTask = (task: NewTask) => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...task,
      },
    ]);
  };

  const handleStatusChange = (taskId: string, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status } : task))
    );
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsDetailsOpen(true);
  };

  const handleUpdateTask = (taskId: string, data: Omit<Task, "id">) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { id: taskId, ...data } : task))
    );

    setSelectedTask((prev) =>
      prev?.id === taskId ? { id: taskId, ...data } : prev
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    setSelectedTask(null);
    setIsDetailsOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Welcome to CollabSync 🚀</h2>
            <p className="text-sm text-muted-foreground">
              Manage your projects, tasks, and team collaboration from one place.
            </p>
          </div>

          <CreateTaskModal onCreateTask={handleCreateTask} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard title="Total Projects" value="12" />
          <StatsCard title="Active Tasks" value={String(tasks.length)} />
          <StatsCard
            title="Completed Tasks"
            value={String(tasks.filter((task) => task.status === "done").length)}
          />
          <StatsCard title="Team Members" value="8" />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <ProjectOverview />
          <RecentTasks />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold">Kanban Board</h2>
            <p className="text-sm text-muted-foreground">
              Search, filter, and manage your tasks.
            </p>
          </div>

          <TaskFilters
            search={search}
            priority={priorityFilter}
            onSearchChange={setSearch}
            onPriorityChange={setPriorityFilter}
          />

          <KanbanBoard
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
            onTaskClick={handleTaskClick}
          />
        </div>
      </div>

      <TaskDetailsModal
        task={selectedTask}
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </DashboardLayout>
  );
}