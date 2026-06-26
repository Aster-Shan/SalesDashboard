import { salesData } from "@/lib/salesData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const year = request.nextUrl.searchParams.get("year") || "2024";

  return NextResponse.json(salesData[year as keyof typeof salesData]);
}
