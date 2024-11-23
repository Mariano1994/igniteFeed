import PostComment from "./PostComment";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";

const Post = () => {
  return (
    <article className="flex flex-col gap-6 p-6  bg-black-200 rounded-lg">
      <PostHeader />
      <PostContent />
      <PostComment />
    </article>
  );
};

export default Post;
