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
    <div className=" h-full w-full flex flex-col justify-center items-center gap-2">
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
      <div>
        <TagWrapper tagName="a" flexCol={false}>
          Mob: <a href="tel:9938012733">9938012733</a>
        </TagWrapper>
        <TagWrapper tagName="a" flexCol={false}>
          Email:
          <a href="mailto: ajayratha97@gmail.com">ajayratha97@gmail.com</a>
        </TagWrapper>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          target="_blank"
          href="https://github.com/ajayratha4"
          style={{ padding: "4px" }}
        >
          <GithubIcon height={30} width={30} />
        </Button>

        <Button
          target="_blank"
          href={"/assets/Reasume-Ajay-Ratha-Full-stack-developer.pdf"}
          style={{ padding: "4px" }}
        >
          <ResumeIcon height={30} width={30} />
        </Button>
        <Button
          target="_blank"
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
