/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface AlertsChartProps {
  type: "byType" | "byCamera";
  data: any;
  height?: number;
}

const ALERT_COLORS = {
  no_ppe: "#ef4444",
  low_confidence: "#eab308",
  unauthorized: "#f97316"
};

const COLORS = ["#4ade80", "#2dd4bf", "#60a5fa", "#f472b6"];

export function AlertsChart({ type, data }: AlertsChartProps) {
  if (type === "byType") {
    return (
      <div className="h-[300px] bg-background">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            <XAxis dataKey="date" stroke="currentColor" />
            <YAxis stroke="currentColor" />
            <Tooltip cursor={{ fill: "transparent" }}/>
            <Legend />
            <Bar dataKey="no_ppe" fill={ALERT_COLORS.no_ppe} name="Sem EPI" />
            <Bar dataKey="low_confidence" fill={ALERT_COLORS.low_confidence} name="Baixa Confiança" />
            <Bar dataKey="unauthorized" fill={ALERT_COLORS.unauthorized} name="Não Autorizado" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-[300px] bg-background">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {data?.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
