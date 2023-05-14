import React from "react";
import HeaderTag from "../common/HeaderTag";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <HeaderTag>
        <span>Portfolio</span>
      </HeaderTag>
      <div className="flex flex-col gap-3">
        <ExperienceCard
          title="Music Application"
          details="music streaming service where users can
listen to their favorite podcasts or music and share with
anyone."
        />
        <ExperienceCard
          title="E-Commerce Website"
          details="a transportation management service where a
user can rent a 2PTruck, 4PTruck and 6PTruck and The
vendor can track the data of the user."
        />
        <ExperienceCard
          title="AI-based Website "
          details="Transforming enterprise security operations
with computer vision intelligence to prevent security
incidents from occurring in the first place. User can set a
costume alert, for example if a person is detected in a
certain area, the alert will come to the user etc..."
        />
      </div>
    </div>
  );
};

export default Experience;
