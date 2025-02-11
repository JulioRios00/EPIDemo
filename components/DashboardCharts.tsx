"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

interface DashboardChartsProps {
  type: "violations" | "items";
  data: {
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

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#66B5FF",
  "#66E0C2",
  "#FFD966",
  "#FFA366",
  "#B3A2FF",
  "#005FAD",
  "#00A67E",
  "#E0A800",
  "#FF5722",
  "#7A57D1",
];

export default function DashboardCharts({ data }: DashboardChartsProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 25,
        }}
      >
        <CartesianGrid
          stroke="#e5e5e5"
          strokeOpacity={0.1}
        />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip cursor={{ fill: "transparent" }}  />
        <Legend />
        <Bar
          dataKey="severity.light"
          name="Infração Leve"
          stroke={COLORS[0]}
          fill={COLORS[0]}
          stackId="severity"
        />
        <Bar
          dataKey="severity.severe"
          name="Infração Grave"
          stroke={COLORS[1]}
          fill={COLORS[1]}
          stackId="severity"
        />
        <Bar
          dataKey="severity.critical"
          name="Infração Gravíssima"
          stroke={COLORS[2]}
          fill={COLORS[2]}
          stackId="severity"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}