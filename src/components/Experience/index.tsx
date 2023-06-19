import React from "react";
import HeaderTag from "../common/HeaderTag";
import ExperienceCard from "./ExperienceCard";
import { EcommerceIcon, MusicIcon, VideoIcon } from "../icons";

const Experience = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <HeaderTag>
        <span>Portfolio</span>
      </HeaderTag>
      <div className="flex flex-col gap-3">
        <ExperienceCard
          title="Music Application"
          icon={<MusicIcon />}
          details="music streaming service where users can
listen to their favorite podcasts or music and share with
anyone."
          responsibilities={
            <ul className="space-y-1 text-gray-200 list-disc list-inside">
              <li>
                Writing high-quality, modular, and maintainable code following
                best practices and coding standards.
              </li>
              <li>
                {`Implementing state management solutions such as Redux or Context
                API to manage the application's data and state effectively`}
              </li>
              <li>
                Integrating GraphQL endpoints to retrieve and update data from
                backend servers
              </li>
              <li>
                Optimizing application performance through code optimization,
                lazy loading, and other techniques to ensure fast and efficient
                rendering.
              </li>
            </ul>
          }
        />
        <ExperienceCard
          title="E-Commerce Website"
          icon={<EcommerceIcon />}
          details="a transportation management service where a
user can rent a 2PTruck, 4PTruck and 6PTruck and The
vendor can track the data of the user."
          responsibilities={
            <ul className="space-y-1 text-gray-200 list-disc list-inside">
              <li>Setup backend architecture as per the requirement</li>
              <li>Deployment of code on development and production server</li>
              <li> Create backend APIs for scheduling and notifications.</li>
              <li>Handle Database structure and stored procedure.</li>
              <li>Support front-end team during integration</li>
              <li>
                Integrated payment gateway and creating PDFs and sending emails
                to users with rent details
              </li>
              <li>Created pipeline in Jenkins</li>
            </ul>
          }
        />
        <ExperienceCard
          title="AI-based Website "
          icon={<VideoIcon />}
          details="Transforming enterprise security operations
with computer vision intelligence to prevent security
incidents from occurring in the first place. User can set a
costume alert, for example if a person is detected in a
certain area, the alert will come to the user etc..."
          responsibilities={
            <ul className="space-y-1 text-gray-200 list-disc list-inside">
              <li>
                {`Clarifying the end user's requirements. Analyzing the
      requirements and providing estimates.`}
              </li>
              <li>Determining the structure and design of web pages. </li>
              <li> Backend REST API creation.</li>
              <li> REST API Integration in front-end</li>
              <li>
                Implementing user authentication and authorization mechanisms,
                such as JWT (JSON Web Tokens), to secure APIs and manage user
                access.
              </li>
              <li>
                Deployment of the project on development and production servers
                using Docker
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Experience;
