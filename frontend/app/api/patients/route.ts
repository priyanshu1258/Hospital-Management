import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ patients: [] });
}

export async function POST() {
  return NextResponse.json({ status: "ok" });
}
