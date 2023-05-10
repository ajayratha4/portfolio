"use client";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  showBackgroundColor?: boolean;
}

const ComponentHeight = ({ children, showBackgroundColor = true }: Props) => {
  function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ",0.5 " + ")";
  }

  const backgroundColor = showBackgroundColor
    ? { backgroundColor: getRandomRgb() }
    : {};

  return (
    <div
      style={{
        height: "100%",
        padding: "8px",
        ...backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default ComponentHeight;
