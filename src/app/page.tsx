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
      <ComponentHeight backgroundColor="radial-gradient(circle, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0.5) 0%, rgba(0,212,255,0.5) 100%)">
        <Contact />
      </ComponentHeight>
    </div>
  );
}
