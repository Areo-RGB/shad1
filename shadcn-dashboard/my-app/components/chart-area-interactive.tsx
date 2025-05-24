"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

// Updated chart data to better represent the curve shown in the reference image
const chartData = [
  { date: "2024-06-01", visits: 220, visitors: 150 },
  { date: "2024-06-03", visits: 180, visitors: 120 },
  { date: "2024-06-05", visits: 270, visitors: 190 },
  { date: "2024-06-07", visits: 380, visitors: 260 },
  { date: "2024-06-09", visits: 420, visitors: 310 },
  { date: "2024-06-11", visits: 350, visitors: 270 },
  { date: "2024-06-13", visits: 290, visitors: 220 },
  { date: "2024-06-15", visits: 420, visitors: 280 },
  { date: "2024-06-17", visits: 350, visitors: 250 },
  { date: "2024-06-19", visits: 280, visitors: 190 },
  { date: "2024-06-21", visits: 370, visitors: 280 },
  { date: "2024-06-23", visits: 480, visitors: 350 },
  { date: "2024-06-25", visits: 390, visitors: 300 },
  { date: "2024-06-27", visits: 350, visitors: 270 },
  { date: "2024-06-30", visits: 440, visitors: 330 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--primary-500))", // Primary blue color
  },
  visits: {
    label: "Page Views",
    color: "hsl(var(--secondary-700))", // Secondary slate-blue color
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("30d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Total Visitors</CardTitle>
        <CardDescription>
          Total for the last 3 months
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="3m" className="h-8 px-2.5">
              Last 3 months
            </ToggleGroupItem>
            <ToggleGroupItem value="30d" className="h-8 px-2.5">
              Last 30 days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d" className="h-8 px-2.5">
              Last 7 days
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="@[767px]/card:hidden flex w-40"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 30 days" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="3m" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={filteredData} 
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--primary-500))"
                    stopOpacity={0.5}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--primary-500))"
                    stopOpacity={0.05}
                  />
                </linearGradient>
                <linearGradient id="fillVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--secondary-700))"
                    stopOpacity={0.4}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--secondary-700))"
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid 
                vertical={false} 
                strokeDasharray="3 3" 
                stroke="rgba(255,255,255,0.1)" 
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tick={{ fill: 'hsl(var(--base-200))' }}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return `Jun ${date.getDate()}`
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="visits"
                type="monotone"
                fill="url(#fillVisits)"
                stroke="hsl(var(--secondary-700))"
                strokeWidth={2}
              />
              <Area
                dataKey="visitors"
                type="monotone"
                fill="url(#fillVisitors)"
                stroke="hsl(var(--primary-500))"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
