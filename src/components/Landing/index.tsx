import TagWrapper from "../common/TagWrapper";
import Button from "../common/Button";
import {
  AWSIcon,
  ExpressIcon,
  JavascriptIcon,
  MongodbIcon,
  MysqlIcon,
  Nodeicon,
  ReactIcon,
  TypescriptIcon,
} from "../icons";
import { rampartOne } from "@/fonts/fonts";

const Landing = () => {
  return (
    <TagWrapper tagName="body">
      <div className="w-full h-full flex flex-col gap-6 ">
        <TagWrapper tagName="h1">
          <div
            className={`flex flex-col gap-3 font-bold text-6xl md:text-7xl lg:text-8xl ${rampartOne.className}`}
          >
            <span>Hi,</span>
            <span>I am Ajay Ratha,</span>
            <span>Full Stack Developer</span>
          </div>
        </TagWrapper>
        <div className="flex justify-between flex-wrap">
          <div className="w-full md:w-[48%] ">
            <TagWrapper tagName="p" style={"mx-3"}>
              <span className="text-2xl">
                Front End Developer & Back End Developer
              </span>
            </TagWrapper>
            <TagWrapper tagName="button" style={"my-3"}>
              <Button href="/contact" className="w-3/4">
                Contact me!
              </Button>
            </TagWrapper>
          </div>
          <div className="w-full md:w-[48%] ">
            <TagWrapper flexCol={false} tagName="h5" style={"mx-3"}>
              <span className="font-bold">Core Competencies</span>
            </TagWrapper>
            <TagWrapper tagName="icons" style={"m-3 "}>
              <div className="flex gap-2 flex-wrap">
                <JavascriptIcon />
                <ReactIcon />
                <Nodeicon />
                <ExpressIcon />
                <TypescriptIcon />
                <MongodbIcon />
                <MysqlIcon />
                <AWSIcon />
              </div>
            </TagWrapper>
          </div>
        </div>
        {/* <div className="flex justify-between mt-2">
        <div style={{ writingMode: "vertical-rl" }}>Scroll Down</div>
        <div style={{ writingMode: "vertical-rl" }}>Scroll Down</div>
      </div> */}
      </div>
    </TagWrapper>
  );
};

export default Landing;
