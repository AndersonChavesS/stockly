"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { DayTotalRevenue } from "@/app/_data-access/dashboard/get-dashboard";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  totalRevenue: {
    label: "Receita",
  },
} satisfies ChartConfig;

interface RevenueChartProps {
  data: DayTotalRevenue[];
}

const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="h-[290px] w-full">
      <BarChart accessibilityLayer data={data}>
        <YAxis
          dataKey="totalRevenue"
          tickLine={false}
          axisLine={false}
          tickMargin={5}
        />
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" tickLine={false} tickMargin={5} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="totalRevenue" radius={4} fill="#0000aa"/>
      </BarChart>
    </ChartContainer>
  );
};

export default RevenueChart;
