import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import ComponentHeight from "@/components/common/ComponentHeight";

export const metadata = {
  title: "Ajay Ratha Portfolio",
  description:
    "Skilled Node.js and React.js Developer with 2.3 Years of Experience in Building High-Performing Web Applications",
};

export default function Home() {
  return (
    <div className="w-full h-full ">
      <ComponentHeight>
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
