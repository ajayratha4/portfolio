import { caveat } from "@/fonts/fonts";

type Props = {
  children: React.ReactNode;
  tagName: string;
  style?: string;
  flexCol?: boolean;
};

const TagWrapper = ({ children, tagName, style, flexCol = true }: Props) => {
  return (
    <div className={`flex ${flexCol && "flex-col"}  `}>
      <span
        className={`dark:text-gray-500 ${caveat.className}`}
      >{`<${tagName}>`}</span>
      <div className={`${flexCol ? "ml-7" : "mx-2"}  ${style}`}>{children}</div>
      <span
        className={`dark:text-gray-500 ${caveat.className}`}
      >{`</${tagName}>`}</span>
    </div>
  );
};

export default TagWrapper;
