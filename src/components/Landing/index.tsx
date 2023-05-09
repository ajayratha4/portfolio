import Link from "next/link";
import TagWrapper from "../common/TagWrapper";
import Button from "../common/Button";

const Landing = () => {
  return (
    <div>
      <TagWrapper tagName="h1">
        <div className="flex flex-col font-bold text-8xl">
          <span>Hi,</span>
          <span>I am Ajay Ratha,</span>
          <span>Full Stack Developer</span>
        </div>
      </TagWrapper>
      <div className="flex gap-4">
        <div>
          <TagWrapper tagName="p">
            <span className="hover:animate-spin">
              Front End Developer & Back End Developer
            </span>
          </TagWrapper>
          <TagWrapper tagName="button" style={"my-3"}>
            <Button href="/contact">Contact me !</Button>
          </TagWrapper>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Landing;
