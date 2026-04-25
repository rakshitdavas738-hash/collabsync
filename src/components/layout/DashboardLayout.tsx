import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AppSidebar />

      <div className="flex-1">
        <AppHeader />

        <main className="p-6 bg-zinc-100 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}