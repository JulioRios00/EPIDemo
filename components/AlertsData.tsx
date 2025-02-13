type AlertId = "1" | "2" | "3";

interface TypeData {
  date: string;
  no_ppe: number;
  low_confidence: number;
  unauthorized: number;
}

interface CameraData {
  name: string;
  value: number;
}

export const alertsDataByType: Record<AlertId, TypeData[]> = {
  "1": [
    { date: "Jan", no_ppe: 8, low_confidence: 3, unauthorized: 2 },
    { date: "Fev", no_ppe: 6, low_confidence: 2, unauthorized: 1 },
    { date: "Mar", no_ppe: 4, low_confidence: 1, unauthorized: 1 },
  ],
  "2": [
    { date: "Jan", no_ppe: 3, low_confidence: 5, unauthorized: 4 },
    { date: "Fev", no_ppe: 5, low_confidence: 3, unauthorized: 2 },
    { date: "Mar", no_ppe: 7, low_confidence: 2, unauthorized: 1 },
  ],
  "3": [
    { date: "Jan", no_ppe: 2, low_confidence: 2, unauthorized: 6 },
    { date: "Fev", no_ppe: 4, low_confidence: 3, unauthorized: 4 },
    { date: "Mar", no_ppe: 3, low_confidence: 4, unauthorized: 2 },
  ],
};

export const alertsDataByCamera: Record<AlertId, CameraData[]> = {
  "1": [
    { name: "Camera 1", value: 45 },
    { name: "Camera 2", value: 25 },
    { name: "Camera 3", value: 30 },
  ],
  "2": [
    { name: "Camera 1", value: 20 },
    { name: "Camera 2", value: 50 },
    { name: "Camera 3", value: 30 },
  ],
  "3": [
    { name: "Camera 1", value: 30 },
    { name: "Camera 2", value: 30 },
    { name: "Camera 3", value: 40 },
  ],
};