import { NextResponse } from "next/server";

export async function GET() {
  const data = { id: 2 };

  return NextResponse.json({ data });
}

export async function POST() {
  const data = { id: 1 };

  return NextResponse.json({ data });
}
