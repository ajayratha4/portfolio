import Landing from "@/components/Landing";
import TagWrapper from "@/components/common/TagWrapper";

export const testAPI = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
};

export default function Home() {
  return (
    <div className="w-full h-full ">
      <TagWrapper tagName="body">
        <Landing />
      </TagWrapper>
    </div>
  );
}
