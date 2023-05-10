"use client";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

const ComponentHeight = ({ children }: PropsWithChildren) => {
  function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ",0.5 " + ")";
  }

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: getRandomRgb(),
        padding: "8px",
      }}
    >
      {children}
    </div>
  );
};

export default ComponentHeight;
