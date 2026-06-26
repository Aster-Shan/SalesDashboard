"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ChartSwitcher, { ChartType } from "./ChartSwitcher";
import ThresholdInput from "./ThresholdInput";
import YearSelector from "./YearSelector";

type Props = {
  year: string;
  setYear: (year: string) => void;

  threshold: number;
  setThreshold: (value: number) => void;

  chartType: ChartType;
  setChartType: (type: ChartType) => void;
};

export default function FilterPanel({
  year,
  setYear,
  threshold,
  setThreshold,
  chartType,
  setChartType,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-6">
          <YearSelector year={year} setYear={setYear} />

          <ThresholdInput threshold={threshold} setThreshold={setThreshold} />

          <ChartSwitcher chartType={chartType} setChartType={setChartType} />
        </div>
      </CardContent>
    </Card>
  );
}
