import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface TaskCardProps {
  title: string;
  priority: "High" | "Medium" | "Low";
  onClick?: () => void;
}

export function TaskCard({ title, priority, onClick }: TaskCardProps) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer transition hover:shadow-md active:cursor-grabbing"
    >
      <CardContent className="p-3">
        <h3 className="font-medium">{title}</h3>

        <div className="mt-3">
          <Badge
            variant={
              priority === "High"
                ? "destructive"
                : priority === "Medium"
                ? "secondary"
                : "outline"
            }
          >
            {priority}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}