import Experience from "@/components/Experience";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export const metadata = {
  title: "Experience | Ajay Ratha Portfolio",
  description:
    "Skilled Node.js and React.js Developer with 3+ Years of Experience in Building High-Performing Web Applications",
};

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
