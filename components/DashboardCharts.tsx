'use client'

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts'

interface DashboardChartsProps {
  type: 'violations' | 'items'
}

const COLORS = [
	"#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8",
	"#66B5FF", "#66E0C2", "#FFD966", "#FFA366", "#B3A2FF",
	"#005FAD", "#00A67E", "#E0A800", "#FF5722", "#7A57D1"
  ];

const mockData = [
  { month: 'Jan', violations: 12, equipmentsRemoved: 15 },
  { month: 'Feb', violations: 19, equipmentsRemoved: 22 },
  { month: 'Mar', violations: 3, equipmentsRemoved: 8 },
  { month: 'Apr', violations: 5, equipmentsRemoved: 12 },
  { month: 'May', violations: 2, equipmentsRemoved: 4 },
  { month: 'Jun', violations: 3, equipmentsRemoved: 7 },
]

export default function DashboardCharts({ type }: DashboardChartsProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={mockData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          type="monotone"
          dataKey={type === 'violations' ? 'violations' : 'equipmentsRemoved'}
          name={type === 'violations' ? 'Violations' : 'Equipments Removed'}
          stroke={COLORS[1]}
		  fill={COLORS[1]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
