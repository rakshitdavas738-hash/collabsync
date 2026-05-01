import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  value: string;
}

export function StatsCard({ title, value }: Props) {
  return (
    <Card className="shadow-md">
      <CardContent className="p-4">
        <p className="text-sm text-zinc-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </CardContent>
    </Card>
  );
}
