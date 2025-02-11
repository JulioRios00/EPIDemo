import { useQuery } from "@tanstack/react-query";
import { QueryError, VideosResponse } from "./types";
import { mockChartData } from '@/components/ChartsData';

interface ViolationData {
	month: string;
	violations: number;
	equipmentsRemoved: number;
	severity: {
	  light: number;
	  severe: number;
	  critical: number;
	};
  }
  
  interface ItemData {
	month: string;
	helmet: number;
	vest: number;
	gloves: number;
  }
  
  interface ChartData {
	violations: ViolationData[];
	items: ItemData[];
  }

const defaultChartData: ChartData = {
  violations: [
    { 
      month: '00:00',
      violations: 0,
      equipmentsRemoved: 0,
      severity: {
        light: 0,
        severe: 0,
        critical: 0
      }
    }
  ],
  items: [
    { 
      month: '00:00', 
      helmet: 0, 
      vest: 0, 
      gloves: 0 
    }
  ]
};
const fetchVideos = async () => {
  const response = await fetch("/api/videos");
  return response.json();
};

export const useVideos = () => {
  return useQuery<VideosResponse, QueryError>({
    queryKey: ["videos"],
    queryFn: fetchVideos,
  });
};

const fetchChartData = async (videoName: string): Promise<ChartData> => {
  const data = mockChartData[videoName] || defaultChartData;
  return {
    violations: data.violations,
    items: data.items.map(item => ({
      month: item.month,
      helmet: item.helmet || 0,
      vest: item.vest || 0,
      gloves: item.gloves || 0
    }))
  };
};

export const useChartData = (videoName: string) => {
  return useQuery({
    queryKey: ["chartData", videoName],
    queryFn: () => fetchChartData(videoName),
    enabled: !!videoName,
  });
};
