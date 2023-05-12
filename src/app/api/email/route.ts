import { NextResponse } from "next/server";
import { sendEmail } from "./sendEmail";

// export async function GET() {
//   const data = { id: 2 };

//   return NextResponse.json({ data });
// }

export async function POST() {
  const data = { id: 1 };
  sendEmail({
    to: "ajay@example.com",
    subject: "Welcome to NextAPI",
    html: "hello",
  });
  return NextResponse.json({ data });
}
