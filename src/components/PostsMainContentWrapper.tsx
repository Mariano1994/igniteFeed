import { usePosts } from "../context/PostsContext";
import Post from "./Post";

const PostsMainContentWrapper = () => {
  const { posts } = usePosts();
  return (
    <main className="flex-1 space-y-8">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
};

export default PostsMainContentWrapper;
