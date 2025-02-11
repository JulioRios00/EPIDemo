"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardCharts from "@/components/DashboardCharts";
import CustomAreaChart from "@/components/AreaChart";
import { SelectVideo } from "@/components/SelectVideos";
import { useChartData } from "@/app/queries";
import VideoPlayer from "@/components/VideoPlayer";
import { OccurrenceTable } from "@/components/OccurrenceTable";
import { occurrenceData } from "@/components/OccurrenceData";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardPage() {
  const [videoName, setVideoName] = useState<string>("");
  const { data: chartData, isLoading } = useChartData(videoName);

  const handleVideoChange = (value: string) => {
    setVideoName(value);
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Dashboard de monitoramento de EPI</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center translate-y-1">
            <SelectVideo
              videoName={videoName}
              onVideoChange={handleVideoChange}
            />
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Registros de violação de EPI</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <OccurrenceTable data={occurrenceData} />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-3">
          <Card>
            <CardHeader>
              <CardTitle>Gravidade da infração</CardTitle>
            </CardHeader>
            <CardContent className="p-4 h-[400px]">
              {isLoading ? (
                <div className="h-full flex items-center justify-center">
                  Carregando...
                </div>
              ) : (
                <DashboardCharts
                  type="violations"
                  data={chartData?.violations ?? []}
                />
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quantidade de EPIs removidos</CardTitle>
            </CardHeader>
            <CardContent className="p-4 h-[400px]">
              {isLoading ? (
                <div className="h-full flex items-center justify-center">
                  Loading...
                </div>
              ) : (
                <CustomAreaChart 
                  type="items"
                  data={chartData?.items ?? []} 
                />
              )}
            </CardContent>
          </Card>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Video Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <VideoPlayer src={`/videos/${videoName}`} title={videoName} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
