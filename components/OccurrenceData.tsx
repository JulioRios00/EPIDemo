export interface OccurrenceRecord {
  date: string;
  time: string;
  location: string;
  ppeRemoved: string[];
  personName: string;
  mediaLink: string;
}

export const occurrenceData: OccurrenceRecord[] = [
  {
    date: "2024-01-15",
    time: "08:00",
    location: "Canopy S/W",
    ppeRemoved: ["Capacete", "Luvas"],
    personName: "Usuário 1",
    mediaLink: "/videos/tracking_1.mp4"
  },
  {
    date: "2024-01-15",
    time: "08:25",
    location: "Control room",
    ppeRemoved: ["Colete", "Botas"],
    personName: "Usuário 2",
    mediaLink: "/images/violation_001.jpg"
  },
  {
    date: "2024-01-16",
    time: "08:20",
    location: "Control room",
    ppeRemoved: ["Capacete", "Colete", "Luvas"],
    personName: "Usuário 3",
    mediaLink: "/videos/tracking_2.mp4"
  },
  {
    date: "2024-01-15",
    time: "09:30",
    location: "Canopy S/W",
    ppeRemoved: ["Capacete", "Luvas"],
    personName: "Usuário 4",
    mediaLink: "/videos/tracking_1.mp4"
  },
];
