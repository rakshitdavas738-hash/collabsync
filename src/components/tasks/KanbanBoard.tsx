"use client";

import { Card, CardContent } from "@/components/ui/card";

const columns = [
  { id: "todo", title: "Todo" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];

export function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map((col) => (
        <Card key={col.id}>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-4">{col.title}</h2>

            <div className="space-y-3">
              <div className="p-3 rounded-lg border bg-white shadow-sm">
                Sample Task
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}