import { use } from "react";
import { testAPI } from "../page";
import TagWrapper from "@/components/common/TagWrapper";

export default function About() {
  const test = use(testAPI());

  return (
    <div className="w-full h-full ">
      <TagWrapper tagName="body">
        <div>About</div>
      </TagWrapper>
    </div>
  );
}
