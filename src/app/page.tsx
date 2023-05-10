import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import ComponentHeight from "@/components/common/ComponentHeight";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <ComponentHeight className="h-full">
        <Landing />
      </ComponentHeight>

      <ComponentHeight showBackgroundColor={false}>
        <About />
      </ComponentHeight>
      <ComponentHeight>
        <Skills />
      </ComponentHeight>
      <ComponentHeight showBackgroundColor={false}>
        <Experience />
      </ComponentHeight>
      <ComponentHeight>
        <Contact />
      </ComponentHeight>
    </div>
  );
}
