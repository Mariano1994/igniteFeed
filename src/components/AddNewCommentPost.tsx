import { useState } from "react";
import { usePosts } from "../context/PostsContext";

interface PostID {
  postID: string;
}

const AddNewCommentPost = ({ postID }: PostID) => {
  const [comment, setComment] = useState("");
  const { handleAddNewComment } = usePosts();

  const submitNewComment = () => {
    handleAddNewComment(postID, comment);
    setComment("");
  };

  return (
    <div className="group border-t border-t-1 border-gray-300/5 pt-5 ">
      <span className="text-sm font-bold">Leave a feedback</span>
      <textarea
        value={comment}
        onChange={(event: any) => setComment(event.target.value)}
        className="w-full h-24 bg-app outline-none mt-4 rounded-lg py-2 px-4 focus:outline-green-850 text-sm resize-none"
      />

      <button
        type="submit"
        onClick={submitNewComment}
        className="py-2 px-4 bg-green-850 mt-2 rounded-md hover:brightness-90 hidden group-focus-within:block"
      >
        {" "}
        Comment
      </button>
    </div>
  );
};

export default AddNewCommentPost;
