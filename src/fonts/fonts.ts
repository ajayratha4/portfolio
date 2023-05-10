import { Rancho, Caveat, Satisfy, Roboto, Lobster } from "next/font/google";

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const rancho = Rancho({ subsets: ["latin"], weight: "400" });

export const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
});
export const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: "400",
});

export const lobster = Lobster({
  subsets: ["latin"],
  variable: "--font-lobster",
  weight: "400",
});
