import React from "react";
import HeaderTag from "../common/HeaderTag";
import TagWrapper from "../common/TagWrapper";
import Button from "../common/Button";

const About = ({ showButton = false }) => {
  return (
    <div className="w-full flex flex-col gap-3 md:w-3/4">
      <HeaderTag>
        <span>My, Myself & I</span>
      </HeaderTag>
      <TagWrapper tagName="p">
        I am a Full Stack Developer with almost 2+ years of experience, my
        problem-solving skills, speaking skills, sense of empathy, technical
        skills, and professional experience make me a great team player and a
        valuable employee. I am proficient with - 📄𝗕𝗮𝗰𝗸𝗲𝗻𝗱- Node.js with
        ExpressJS, SpringBoot and NestJS 📄𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝- React.js, React Native,
        TypeScript, JavaScript, CSS, and Flex understanding in both web and
        react native. 📄 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞- PostgreSQL, Mysql, and MongoDB 📄𝐃𝐞𝐬𝐤𝐭𝐨𝐩
        𝐀𝐩𝐩𝐬- Electron.js, 📄Strong Programming Languages- JavaScript, Java 📄 A
        strong believer of DevOps, SRE, and writing robust, easy-to-maintain
        software 📄 Firm follower of 𝗔𝗴𝗶𝗹𝗲 𝗦𝗰𝗿𝘂𝗺 𝗺𝗲𝘁𝗵𝗼𝗱𝗼𝗹𝗼𝗴𝘆 - how teams and
        clients collaborate 📄 I know the importance of 365 feedback and love to
        act on the feedback received Other tools I have worked on in production
        - 📄𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭- AWS (EC2, S3), Docker 📄 𝐖𝐞𝐛 𝐒𝐞𝐫𝐯𝐞𝐫 - Nginx, Tomcat 📄
        Process Manager - PM2 📄 Multiplatform tunneling - Ngrok
      </TagWrapper>
      {showButton && (
        <TagWrapper tagName="button" style={"my-3  "}>
          <Button href="/contact" style={{ width: "150px" }}>
            Contact me!
          </Button>
        </TagWrapper>
      )}
    </div>
  );
};

export default About;
