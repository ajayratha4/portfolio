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
        className={`dark:text-gray-100 ${caveat.className}`}
      >{`<${tagName}>`}</span>
      <div className={`"ml-4" ${style}`}>{children}</div>
      <span
        className={`dark:text-gray-100 ${caveat.className}`}
      >{`</${tagName}>`}</span>
    </div>
  );
};

export default TagWrapper;
