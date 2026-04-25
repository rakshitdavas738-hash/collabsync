import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-100">
      <AppSidebar />

      <div className="ml-64 min-h-screen">
        <AppHeader />

        <main className="p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}