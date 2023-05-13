import { NextResponse } from "next/server";
import { sendEmail } from "./sendEmail";

// export async function GET() {
//   const data = { id: 2 };

//   return NextResponse.json({ data });
// }

export async function POST(req: Request) {
  const body = await req.json();
  const data = await sendEmail({
    subject: `Portfolio Ajay Ratha subject=> ${body.subject}`,
    text: `Name =>${body.name}|| from  Email => ${body.email}|| Message ==> ${body.message} ||`,
  });
  return NextResponse.json({ data });
}
