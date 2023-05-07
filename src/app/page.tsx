import Link from "next/link";
import { use } from "react";

export const testAPI = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
};

export default function Home() {
  const test = use(testAPI());
  console.log(test);

  return (
    <div className="h-full w-full">
      <Link href={"/test"}>hello</Link>
    </div>
  );
}
