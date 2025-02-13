import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ItemData } from "./ChartsData";

interface BarChartProps {
  type: "items";
  data: ItemData[];
}

const CustomBarChart = ({ data }: BarChartProps) => {
  const transformedData = [
    {
      name: "Capacetes",
      helmet: data.reduce((acc, curr) => acc + curr.helmet, 0),
    },
    { name: "Coletes", vest: data.reduce((acc, curr) => acc + curr.vest, 0) },
    { name: "Luvas", gloves: data.reduce((acc, curr) => acc + curr.gloves, 0) },
	{ name: "Botas", gloves: data.reduce((acc, curr) => acc + curr.gloves, 0) },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={transformedData}
        margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="2 3"
          stroke="#e5e5e5"
          strokeOpacity={0.1}
        />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip cursor={{ fill: "transparent" }}  />
        <Bar dataKey="helmet" name="Capacetes" fill="#0ea5e9" />
        <Bar dataKey="vest" name="Coletes" fill="#22c55e" />
        <Bar dataKey="gloves" name="Luvas" fill="#f59e0b" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default CustomBarChart;
