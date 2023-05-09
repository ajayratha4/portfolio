import Link from "next/link";
import Button from "../common/Button";

const paths = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Skill", path: "/skill" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const SideBar = () => {
  return (
    <div className=" h-full w-full flex justify-center items-center">
      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap ">
        <ul className="space-y-5">
          {paths.map((pathItem) => (
            <li key={pathItem.path}>
              <Button href={pathItem.path} className="w-full">
                {pathItem.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
