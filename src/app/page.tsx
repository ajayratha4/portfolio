import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import ComponentHeight from "@/components/common/ComponentHeight";
import TagWrapper from "@/components/common/TagWrapper";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      {/* <TagWrapper tagName="body"> */}
      <Landing />
      <About />
      <ComponentHeight>
        <Skills />
      </ComponentHeight>
      <Experience />
      <ComponentHeight>
        <Contact />
      </ComponentHeight>
      {/* </TagWrapper> */}
    </div>
  );
}
