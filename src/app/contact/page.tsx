import { use } from "react";
import { testAPI } from "../page";

export default function Example() {
  const test = use(testAPI());

  return <div>Contact</div>;
}