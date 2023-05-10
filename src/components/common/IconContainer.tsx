import React from "react";
import { lobster, shortStack } from "@/fonts/fonts";

type Props = {
  icon: any;
  lable: string;
  size?: number;
  iconSize?: number;
};

const IconContainer = ({ size = 100, icon, iconSize = 70, lable }: Props) => {
  const Icon = icon;
  return (
    <div
      className="flex justify-center items-center rounded"
      style={{
        height: size,
        width: size,
        background: "rgb(5,10,46)",
      }}
    >
      <div className="flex flex-col justify-center items-center rounded">
        <Icon width={iconSize} height={iconSize} />
        <span className={`dark:text-gray-100 ${shortStack.className}`}>
          {lable}
        </span>
      </div>
    </div>
  );
};

export default IconContainer;
