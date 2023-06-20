import TagWrapper from "../common/TagWrapper";
import Button from "../common/Button";
import {
  AWSIcon,
  ExpressIcon,
  GithubIcon,
  JavascriptIcon,
  LinkedinIcon,
  MongodbIcon,
  MysqlIcon,
  Nodeicon,
  ReactIcon,
  ResumeIcon,
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
                <div className="flex justify-between flex-wrap  gap-2 ">
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
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      target="_blank"
                      href="https://github.com/ajayratha4"
                      style={{ padding: "4px" }}
                    >
                      <GithubIcon height={40} width={40} />
                    </Button>

                    <Button
                      target="_blank"
                      href={
                        "/assets/Reasume-Ajay-Ratha-Full-stack-developer.pdf"
                      }
                      style={{ padding: "4px" }}
                    >
                      <ResumeIcon height={40} width={40} />
                    </Button>
                    <Button
                      target="_blank"
                      href="https://www.linkedin.com/in/ajayratha4/"
                      style={{ padding: "4px" }}
                    >
                      <LinkedinIcon height={40} width={40} />
                    </Button>
                  </div>
                </div>
              </TagWrapper>
            </div>
            <div className="flex">
              <TagWrapper
                tagName="ButtonGroup"
                style={"my-3 flex gap-2 w-full  md:flex-row flex-col "}
              >
                <Button href="/contact" style={{ width: "150px" }}>
                  Contact me!
                </Button>
                <Button href="/skill" style={{ width: "150px" }}>
                  Skills
                </Button>
                <Button href="/work" style={{ width: "150px" }}>
                  Experiance
                </Button>
                <Button
                  target="_blank"
                  href={"/assets/Reasume-Ajay-Ratha-Full-stack-developer.pdf"}
                  style={{ width: "150px" }}
                >
                  View Resume
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
