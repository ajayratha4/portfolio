import { NextResponse } from "next/server";
import { sendEmail } from "./sendEmail";

// export async function GET() {
//   const data = { id: 2 };

//   return NextResponse.json({ data });
// }

export async function POST(req: Request) {
  const body = await req.json();
  const data = await sendEmail({
    subject: `Portfolio Ajay Ratha ${body.subject}`,
    text: `Hello from ${body.email} ==> ${body.message}`,
  });
  return NextResponse.json({ data });
}
