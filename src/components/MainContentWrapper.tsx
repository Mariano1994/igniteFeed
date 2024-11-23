import PostsMainContentWrapper from "./PostsMainContentWrapper";
import Sidebar from "./Sidebar";

const MainContentWrapper = () => {
  return (
    <div className="flex items-start max-w-[70rem] my-8 mx-auto py-0 px-4 gap-8">
      <Sidebar />
      <PostsMainContentWrapper />
    </div>
  );
};

export default MainContentWrapper;
