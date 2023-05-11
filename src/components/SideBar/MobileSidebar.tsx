"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "../common/Button";
import SideBar from ".";

const MobileSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setShowSidebar(false);
  }, [pathName]);

  return (
    <div
      className={`md:hidden w-full ${
        showSidebar ? "h-auto flex flex-col" : "h-[55px]"
      } `}
      style={{
        background:
          "radial-gradient(circle, rgba(63,94,251,0.5) 0%, rgba(10,25,41,0.5) 100%)",
      }}
    >
      <div className=" h-full w-full flex items-center p-2">
        <Button
          style={{ padding: "0px" }}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? (
            <svg
              height={40}
              width={40}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Menu / Close_MD">
                  <path
                    id="Vector"
                    d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              height={40}
              width={40}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          )}
        </Button>
      </div>
      {showSidebar && <SideBar />}
    </div>
  );
};

export default MobileSidebar;
