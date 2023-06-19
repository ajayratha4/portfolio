import Contact from "@/components/Contact";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export const metadata = {
  title: "Contact | Ajay Ratha Portfolio",
  description: "Ajay Ratha Portfolio",
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
