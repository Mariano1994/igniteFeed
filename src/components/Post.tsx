import AddNewCommentPost from "./AddNewCommentPost";
import Comment from "./Comment";

import PostContent from "./PostContent";
import PostHeader from "./PostHeader";

// interface PostPros {
//   post: {
//     id: string;
//     author: {
//       name: string;
//       avatar_url: string;
//       role: string;
//     };
//     publisedAt: Date;
//     content: string;
//     comments?: {
//       id: string;
//       comment: string;
//       author: {
//         avatar_url: string;
//         name: string;
//       };
//       publishedAt: Date;
//       isOwner: boolean;
//       likesCount?: number;
//     }[];
//   };
// }

const Post = ({ post }: any) => {
  return (
    <article className="flex flex-col gap-6 p-6  bg-black-200 rounded-lg">
      <PostHeader author={post?.author} publisedAt={post.publisedAt} />
      <PostContent content={post.content} />
      <AddNewCommentPost postID={post.id} />
      {post.comments?.map((comment: any) => {
        return <Comment key={comment.id} comment={comment} postId={post.id} />;
      })}
    </article>
  );
};

export default Post;
