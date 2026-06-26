import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function DashboardCard({ title, value, subtitle }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-500 text-base">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-4xl font-bold">{value}</p>

        {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
      </CardContent>
    </Card>
  );
}
