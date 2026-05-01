export type TaskStatus = "todo" | "inprogress" | "done";

export interface Task {
  id: string;
  title: string;
  priority: "Low" | "Medium" | "High";
  status: TaskStatus;
}