import SideBar from "../SideBar";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full w-full">
      <div className="w-1/5 h-full border ">
        <SideBar />
      </div>
      <div className="w-4/5 h-full">{children}</div>
    </div>
  );
};

export default MainLayout;
