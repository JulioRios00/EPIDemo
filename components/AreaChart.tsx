"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface AreaChartProps {
  type: "violations" | "items";
}

const mockData = [
  { month: "Jan", violations: 12, equipmentsRemoved: 15 },
  { month: "Feb", violations: 19, equipmentsRemoved: 22 },
  { month: "Mar", violations: 3, equipmentsRemoved: 8 },
  { month: "Apr", violations: 5, equipmentsRemoved: 12 },
  { month: "May", violations: 2, equipmentsRemoved: 4 },
  { month: "Jun", violations: 3, equipmentsRemoved: 7 },
];

export default function CustomAreaChart({ type }: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={mockData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey={type === "violations" ? "violations" : "equipmentsRemoved"}
          name={type === "violations" ? "Violations" : "Equipments Removed"}
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
