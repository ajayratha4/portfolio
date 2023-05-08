import Link from "next/link";
import TagWrapper from "../common/TagWrapper";

const Landing = () => {
  return (
    <div>
      <TagWrapper tagName="h1">
        {/* <div className="flex flex-col font-bold text-8xl">
          <span>Hi,</span>
          <span>I am Ajay Ratha,</span>
          <span>Full Stack Developer</span>
        </div> */}
      </TagWrapper>
      <div className="flex gap-4">
        <div>
          <TagWrapper tagName="p">
            <span>Front End Developer & Back End Developer</span>
          </TagWrapper>
          <TagWrapper tagName="button" style={"my-3"}>
            <Link
              href="/contact"
              className="bg-transparent font-semibold  py-2 px-4 border border-gray-800 hover:border-primary rounded"
            >
              Contact me!
            </Link>
          </TagWrapper>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Landing;
