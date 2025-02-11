import { useQuery } from '@tanstack/react-query';
import { QueryError, VideosResponse } from './types';
import { mockChartData, ChartData } from '@/components/ChartsData';

const defaultChartData: ChartData = {
	violations: [
	  { timestamp: '00:00', count: 0 },
	],
	items: [
	  { timestamp: '00:00', Capacete: 0, Colete: 0, Luvas: 0 },
	],
  };

const fetchVideos = async () => {
  const response = await fetch('/api/videos');
  return response.json();
};

export const useVideos = () => {
  return useQuery<VideosResponse, QueryError>({
    queryKey: ['videos'],
    queryFn: fetchVideos,
  });
};

const fetchChartData = async (videoName: string): Promise<ChartData> => {
	return mockChartData[videoName] || defaultChartData;
  };
  
  export const useChartData = (videoName: string) => {
	return useQuery({
	  queryKey: ['chartData', videoName],
	  queryFn: () => fetchChartData(videoName),
	  enabled: !!videoName,
	});
  };