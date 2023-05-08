"use client";

import SideBar from "../SideBar";
import { useEffect } from "react";
import { neonCursor } from "threejs-toys";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
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
    <div className="flex h-full w-full flex-col md:flex-row">
      <div className="md:w-1/5 w-full md:h-full border ">
        <SideBar />
      </div>
      <div
        id="test"
        style={{ position: "relative", height: "100%", width: "100%" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <div className="md:w-4/5 w-full h-full overflow-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
