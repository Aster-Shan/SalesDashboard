"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  year: string;
  setYear: (year: string) => void;
};

export default function YearSelector({ year, setYear }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Sales year</label>

      <Select value={year} onValueChange={setYear}>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="2024">2024</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
          <SelectItem value="2022">2022</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
