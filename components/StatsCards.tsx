import DashboardCard from "./DashboardCard";

type SalesData = {
  month: string;
  sales: number;
};

type Props = {
  data: SalesData[];
  threshold: number;
};

export default function StatsCards({ data, threshold }: Props) {
  // prevent crash while loading
  if (data.length === 0) {
    return (
      <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <DashboardCard title="Total Sales" value="$0" />
        <DashboardCard title="Average Sales" value="$0" />
        <DashboardCard title="Best Month" value="-" />
        <DashboardCard title="Above Threshold" value="0" />
      </section>
    );
  }

  const total = data.reduce((sum, item) => sum + item.sales, 0);

  const average = Math.round(total / data.length);

  const bestMonth = data.reduce((max, item) =>
    item.sales > max.sales ? item : max
  );

  const aboveThreshold = data.filter((item) => item.sales >= threshold).length;

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <DashboardCard title="Total Sales" value={`$${total.toLocaleString()}`} />

      <DashboardCard
        title="Average Sales"
        value={`$${average.toLocaleString()}`}
      />

      <DashboardCard
        title="Best Month"
        value={bestMonth.month}
        subtitle={`$${bestMonth.sales.toLocaleString()}`}
      />

      <DashboardCard title="Above Threshold" value={String(aboveThreshold)} />
    </section>
  );
}
