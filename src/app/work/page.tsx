import Experience from "@/components/Experience";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export default function ExperiencePage() {
  return (
    <div className="w-full h-full ">
      <ComponentHeight style={{ height: "100%" }}>
        <TagWrapper tagName="body">
          <Experience />
        </TagWrapper>
      </ComponentHeight>
    </div>
  );
}
