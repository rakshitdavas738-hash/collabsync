"use client";

import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-zinc-900">Dashboard</h2>
        <p className="text-sm text-zinc-500">Welcome back to CollabSync</p>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-3 rounded-full border px-3 py-1.5">
          <Avatar className="h-8 w-8">
            <AvatarFallback>R</AvatarFallback>
          </Avatar>

          <div className="hidden text-sm md:block">
            <p className="font-medium leading-none">Rakshit</p>
            <p className="text-xs text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}