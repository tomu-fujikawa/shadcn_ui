"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart"

const chartData = [
{ month: "January", motivation: 28 },
{ month: "February", motivation: 40 },
{ month: "March", motivation: 53 },
{ month: "April", motivation: 77 },
{ month: "May", motivation: 154 },
{ month: "June", motivation: 327 },
]

const chartConfig = {
    motivation: {
    label: "Motivation",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function CustomBarChart() {
  return (
    <Card>
    <CardHeader>
      <CardTitle>やる気</CardTitle>
      <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="motivation"
            type="natural"
            stroke="var(--color-motivation)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col items-start gap-2 text-sm">
      <div className="flex gap-2 font-medium leading-none">
        この調子で行こう <TrendingUp className="h-4 w-4" />
      </div>
    </CardFooter>
  </Card>
  )
}
export default CustomBarChart;