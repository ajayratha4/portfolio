import Link from "next/link";

const paths = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Skils", path: "/skils" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/test" },
];

const SideBar = () => {
  return (
    <div className=" h-full w-full  dark:bg-gray-900 dark:border-gray-700 flex justify-center items-center">
      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap ">
        <ul className="space-y-5">
          {paths.map((pathItem) => (
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-white"
                href={pathItem.path}
              >
                {pathItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
