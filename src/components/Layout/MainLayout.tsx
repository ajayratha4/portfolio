import SideBar from "../SideBar";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full w-full sm:flex-col md:flex-row">
      <div className="md:w-1/5 sm:w-full sm:max-h-2/4 md:h-full border ">
        <SideBar />
      </div>
      <div className="md:w-4/5 sm:w-full h-full">{children}</div>
    </div>
  );
};

export default MainLayout;