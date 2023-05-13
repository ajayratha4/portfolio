import nodemailer from "nodemailer";

type EmailPayload = {
  subject?: string;
  text?: string;
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || "user",
      pass: process.env.SMTP_PASSWORD || "password",
    },
  });

  const options = {
    from: process.env.SMTP_FROM_EMAIL,
    to: "ajayratha97@gmail.com",
    subject: data.subject,
    text: data.text,
  };

  return await transporter.sendMail(options);
};
