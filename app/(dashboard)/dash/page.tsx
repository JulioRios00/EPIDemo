import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DashboardCharts from '@/components/DashboardCharts'
import CustomAreaChart from '@/components/AreaChart'

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">PPE Monitoring Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>PPE Violations Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <DashboardCharts type="violations" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>PPE Items Removed</CardTitle>
          </CardHeader>
          <CardContent>
            <CustomAreaChart type="items" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}