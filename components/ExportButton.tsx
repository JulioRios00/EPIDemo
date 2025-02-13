"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download } from "lucide-react";

export function ExportButton() {
  const exportToPDF = () => {
    // Implement PDF export logic
    console.log("Exporting to PDF...");
  };

  const exportToCSV = () => {
    // Implement CSV export logic
    console.log("Exporting to CSV...");
  };

  const shareViaEmail = () => {
    // Implement email sharing logic
    console.log("Sharing via email...");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={exportToPDF}>
          Export as PDF
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportToCSV}>
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareViaEmail}>
          Share via Email
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
