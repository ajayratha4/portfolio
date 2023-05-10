import Contact from "@/components/Contact";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export default function ContactPage() {
  return (
    <div className="w-full h-full ">
      <ComponentHeight
        style={{ height: "100%" }}
        backgroundColor="radial-gradient(circle, rgba(23,10,41,0.5 ) 23%, rgba(10,25,41,0.5 ) 87%, rgba(10,25,41,0.5 ) 100%)"
      >
        <TagWrapper tagName="body">
          <Contact />
        </TagWrapper>
      </ComponentHeight>
    </div>
  );
}
