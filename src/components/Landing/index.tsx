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
import HeaderTag from "../common/HeaderTag";
import ScrollDown from "../common/ScrollDown";

const Landing = () => {
  return (
    <div id="landing" className="w-full h-full relative ">
      <TagWrapper tagName="body">
        <div className="w-full h-full flex flex-col gap-3 ">
          <HeaderTag>
            <span>Hi,</span>
            <span>I am Ajay Ratha,</span>
            <span>Full Stack Developer</span>
          </HeaderTag>
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
            <div className="flex">
              <TagWrapper tagName="button" style={"my-3"}>
                <Button href="/contact" className="w-full">
                  Contact me!
                </Button>
              </TagWrapper>
            </div>
          </div>
        </div>
      </TagWrapper>
      <div className="absolute bottom-16 right-4  ">
        <ScrollDown />
      </div>
    </div>
  );
};

export default Landing;
