import TagWrapper from "../common/TagWrapper";
import Button from "../common/Button";
import {
  ExpressIcon,
  JavascriptIcon,
  MongodbIcon,
  MysqlIcon,
  Nodeicon,
  ReactIcon,
  TypescriptIcon,
} from "../icons";

const Landing = () => {
  return (
    <div className="w-full h-full ">
      <TagWrapper tagName="h1">
        <div className="flex flex-col font-bold text-8xl">
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
            <Button href="/contact">Contact me !</Button>
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
              <MysqlIcon /> <JavascriptIcon />
              <ReactIcon />
              <Nodeicon />
              <ExpressIcon />
              <TypescriptIcon />
              <MongodbIcon />
              <MysqlIcon /> <JavascriptIcon />
              <ReactIcon />
              <Nodeicon />
              <ExpressIcon />
            </div>
          </TagWrapper>
        </div>
      </div>
      <div className="flex justify-between">
        <div style={{ writingMode: "vertical-rl" }}>Scroll Down</div>
        <div style={{ writingMode: "vertical-rl" }}>Scroll Down</div>
      </div>
    </div>
  );
};

export default Landing;
