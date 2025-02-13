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

interface AreaChartProps {
  type: "violations" | "items";
  data: ViolationData[] | ItemData[];
}

export default function CustomAreaChart({ data }: AreaChartProps) {
  return (
    <div className="w-full h-full min-h-[400px]">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 15,
          }}
          className="bg-background"
        >
          <defs>
            <linearGradient id="colorHelmet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#281fe0" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#281fe0" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorVest" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorGloves" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e5e5"
            strokeOpacity={0.1}
          />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="helmet"
            name="Capacete"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorHelmet)"
          />
          <Area
            type="monotone"
            dataKey="vest"
            name="Colete"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorVest)"
          />
          <Area
            type="monotone"
            dataKey="gloves"
            name="Luvas"
            stroke="#ffc658"
            fillOpacity={1}
            fill="url(#colorGloves)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
