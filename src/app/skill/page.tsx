import Skills from "@/components/Skills";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export default function Skill() {
  return (
    <div className="w-full h-full ">
      <ComponentHeight>
        <TagWrapper tagName="body">
          <Skills />
        </TagWrapper>
      </ComponentHeight>
    </div>
  );
}
