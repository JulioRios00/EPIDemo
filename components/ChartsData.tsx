export interface ChartData {
  violations: {
    month: string;
    violations: number;
    equipmentsRemoved: number;
    severity: {
      light: number;    // infrações leves (<10s)
      severe: number;   // infrações graves (11s-1min)
      critical: number; // infrações gravíssimas (>1min)
    };
  }[];
  items: {
    month: string;
    violations: number;
    equipmentsRemoved: number;
    severity: {
      light: number;
      severe: number;
      critical: number;
    };
  }[];
}

export const mockChartData: Record<string, ChartData> = {
  "video_1.mp4": {
    violations: [
      { 
        month: "Jan", 
        violations: 12, 
        equipmentsRemoved: 15,
        severity: { light: 5, severe: 4, critical: 3 }
      },
      { 
        month: "Feb", 
        violations: 19, 
        equipmentsRemoved: 22,
        severity: { light: 8, severe: 7, critical: 4 }
      },
      { 
        month: "Mar", 
        violations: 3, 
        equipmentsRemoved: 8,
        severity: { light: 1, severe: 1, critical: 1 }
      },
      { 
        month: "Apr", 
        violations: 5, 
        equipmentsRemoved: 12,
        severity: { light: 2, severe: 2, critical: 1 }
      },
      { 
        month: "May", 
        violations: 2, 
        equipmentsRemoved: 4,
        severity: { light: 1, severe: 1, critical: 0 }
      },
      { 
        month: "Jun", 
        violations: 3, 
        equipmentsRemoved: 7,
        severity: { light: 1, severe: 1, critical: 1 }
      },
    ],
    items: [
      { 
        month: "Jan", 
        violations: 12, 
        equipmentsRemoved: 15,
        severity: { light: 5, severe: 4, critical: 3 }
      },
      { 
        month: "Feb", 
        violations: 19, 
        equipmentsRemoved: 22,
        severity: { light: 8, severe: 7, critical: 4 }
      },
      { 
        month: "Mar", 
        violations: 3, 
        equipmentsRemoved: 8,
        severity: { light: 1, severe: 1, critical: 1 }
      },
      { 
        month: "Apr", 
        violations: 5, 
        equipmentsRemoved: 12,
        severity: { light: 2, severe: 2, critical: 1 }
      },
      { 
        month: "May", 
        violations: 2, 
        equipmentsRemoved: 4,
        severity: { light: 1, severe: 1, critical: 0 }
      },
      { 
        month: "Jun", 
        violations: 3, 
        equipmentsRemoved: 7,
        severity: { light: 1, severe: 1, critical: 1 }
      },
    ],
  },
  "video_2.mp4": {
    violations: [
      { 
        month: "Jan", 
        violations: 8, 
        equipmentsRemoved: 10,
        severity: { light: 3, severe: 3, critical: 2 }
      },
      { 
        month: "Feb", 
        violations: 15, 
        equipmentsRemoved: 18,
        severity: { light: 6, severe: 5, critical: 4 }
      },
      { 
        month: "Mar", 
        violations: 6, 
        equipmentsRemoved: 9,
        severity: { light: 2, severe: 2, critical: 2 }
      },
      { 
        month: "Apr", 
        violations: 4, 
        equipmentsRemoved: 7,
        severity: { light: 2, severe: 1, critical: 1 }
      },
      { 
        month: "May", 
        violations: 7, 
        equipmentsRemoved: 11,
        severity: { light: 3, severe: 2, critical: 2 }
      },
      { 
        month: "Jun", 
        violations: 9, 
        equipmentsRemoved: 13,
        severity: { light: 4, severe: 3, critical: 2 }
      },
    ],
    items: [
      { 
        month: "Jan", 
        violations: 8, 
        equipmentsRemoved: 10,
        severity: { light: 3, severe: 3, critical: 2 }
      },
      { 
        month: "Feb", 
        violations: 15, 
        equipmentsRemoved: 18,
        severity: { light: 6, severe: 5, critical: 4 }
      },
      { 
        month: "Mar", 
        violations: 6, 
        equipmentsRemoved: 9,
        severity: { light: 2, severe: 2, critical: 2 }
      },
      { 
        month: "Apr", 
        violations: 4, 
        equipmentsRemoved: 7,
        severity: { light: 2, severe: 1, critical: 1 }
      },
      { 
        month: "May", 
        violations: 7, 
        equipmentsRemoved: 11,
        severity: { light: 3, severe: 2, critical: 2 }
      },
      { 
        month: "Jun", 
        violations: 9, 
        equipmentsRemoved: 13,
        severity: { light: 4, severe: 3, critical: 2 }
      },
    ],
  },
  "video_3.mp4": {
    violations: [
      { 
        month: "Jan", 
        violations: 14, 
        equipmentsRemoved: 17,
        severity: { light: 6, severe: 5, critical: 3 }
      },
      { 
        month: "Feb", 
        violations: 22, 
        equipmentsRemoved: 25,
        severity: { light: 9, severe: 8, critical: 5 }
      },
      { 
        month: "Mar", 
        violations: 8, 
        equipmentsRemoved: 11,
        severity: { light: 3, severe: 3, critical: 2 }
      },
      { 
        month: "Apr", 
        violations: 12, 
        equipmentsRemoved: 15,
        severity: { light: 5, severe: 4, critical: 3 }
      },
      { 
        month: "May", 
        violations: 5, 
        equipmentsRemoved: 8,
        severity: { light: 2, severe: 2, critical: 1 }
      },
      { 
        month: "Jun", 
        violations: 10, 
        equipmentsRemoved: 13,
        severity: { light: 4, severe: 4, critical: 2 }
      },
    ],
    items: [
      { 
        month: "Jan", 
        violations: 14, 
        equipmentsRemoved: 17,
        severity: { light: 6, severe: 5, critical: 3 }
      },
      { 
        month: "Feb", 
        violations: 22, 
        equipmentsRemoved: 25,
        severity: { light: 9, severe: 8, critical: 5 }
      },
      { 
        month: "Mar", 
        violations: 8, 
        equipmentsRemoved: 11,
        severity: { light: 3, severe: 3, critical: 2 }
      },
      { 
        month: "Apr", 
        violations: 12, 
        equipmentsRemoved: 15,
        severity: { light: 5, severe: 4, critical: 3 }
      },
      { 
        month: "May", 
        violations: 5, 
        equipmentsRemoved: 8,
        severity: { light: 2, severe: 2, critical: 1 }
      },
      { 
        month: "Jun", 
        violations: 10, 
        equipmentsRemoved: 13,
        severity: { light: 4, severe: 4, critical: 2 }
      },
    ],
  },
  "video_4.mp4": {
    violations: [
      { 
        month: "Jan", 
        violations: 6, 
        equipmentsRemoved: 9,
        severity: { light: 3, severe: 2, critical: 1 }
      },
      { 
        month: "Feb", 
        violations: 11, 
        equipmentsRemoved: 14,
        severity: { light: 5, severe: 4, critical: 2 }
      },
      { 
        month: "Mar", 
        violations: 4, 
        equipmentsRemoved: 7,
        severity: { light: 2, severe: 1, critical: 1 }
      },
      { 
        month: "Apr", 
        violations: 8, 
        equipmentsRemoved: 11,
        severity: { light: 3, severe: 3, critical: 2 }
      },
      { 
        month: "May", 
        violations: 3, 
        equipmentsRemoved: 6,
        severity: { light: 1, severe: 1, critical: 1 }
      },
      { 
        month: "Jun", 
        violations: 7, 
        equipmentsRemoved: 10,
        severity: { light: 3, severe: 2, critical: 2 }
      },
    ],
    items: [
      { 
        month: "Jan", 
        violations: 6, 
        equipmentsRemoved: 9,
        severity: { light: 3, severe: 2, critical: 1 }
      },
      { 
        month: "Feb", 
        violations: 11, 
        equipmentsRemoved: 14,
        severity: { light: 5, severe: 4, critical: 2 }
      },
      { 
        month: "Mar", 
        violations: 4, 
        equipmentsRemoved: 7,
        severity: { light: 2, severe: 1, critical: 1 }
      },
      { 
        month: "Apr", 
        violations: 8, 
        equipmentsRemoved: 11,
        severity: { light: 3, severe: 3, critical: 2 }
      },
      { 
        month: "May", 
        violations: 3, 
        equipmentsRemoved: 6,
        severity: { light: 1, severe: 1, critical: 1 }
      },
      { 
        month: "Jun", 
        violations: 7, 
        equipmentsRemoved: 10,
        severity: { light: 3, severe: 2, critical: 2 }
      },
    ],
  },
};