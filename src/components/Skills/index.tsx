import React from "react";
import HeaderTag from "../common/HeaderTag";
import {
  AWSIcon,
  ExpressIcon,
  JavaIcon,
  JavascriptIcon,
  MongodbIcon,
  MysqlIcon,
  Nodeicon,
  ReactIcon,
  TypescriptIcon,
} from "../icons";
import TagWrapper from "../common/TagWrapper";
import IconContainer from "../common/IconContainer";
import FrontEnd from "./FrontEnd";

const Skills = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <HeaderTag>
        <span>Skills</span>
      </HeaderTag>
      <div>
        <div className="w-full ">
          <TagWrapper flexCol={false} tagName="h5" style={"mx-3"}>
            <span className="font-bold">Programing Language</span>
          </TagWrapper>
          <div className="flex gap-2">
            <IconContainer
              iconSize={100}
              size={150}
              icon={JavaIcon}
              lable="Java"
            />
            <IconContainer
              iconSize={100}
              size={150}
              icon={JavascriptIcon}
              lable="JavaScript"
            />
            <IconContainer
              iconSize={100}
              size={150}
              icon={TypescriptIcon}
              lable="TypeScript"
            />
          </div>
        </div>
      </div>
      <div className=" flex gap-3 w-full">
        <div className="w-full h-full">
          <span>Front End Skills</span>
          <div className="w-full h-full  p-1 flex flex-wrap gap-2">
            <FrontEnd />
          </div>
        </div>
        <div className="w-full h-full">
          <span>Front End Skills</span>
          <div className="w-full h-full  p-1 flex flex-wrap gap-2">
            <JavascriptIcon />
            <ReactIcon />
            <Nodeicon />
            <ExpressIcon />
            <TypescriptIcon />
            <MongodbIcon />
            <MysqlIcon />
            <AWSIcon /> <JavascriptIcon />
            <ReactIcon />
            <Nodeicon />
            <ExpressIcon />
            <TypescriptIcon />
            <MongodbIcon />
            <MysqlIcon />
            <AWSIcon /> <JavascriptIcon />
            <ReactIcon />
            <Nodeicon />
            <ExpressIcon />
            <TypescriptIcon />
            <MongodbIcon />
            <MysqlIcon />
            <AWSIcon />
          </div>
        </div>
        <div className="w-full h-full">
          <span>Front End Skills</span>
          <div className="w-full h-full  p-1 flex flex-wrap gap-2">
            <JavascriptIcon />
            <ReactIcon />
            <Nodeicon />
            <ExpressIcon />
            <TypescriptIcon />
            <MongodbIcon />
            <MysqlIcon />
            <AWSIcon /> <JavascriptIcon />
            <ReactIcon />
            <Nodeicon />
            <ExpressIcon />
            <TypescriptIcon />
            <MongodbIcon />
            <MysqlIcon />
            <AWSIcon /> <JavascriptIcon />
            <ReactIcon />
            <Nodeicon />
            <ExpressIcon />
            <TypescriptIcon />
            <MongodbIcon />
            <MysqlIcon />
            <AWSIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
