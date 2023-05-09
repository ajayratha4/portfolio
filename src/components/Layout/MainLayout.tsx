import SideBar from "../SideBar";
import NeonCursor from "../common/NeonCursor";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <NeonCursor>
      <div className="flex h-full w-full flex-col md:flex-row">
        <div className="md:w-1/5 w-full md:h-full border ">
          <SideBar />
        </div>
        <div className="md:w-4/5 w-full h-full overflow-auto p-2">
          {children}
        </div>
      </div>
    </NeonCursor>
  );
};

export default MainLayout;
