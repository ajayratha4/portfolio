import { use } from "react";
import { testAPI } from "../page";
import TagWrapper from "@/components/common/TagWrapper";
import Landing from "@/components/Landing";

export default function Experience() {
  const test = use(testAPI());

  return (
    <div className="w-full h-full ">
      <TagWrapper tagName="body">
        <div>Experience</div>
      </TagWrapper>
    </div>
  );
}
