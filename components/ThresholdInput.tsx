"use client";

import { Input } from "@/components/ui/input";

type Props = {
  threshold: number;
  setThreshold: (value: number) => void;
};

export default function ThresholdInput({ threshold, setThreshold }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Sales threshold ($)</label>

      <Input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
      />
    </div>
  );
}
