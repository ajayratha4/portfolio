"use client";
import { useEffect, useRef } from "react";
import { neonCursor } from "threejs-toys";

const NeonCursor = ({ children }) => {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      neonCursor({
        el: el.current,
        shaderPoints: 10,
        curvePoints: 10,
        curveLerp: 0.5,
        radius1: 1,
        radius2: 10,
        velocityTreshold: 1,
        sleepRadiusX: 50,
        sleepRadiusY: 50,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025,
      });
    }
  }, []);

  return (
    <div
      ref={el}
      className=" w-full h-full "
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default NeonCursor;
