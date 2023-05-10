import { rampartOne } from "@/fonts/fonts";
import TagWrapper from "./TagWrapper";
import { PropsWithChildren } from "react";

const HeaderTag = ({ children }: PropsWithChildren) => {
  return (
    <TagWrapper tagName="h1">
      <div
        className={`flex flex-col font-bold text-6xl md:text-7xl lg:text-8xl ${rampartOne.className}`}
      >
        {children}
      </div>
    </TagWrapper>
  );
};

export default HeaderTag;
