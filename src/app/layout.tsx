import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import "./globals.css";
import { roboto } from "@/fonts/fonts";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>
        <div className="dark:bg dark:text-white flex flex-col h-full ">
          <MainLayout> {children}</MainLayout>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
