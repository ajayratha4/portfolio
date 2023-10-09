import Contact from "@/components/Contact";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export const metadata = {
  title: "Contact | Ajay Ratha Portfolio",
  description:
    "Skilled Node.js and React.js Developer with 3+ Years of Experience in Building High-Performing Web Applications",
};

export default function ContactPage() {
  return (
    <div className="w-full h-full ">
      <ComponentHeight style={{ height: "100%" }}>
        <TagWrapper tagName="body">
          <Contact />
        </TagWrapper>
      </ComponentHeight>
    </div>
  );
}
