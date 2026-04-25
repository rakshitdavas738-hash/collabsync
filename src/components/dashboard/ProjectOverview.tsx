import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  { name: "Website Redesign", progress: "75%", status: "In Progress" },
  { name: "Mobile App UI", progress: "45%", status: "Active" },
  { name: "API Integration", progress: "90%", status: "Review" },
];

export function ProjectOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div>
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm text-muted-foreground">
                Progress: {project.progress}
              </p>
            </div>

            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm">
              {project.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}