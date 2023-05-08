type Props = {
  children: React.ReactNode;
  tagName: string;
  style?: string;
};

const TagWrapper = ({ children, tagName, style }: Props) => {
  return (
    <div className="  flex flex-col  ">
      <span className=" dark:text-gray-600 font-cursive">{`<${tagName}>`}</span>
      <div className={`"ml-4" ${style}`}>{children}</div>
      <span className=" dark:text-gray-600 font-cursive">{`</${tagName}>`}</span>
    </div>
  );
};

export default TagWrapper;
