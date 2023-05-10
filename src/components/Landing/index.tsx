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
import HeaderTag from "../common/HeaderTag";

const Landing = () => {
  return (
    <TagWrapper tagName="body">
      <div className="w-full h-full flex flex-col gap-3 ">
        <HeaderTag>
          <span>Hi,</span>
          <span>I am Ajay Ratha,</span>
          <span>Full Stack Developer</span>
        </HeaderTag>
        {/* Front End Developer & Back End Developer */}
        <div className="flex w-full justify-between flex-wrap">
          <div className="w-full  ">
            <TagWrapper flexCol={true} tagName="h5" style={"mx-3"}>
              <span className="text-lg">Core Competencies</span>
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

          <TagWrapper tagName="button" style={"my-3"}>
            <Button href="/contact" className="w-full">
              Contact me!
            </Button>
          </TagWrapper>
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
