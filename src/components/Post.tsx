import AddNewCommentPost from "./AddNewCommentPost";
import Comment from "./Comment";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";

interface PostPros {
  post: {
    id: string;
    author: {
      name: string;
      avatar_url: string;
      role: string;
    };
    publisedAt: Date;
    content: string;
  };
}

const Post = ({ post }: PostPros) => {
  return (
    <article className="flex flex-col gap-6 p-6  bg-black-200 rounded-lg">
      <PostHeader author={post?.author} publisedAt={post.publisedAt} />
      <PostContent content={post.content} />
      <AddNewCommentPost />
      <Comment />
      <Comment />
    </article>
  );
};

export default Post;
