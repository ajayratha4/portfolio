import About from "@/components/About";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export const metadata = {
  title: "About | Ajay Ratha Portfolio",
  description: "Ajay Ratha Portfolio",
};

export default function AboutPage() {
  return (
    <div className="w-full h-full ">
      <ComponentHeight style={{ height: "100%" }}>
        <TagWrapper tagName="body">
          <About showButton />
        </TagWrapper>
      </ComponentHeight>
    </div>
  );
}
