"use client";

export default function AppHeader() {
  return (
    <div className="h-14 bg-zinc-800 text-white flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <span>User</span>
      </div>
    </div>
  );
}