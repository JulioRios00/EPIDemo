"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/DateRangePicker";
import { AlertsTable } from "@/components/AlertsTable";
import { AlertsChart } from "@/components/AlertsChart";
import { ExportButton } from "@/components/ExportButton";
import { AlertSearch } from "@/components/AlertSearch";
import { alertsDataByType, alertsDataByCamera } from "@/components/AlertsData";

export default function AlertsPage() {
  const [isSilenced, setIsSilenced] = useState(false);
  const [selectedAlertId, setSelectedAlertId] = useState<string>("");

  const handleSearchSelect = (id: string) => {
    setSelectedAlertId(id);
    // Update other components based on selection
  };

  return (
    <div className="container mx-auto p-8 space-y-8 bg-background">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Alertas & Logs</h1>
        <div className="flex items-center gap-4">
          <Button
            variant={isSilenced ? "destructive" : "outline"}
            onClick={() => setIsSilenced(!isSilenced)}
          >
            {isSilenced ? "Unmute Alerts" : "Silence Alerts"}
          </Button>
          <ExportButton />
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <AlertSearch onSelect={handleSearchSelect} />
        <DateRangePicker />
      </div>
      <div className="grid gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Alertas por Tipo</CardTitle>
            </CardHeader>
            <CardContent>
              <AlertsChart
                type="byType"
                height={300}
                data={alertsDataByType[selectedAlertId as keyof typeof alertsDataByType]}
              />
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Alertas por Câmera</CardTitle>
            </CardHeader>
            <CardContent>
              <AlertsChart
                type="byCamera"
                height={300}
                data={alertsDataByCamera[selectedAlertId as keyof typeof alertsDataByCamera]}
              />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-background">
          <CardHeader>
            <CardTitle>Alertas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <AlertsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}