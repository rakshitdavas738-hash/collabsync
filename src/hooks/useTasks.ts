"use client";

import { useState } from "react";
import { Task, TaskStatus } from "@/src/types/task";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Setup project",
      priority: "High",
      status: "todo",
    },
    {
      id: "2",
      title: "Design UI",
      priority: "Medium",
      status: "inprogress",
    },
  ]);

  const createTask = (task: Omit<Task, "id">) => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...task,
      },
    ]);
  };

  const updateStatus = (id: string, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return {
    tasks,
    createTask,
    updateStatus,
    deleteTask,
  };
}