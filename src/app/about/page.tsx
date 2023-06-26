import About from "@/components/About";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export const metadata = {
  title: "About | Ajay Ratha Portfolio",
  description:
    "Skilled Node.js and React.js Developer with 2.3 Years of Experience in Building High-Performing Web Applications",
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
