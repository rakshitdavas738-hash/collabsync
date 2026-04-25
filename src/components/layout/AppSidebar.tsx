"use client";

import {
  BarChart3,
  FolderKanban,
  LayoutDashboard,
  Settings,
  CheckSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Projects",
    icon: FolderKanban,
    active: false,
  },
  {
    label: "Tasks",
    icon: CheckSquare,
    active: false,
  },
  {
    label: "Analytics",
    icon: BarChart3,
    active: false,
  },
  {
    label: "Settings",
    icon: Settings,
    active: false,
  },
];

export default function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-zinc-950 text-white">
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <h1 className="text-xl font-bold tracking-tight">CollabSync</h1>
      </div>

      <nav className="space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Button
              key={item.label}
              variant={item.active ? "secondary" : "ghost"}
              className={`w-full justify-start gap-3 ${
                item.active
                  ? "bg-white text-zinc-950 hover:bg-white"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
}