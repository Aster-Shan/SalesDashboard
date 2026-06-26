"use client";

import { Button } from "@/components/ui/button";

export type ChartType = "bar" | "line" | "pie";

type Props = {
  chartType: ChartType;
  setChartType: (type: ChartType) => void;
};

export default function ChartSwitcher({ chartType, setChartType }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Chart Type</label>

      <div className="flex gap-2">
        <Button
          variant={chartType === "bar" ? "default" : "outline"}
          onClick={() => setChartType("bar")}
        >
          Bar
        </Button>

        <Button
          variant={chartType === "line" ? "default" : "outline"}
          onClick={() => setChartType("line")}
        >
          Line
        </Button>

        <Button
          variant={chartType === "pie" ? "default" : "outline"}
          onClick={() => setChartType("pie")}
        >
          Pie
        </Button>
      </div>
    </div>
  );
}
