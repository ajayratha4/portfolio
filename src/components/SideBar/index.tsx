import Link from "next/link";
import Button from "../common/Button";
import TagWrapper from "../common/TagWrapper";

const paths = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skill", path: "/skill" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

const SideBar = () => {
  return (
    <div className=" h-full w-full flex justify-center items-center">
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
          </ul>{" "}
        </TagWrapper>
      </nav>
    </div>
  );
};

export default SideBar;
