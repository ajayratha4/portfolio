"use client";
import { useEffect, useRef } from "react";
import { neonCursor } from "threejs-toys";

const NeonCursor = ({ children }) => {
  const el = useRef(null);
  useEffect(() => {
    if (el.current) {
      neonCursor({
        el: el.current,
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
    }
  }, []);

  return (
    <div ref={el} className=" w-full h-full " style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <div className=" p-2  w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default NeonCursor;
