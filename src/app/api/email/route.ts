import { NextResponse } from "next/server";
import { sendEmail } from "./sendEmail";

// export async function GET() {
//   const data = { id: 2 };

//   return NextResponse.json({ data });
// }

export async function POST(req: Request) {
  const data = await sendEmail({
    subject: `Portfolio Ajay Ratha ${"a"}`,
    text: " HTML_TEMPLATE()",
  });
  return NextResponse.json({ data: "hello" });
}
