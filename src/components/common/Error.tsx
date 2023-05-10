import React from "react";
import Button from "./Button";
import { rampartOne } from "@/fonts/fonts";

type Props = {
  reset: () => void;
};

const ErrorPage = ({ reset }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-3">
      <div>
        <div
          className={`flex flex-col font-bold text-6xl md:text-7xl lg:text-8xl ${rampartOne.className}`}
        >
          <h2>Error!</h2>
        </div>

        <div className="flex justify-evenly mt-4">
          <Button onClick={() => reset()}>Try again</Button>
          <Button onClick={() => window.location.reload()}>Reload</Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
