import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tasks = [
  { title: "Create dashboard layout", priority: "High", status: "Done" },
  { title: "Design project cards", priority: "Medium", status: "Pending" },
  { title: "Add task management UI", priority: "High", status: "In Progress" },
  { title: "Setup authentication pages", priority: "Low", status: "Planned" },
];

export function RecentTasks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tasks</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div>
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-muted-foreground">
                Priority: {task.priority}
              </p>
            </div>

            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm">
              {task.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
