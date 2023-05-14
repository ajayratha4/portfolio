import React from "react";
import HeaderTag from "../common/HeaderTag";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <HeaderTag>
        <span>Portfolio</span>
      </HeaderTag>
      <div>
        <ExperienceCard /> <ExperienceCard /> <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
