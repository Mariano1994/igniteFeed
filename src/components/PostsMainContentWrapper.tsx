import Post from "./Post";

const PostsMainContentWrapper = () => {
  return (
    <main className="flex-1 space-y-8">
      <Post />
      <Post />
    </main>
  );
};

export default PostsMainContentWrapper;
