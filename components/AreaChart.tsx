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
  data: any[];
}

export default function CustomAreaChart({ data }: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 25,
        }}
      >
        <CartesianGrid stroke="#e5e5e5" strokeOpacity={0.1}/>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="equipmentsRemoved"
          name="Equipamentos removidos"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
