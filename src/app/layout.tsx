"use client";

import MainLayout from "@/components/Layout/MainLayout";
import "./globals.css";
import { useEffect } from "react";
import { neonCursor } from "threejs-toys";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    neonCursor({
      el: document.getElementById("test"),
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025,
    });
  }, []);

  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>
        <div id="test" style={{ position: "relative", height: "100%" }}>
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <div className="flex flex-col h-full ">
              <MainLayout> {children}</MainLayout>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
