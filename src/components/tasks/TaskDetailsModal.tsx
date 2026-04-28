"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Task } from "./KanbanBoard";
import type { TaskPriority, TaskStatus } from "./CreateTaskModal";

interface TaskDetailsModalProps {
  task: Task | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateTask: (taskId: string, data: Omit<Task, "id">) => void;
  onDeleteTask: (taskId: string) => void;
}

export function TaskDetailsModal({
  task,
  open,
  onOpenChange,
  onUpdateTask,
  onDeleteTask,
}: TaskDetailsModalProps) {
  const [title, setTitle] = useState(task?.title ?? "");
  const [priority, setPriority] = useState<TaskPriority>(
    task?.priority ?? "Medium"
  );
  const [status, setStatus] = useState<TaskStatus>(task?.status ?? "todo");

  if (!task) return null;

  const handleSave = () => {
    if (!title.trim()) return;

    onUpdateTask(task.id, {
      title: title.trim(),
      priority,
      status,
    });

    onOpenChange(false);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Task Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            placeholder="Task title"
          />

          <Select
            value={priority}
            onValueChange={(value) => setPriority(value as TaskPriority)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={status}
            onValueChange={(value) => setStatus(value as TaskStatus)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todo">Todo</SelectItem>
              <SelectItem value="inprogress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-3">
            <Button onClick={handleSave} className="flex-1">
              Save Changes
            </Button>

            <Button
              variant="destructive"
              onClick={handleDelete}
              className="flex-1"
            >
              Delete Task
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}