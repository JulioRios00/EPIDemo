import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen relative">
      <Navigation />
      <div className="absolute top-8 right-8 ">
        <ThemeToggle />
      </div>

      <main className="flex-1">{children}</main>
    </div>
  );
}
