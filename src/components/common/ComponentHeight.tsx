"use client";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  showBackgroundColor?: boolean;
  style?: React.CSSProperties;
  className?: string;
  backgroundColor?: string;
}

const ComponentHeight = ({
  children,
  showBackgroundColor = true,
  style = {},
  className = "",
  backgroundColor,
}: Props) => {
  function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ",0.5 " + ")";
  }

  const cbackgroundColor = showBackgroundColor
    ? { background: backgroundColor ? backgroundColor : getRandomRgb() }
    : {};

  return (
    <div
      className={className}
      style={{
        padding: "8px",
        overflow: "auto",
        ...cbackgroundColor,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ComponentHeight;
