"use client";

export default function AppSidebar() {
  return (
    <div className="h-screen w-64 bg-zinc-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">CollabSync</h2>

      <nav className="space-y-3">
        <div className="cursor-pointer hover:text-blue-400">Dashboard</div>
        <div className="cursor-pointer hover:text-blue-400">Projects</div>
        <div className="cursor-pointer hover:text-blue-400">Tasks</div>
        <div className="cursor-pointer hover:text-blue-400">Settings</div>
      </nav>
    </div>
  );
}