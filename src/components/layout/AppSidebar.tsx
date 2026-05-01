"use client";

import Link from "next/link";
import {
  BarChart3,
  FolderKanban,
  LayoutDashboard,
  LogIn,
  Settings,
  UserPlus,
  CheckSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, active: true },
  { label: "Projects", href: "#", icon: FolderKanban, active: false },
  { label: "Tasks", href: "#", icon: CheckSquare, active: false },
  { label: "Analytics", href: "#", icon: BarChart3, active: false },
  { label: "Settings", href: "#", icon: Settings, active: false },
];

export default function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r bg-zinc-950 text-white">
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <h1 className="text-xl font-bold tracking-tight">CollabSync</h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.label} href={item.href}>
              <Button
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
            </Link>
          );
        })}
      </nav>

      <div className="space-y-2 border-t border-white/10 p-4">
        <Link href="/login">
          <Button className="w-full justify-start gap-3" variant="ghost">
            <LogIn className="h-4 w-4" />
            Login
          </Button>
        </Link>

        <Link href="/signup">
          <Button className="w-full justify-start gap-3 bg-white text-zinc-950 hover:bg-zinc-200">
            <UserPlus className="h-4 w-4" />
            Sign Up
          </Button>
        </Link>
      </div>
    </aside>
  );
}