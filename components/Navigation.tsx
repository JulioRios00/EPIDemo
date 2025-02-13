"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
export function Navigation() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const routes = [
    { href: "/dash", label: "Painel de operação" },
    { href: "/camera-page", label: "Câmeras" },
	{ href: "/alerts", label: "Alertas & Logs" },
	//soltar 404
	{ href: "/#fdf", label: "Usuários e permissões" },
	{ href: "/#dfd", label: "Manutenção e suporte" },
];

  return (
    <div className="flex bg-background">
      <nav className={cn(
        "transition-all bg-background p-4 border-r border-border",
        isCollapsed ? "w-0 opacity-0 overflow-hidden" : "w-64 opacity-100"
      )}>
        <div className="space-y-4 bg-background">
          <div className="flex items-center justify-between mb-6 bg-background">
            <div className="text-xl font-bold">EPI Demo</div>
          </div>
          <div className="space-y-2 bg-background">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center p-2 rounded-lg transition-colors",
                  pathname === route.href 
                    ? "bg-gray-700" 
                    : "hover:bg-gray-700"
                )}
              >
                <span className="ml-3">{route.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Button
        variant="ghost"
        size="icon"
        className="mt-10 ml-4"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </Button>
    </div>
  );
}
