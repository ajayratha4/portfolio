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
      <div>
        <TagWrapper tagName="p">
          I am a Full Stack Developer with almost 2+ years of experience, my
          problem-solving skills, speaking skills, sense of empathy, technical
          skills, and professional experience make me a great team player and a
          valuable employee. I am proficient with - 📄𝗕𝗮𝗰𝗸𝗲𝗻𝗱- Node.js with
          ExpressJS, SpringBoot and NestJS 📄𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝- React.js, React Native,
          TypeScript, JavaScript, CSS, and Flex understanding in both web and
          react native. 📄 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞- PostgreSQL, Mysql, and MongoDB 📄𝐃𝐞𝐬𝐤𝐭𝐨𝐩
          𝐀𝐩𝐩𝐬- Electron.js, 📄Strong Programming Languages- JavaScript, Java 📄
          A strong believer of DevOps, SRE, and writing robust, easy-to-maintain
          software 📄 Firm follower of 𝗔𝗴𝗶𝗹𝗲 𝗦𝗰𝗿𝘂𝗺 𝗺𝗲𝘁𝗵𝗼𝗱𝗼𝗹𝗼𝗴𝘆 - how teams and
          clients collaborate 📄 I know the importance of 365 feedback and love
          to act on the feedback received Other tools I have worked on in
          production - 📄𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭- AWS (EC2, S3), Docker 📄 𝐖𝐞𝐛 𝐒𝐞𝐫𝐯𝐞𝐫 -
          Nginx, Tomcat 📄 Process Manager - PM2 📄 Multiplatform tunneling -
          Ngrok
        </TagWrapper>
        <span className="text-2xl">Experience</span>
        <TagWrapper tagName="li">
          <ul className="space-y-1 text-gray-200 list-disc list-inside">
            <li>Design client-side and server-side architecture</li>
            <li>
              Developed and maintained web applications using the MERN stack.
            </li>
            <li>
              Implemented RESTful APIs using Node.js and Express.js for
              server-side development.
            </li>
            <li>
              Designed and developed responsive and user-friendly interfaces
              using React.
            </li>
            <li>
              Implemented user interfaces using HTML, CSS, Material UI, and
              JavaScript.
            </li>
            <li>
              {" "}
              To maintain type safety in React projects using TypeScript.
            </li>
            <li>
              Used graphql with codegen and apollo graphql client for cache.
            </li>
            <li>
              Integrated MongoDB for efficient data storage and retrieval.
            </li>
            <li>
              Conducted thorough testing and debugging to identify and resolve
              issues.
            </li>
            <li>
              Stayed updated with the latest trends and best practices in MERN
              stack development.
            </li>
            <li>
              Develop and manage well-functioning databases and applications.
              Write effective APIs.
            </li>
            <li>
              Creating AWS EC2 Instance, S3, Load Balancer and running projects
              on Instance.
            </li>
            <li>
              Crating and deploying Lambda function with use of API gateway.
            </li>
            <li>Worked with Socke.io for live data updates.</li>
            <li>
              Worked on Nginx configuration for reverse proxy and let’s encrypt.
            </li>
            <li> Used PM2 and Docker for running servers on EC2.</li>
            <li>
              For deployment automation, I used Jenkins and CI CD Pipeline Using
              Github as a code hosting platform for version control and
              collaboration.
            </li>
            <li>
              Collaborated with cross-functional teams to gather requirements
              and ensure successful project delivery.
            </li>
          </ul>
        </TagWrapper>
      </div>

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
