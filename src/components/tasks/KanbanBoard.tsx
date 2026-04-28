"use client";

import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import { Card, CardContent } from "@/components/ui/card";
import { TaskCard } from "./TaskCard";
import type { TaskPriority, TaskStatus } from "./CreateTaskModal";

export interface Task {
  id: string;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
}

interface KanbanBoardProps {
  tasks: Task[];
  onStatusChange: (taskId: string, status: TaskStatus) => void;
  onTaskClick: (task: Task) => void;
}

const columns: { id: TaskStatus; title: string }[] = [
  { id: "todo", title: "Todo" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];

function KanbanColumn({
  id,
  title,
  children,
}: {
  id: TaskStatus;
  title: string;
  children: React.ReactNode;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <Card
      ref={setNodeRef}
      className={isOver ? "border-zinc-900 bg-zinc-50" : ""}
    >
      <CardContent className="p-4">
        <h2 className="mb-4 font-semibold">{title}</h2>
        <div className="min-h-80 space-y-3">{children}</div>
      </CardContent>
    </Card>
  );
}

function DraggableTask({
  task,
  onTaskClick,
}: {
  task: Task;
  onTaskClick: (task: Task) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <TaskCard
        title={task.title}
        priority={task.priority}
        onClick={() => onTaskClick(task)}
      />
    </div>
  );
}

export function KanbanBoard({
  tasks,
  onStatusChange,
  onTaskClick,
}: KanbanBoardProps) {
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((item) => item.id === event.active.id);
    setActiveTask(task ?? null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveTask(null);
      return;
    }

    const newStatus = over.id as TaskStatus;
    onStatusChange(String(active.id), newStatus);
    setActiveTask(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {columns.map((column) => (
          <KanbanColumn key={column.id} id={column.id} title={column.title}>
            {tasks
              .filter((task) => task.status === column.id)
              .map((task) => (
                <DraggableTask
                  key={task.id}
                  task={task}
                  onTaskClick={onTaskClick}
                />
              ))}
          </KanbanColumn>
        ))}
      </div>

      <DragOverlay>
        {activeTask ? (
          <TaskCard title={activeTask.title} priority={activeTask.priority} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}