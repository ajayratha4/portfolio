"use client";
import React from "react";

type Props = {
  title: string;
  details: string;
  icon: React.JSX.Element;
  responsibilities: React.JSX.Element;
};

const ExperienceCard = ({ title, details, icon, responsibilities }: Props) => {
  return (
    <div className="flex items-center border flex-col md:flex-row rounded-lg shadow ">
      <div className="w-1/3 p-2 h-full ">{icon}</div>
      <div className="flex flex-col justify-between p-4 leading-normal w-2/3 ">
        <span className="text-lg md:text-2xl">{title}</span>
        <span className="text-2xl md:text-xl">{details}</span>
        <div>
          <span className="text-2xl md:text-xl">Responsibilities</span>:
          {responsibilities}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
