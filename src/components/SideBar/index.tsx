import Button from "../common/Button";
import TagWrapper from "../common/TagWrapper";
import { GithubIcon, LinkedinIcon, ResumeIcon } from "../icons";

export const paths = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skill", path: "/skill" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

const SideBar = () => {
  return (
    <div className=" h-full w-full flex flex-col justify-center items-center">
      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap ">
        <TagWrapper
          tagName="MenuList"
          importantStyle={{ margin: 0, width: "100%" }}
        >
          <ul className="space-y-5">
            {paths.map((pathItem) => (
              <li key={pathItem.path}>
                <Button href={pathItem.path} className="w-full">
                  {pathItem.label}
                </Button>
              </li>
            ))}
          </ul>
        </TagWrapper>
      </nav>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button href="https://github.com/ajayratha4" style={{ padding: "4px" }}>
          <GithubIcon height={30} width={30} />
        </Button>
        <Button
          href="https://drive.google.com/file/d/1hIufDQ_MzL0enOnr64Z3G5K4ZG8LqReP/view?usp=sharing"
          style={{ padding: "4px" }}
        >
          <ResumeIcon height={30} width={30} />
        </Button>
        <Button
          href="https://www.linkedin.com/in/ajayratha4/"
          style={{ padding: "4px" }}
        >
          <LinkedinIcon height={30} width={30} />
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
