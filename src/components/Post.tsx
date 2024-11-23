import AddNewCommentPost from "./AddNewCommentPost";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";

const Post = () => {
  return (
    <article className="flex flex-col gap-6 p-6  bg-black-200 rounded-lg">
      <PostHeader />
      <PostContent />
      <AddNewCommentPost />
    </article>
  );
};

export default Post;
