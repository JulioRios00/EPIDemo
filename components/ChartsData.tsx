export interface ViolationData {
  month: string;
  violations: number;
  equipmentsRemoved: number;
  severity: {
    light: number;
    severe: number;
    critical: number;
  };
}

export interface ItemData {
  month: string;
  helmet: number;
  vest: number;
  gloves: number;
  boots: number;
}

export interface ChartData {
  violations: ViolationData[];
  items: ItemData[];
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
        helmet: 5,
        vest: 6,
        gloves: 4,
		boots: 3
      },
      { 
        month: "Feb",
        helmet: 8,
        vest: 7,
        gloves: 7,
		boots: 3
      },
      { 
        month: "Mar",
        helmet: 2,
        vest: 3,
        gloves: 3,
		boots: 3
      },
      { 
        month: "Apr",
        helmet: 4,
        vest: 5,
        gloves: 3,
		boots: 3
      },
      { 
        month: "May",
        helmet: 1,
        vest: 2,
        gloves: 1,
		boots: 1
      },
      { 
        month: "Jun",
        helmet: 2,
        vest: 3,
        gloves: 2,
		boots: 2
      }
    ]
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
        violations: 12, 
        equipmentsRemoved: 15,
        severity: { light: 5, severe: 4, critical: 3 }
      },
      { 
        month: "Mar", 
        violations: 6, 
        equipmentsRemoved: 8,
        severity: { light: 2, severe: 2, critical: 2 }
      },
      { 
        month: "Apr", 
        violations: 9, 
        equipmentsRemoved: 11,
        severity: { light: 4, severe: 3, critical: 2 }
      },
      { 
        month: "May", 
        violations: 7, 
        equipmentsRemoved: 9,
        severity: { light: 3, severe: 2, critical: 2 }
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
        helmet: 3,
        vest: 4,
        gloves: 3,
		boots: 2
      },
      { 
        month: "Feb",
        helmet: 6,
        vest: 5,
        gloves: 7,
		boots: 2
      },
      { 
        month: "Mar",
        helmet: 2,
        vest: 4,
        gloves: 3,
		boots: 2
      },
      { 
        month: "Apr",
        helmet: 5,
        vest: 3,
        gloves: 3,
		boots: 2
      },
      { 
        month: "May",
        helmet: 3,
        vest: 5,
        gloves: 3,
		boots: 2
      },
      { 
        month: "Jun",
        helmet: 4,
        vest: 6,
        gloves: 4,
		boots: 2
      }
    ]
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
        violations: 18, 
        equipmentsRemoved: 22,
        severity: { light: 8, severe: 6, critical: 4 }
      },
      { 
        month: "Mar", 
        violations: 10, 
        equipmentsRemoved: 13,
        severity: { light: 4, severe: 4, critical: 2 }
      },
      { 
        month: "Apr", 
        violations: 16, 
        equipmentsRemoved: 19,
        severity: { light: 7, severe: 6, critical: 3 }
      },
      { 
        month: "May", 
        violations: 12, 
        equipmentsRemoved: 15,
        severity: { light: 5, severe: 4, critical: 3 }
      },
      { 
        month: "Jun", 
        violations: 15, 
        equipmentsRemoved: 18,
        severity: { light: 6, severe: 5, critical: 4 }
      },
    ],
    items: [
      { 
        month: "Jan",
        helmet: 6,
        vest: 7,
        gloves: 4,
		boots: 2
      },
      { 
        month: "Feb",
        helmet: 9,
        vest: 8,
        gloves: 8, 
		boots: 2
      },
      { 
        month: "Mar",
        helmet: 3,
        vest: 5,
        gloves: 3, 
		boots: 2
      },
      { 
        month: "Apr",
        helmet: 7,
        vest: 5,
        gloves: 3,
		boots: 2
      },
      { 
        month: "May",
        helmet: 2,
        vest: 4,
        gloves: 2,
		boots: 2
      },
      { 
        month: "Jun",
        helmet: 5,
        vest: 4,
        gloves: 4,
		boots: 2
      }
    ]
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
        violations: 9, 
        equipmentsRemoved: 12,
        severity: { light: 4, severe: 3, critical: 2 }
      },
      { 
        month: "Mar", 
        violations: 4, 
        equipmentsRemoved: 7,
        severity: { light: 2, severe: 1, critical: 1 }
      },
      { 
        month: "Apr", 
        violations: 7, 
        equipmentsRemoved: 10,
        severity: { light: 3, severe: 3, critical: 1 }
      },
      { 
        month: "May", 
        violations: 5, 
        equipmentsRemoved: 8,
        severity: { light: 2, severe: 2, critical: 1 }
      },
      { 
        month: "Jun", 
        violations: 8, 
        equipmentsRemoved: 11,
        severity: { light: 4, severe: 3, critical: 1 }
      },
    ],
    items: [
      { 
        month: "Jan",
        helmet: 2,
        vest: 4,
        gloves: 3,
		boots: 2
      },
      { 
        month: "Feb",
        helmet: 5,
        vest: 5,
        gloves: 4,
		boots: 2
      },
      { 
        month: "Mar",
        helmet: 1,
        vest: 3,
        gloves: 3,
		boots: 2
      },
      { 
        month: "Apr",
        helmet: 4,
        vest: 4,
        gloves: 3,
		boots: 2
      },
      { 
        month: "May",
        helmet: 2,
        vest: 2,
        gloves: 2,
		boots: 2
      },
      { 
        month: "Jun",
        helmet: 3,
        vest: 4,
        gloves: 3,
		boots: 2
      }
    ]
  }
}