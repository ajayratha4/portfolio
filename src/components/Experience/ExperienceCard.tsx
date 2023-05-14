import React from "react";

type Props = { title: string; details: string };

const ExperienceCard = ({ title, details }: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center border  rounded-lg shadow md:flex-row md:max-w-xl">
        {/* <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/docs/images/blog/image-4.jpg"
          alt=""
        /> */}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="text-lg md:text-2xl">{title}</h5>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
