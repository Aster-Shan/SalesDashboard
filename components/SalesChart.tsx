"use client";

import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { ChartType } from "./ChartSwitcher";

type SalesData = {
  month: string;
  sales: number;
};

type Props = {
  data: SalesData[];
  chartType: ChartType;
};

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#ca8a04",
  "#9333ea",
  "#0891b2",
];

export default function SalesChart({ data, chartType }: Props) {
  return (
    <div className="h-[420px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === "bar" ? (
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" />
          </BarChart>
        ) : chartType === "line" ? (
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" />
          </LineChart>
        ) : (
          <PieChart>
            <Pie
              data={data}
              dataKey="sales"
              nameKey="month"
              outerRadius={140}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
