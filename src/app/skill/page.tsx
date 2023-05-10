import Skills from "@/components/Skills";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export default function Skill() {
  return (
    <div className="w-full h-full ">
      <ComponentHeight style={{ height: "100%" }}>
        <TagWrapper tagName="body">
          <Skills />
        </TagWrapper>
      </ComponentHeight>
    </div>
  );
}
