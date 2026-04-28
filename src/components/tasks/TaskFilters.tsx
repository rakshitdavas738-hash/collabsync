"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TaskPriority } from "./CreateTaskModal";

export type PriorityFilter = "All" | TaskPriority;

interface TaskFiltersProps {
  search: string;
  priority: PriorityFilter;
  onSearchChange: (value: string) => void;
  onPriorityChange: (value: PriorityFilter) => void;
}

export function TaskFilters({
  search,
  priority,
  onSearchChange,
  onPriorityChange,
}: TaskFiltersProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-white p-4 md:flex-row md:items-center md:justify-between">
      <Input
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearchChange(e.target.value)
        }
        placeholder="Search tasks..."
        className="md:max-w-sm"
      />

      <Select
        value={priority}
        onValueChange={(value) => onPriorityChange(value as PriorityFilter)}
      >
        <SelectTrigger className="md:w-48">
          <SelectValue placeholder="Filter priority" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="All">All Priorities</SelectItem>
          <SelectItem value="High">High</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Low">Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}