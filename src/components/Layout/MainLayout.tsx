import SideBar from "../SideBar";
import MobileSidebar from "../SideBar/MobileSidebar";
import NeonCursor from "../common/NeonCursor";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className=" h-full w-full overflow-x-hidden">
      <NeonCursor>
        <div
          className="flex h-full w-full flex-col md:flex-row"
          style={{ backgroundColor: "rgb(10, 25, 41,0.5)" }}
        >
          <div className=" hidden md:flex  md:w-1/5 w-full md:h-full border  ">
            <SideBar />
          </div>

          <MobileSidebar />

          <div className="md:w-4/5 w-full h-full overflow-auto ">
            {children}
          </div>
        </div>
      </NeonCursor>
    </div>
  );
};

export default MainLayout;
