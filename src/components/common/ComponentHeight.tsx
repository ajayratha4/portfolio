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
  backgroundColor = "radial-gradient(circle, rgba(63,94,251,0.5) 0%, rgba(10,25,41,0.5) 100%)",
}: Props) => {
  const cbackgroundColor = showBackgroundColor
    ? { background: backgroundColor }
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
