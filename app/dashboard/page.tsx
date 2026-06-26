"use client";

import { useEffect, useState } from "react";

import FilterPanel from "@/components/FilterPanel";
import SalesChart from "@/components/SalesChart";
import StatsCards from "@/components/StatsCards";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { ChartType } from "@/components/ChartSwitcher";

type SalesData = {
  month: string;
  sales: number;
};

export default function DashboardPage() {
  const [year, setYear] = useState("2024");

  const [chartType, setChartType] = useState<ChartType>("bar");

  const [threshold, setThreshold] = useState(50000);

  const [data, setData] = useState<SalesData[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const response = await fetch(`/api/sales?year=${year}`);

      const result = await response.json();

      setData(result);
      setLoading(false);
    }

    fetchData();
  }, [year]);

  return (
    <main className="mx-auto max-w-7xl p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Sales Dashboard</h1>

        <p className="text-gray-500 mt-2">
          Sales analytics for 2022, 2023 and 2024
        </p>
      </header>

      <FilterPanel
        year={year}
        setYear={setYear}
        threshold={threshold}
        setThreshold={setThreshold}
        chartType={chartType}
        setChartType={setChartType}
      />

      {!loading && <StatsCards data={data} threshold={threshold} />}

      <Card>
        <CardHeader>
          <CardTitle>Monthly Sales Chart</CardTitle>
        </CardHeader>

        <CardContent>
          {loading ? (
            <p>Loading chart...</p>
          ) : (
            <SalesChart data={data} chartType={chartType} />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
