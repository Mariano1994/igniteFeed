import { Dot, HandsClapping, Trash } from "@phosphor-icons/react";

import Avatar from "./Avatar";
import { DateFormatterFns } from "../utils/helpers";
import { usePosts } from "../context/PostsContext";
import Modal from "./Modal";
import { useState } from "react";
import DeleteCommentModalContent from "./DeleteCommentModalContent";

interface CommentProps {
  comment: {
    id: string;
    comment: string;
    author: {
      avatar_url: string;
      name: string;
    };
    publishedAt: Date;
    isOwner: boolean;
    likesCount?: number;
  };
  postId: string;
}

const Comment = ({ comment, postId }: CommentProps) => {
  const [showModal, setShowModal] = useState(false);
  const { handlerApplaudComment } = usePosts();

  return (
    <div className="flex items-start gap-4 w-full">
      <Avatar userImage={comment.author.avatar_url} width={50} height={50} />
      <div className="flex flex-col gap-2 flex-1 ">
        <div className="flex flex-col  bg-gray-400/5 rounded-md ">
          <div className="flex items-start justify-between p-4">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-bold">
                  {comment.author.name}{" "}
                  {comment.isOwner && (
                    <span className="text-xs text-gray-500">(you)</span>
                  )}
                </span>
                <span className="text-xs text-gray-500">
                  {DateFormatterFns(comment.publishedAt, new Date())}
                </span>
              </div>
              <div className="w-full flex-1 mt-3">
                <p className="text-sm w-full">{comment.comment}</p>
              </div>
            </div>
            <div
              className="hover:cursor-pointer hover:text-red-400"
              title="Delete comment"
              onClick={() => setShowModal(!showModal)}
            >
              <Trash size={20} />
            </div>
          </div>
        </div>
        <div
          onClick={() => handlerApplaudComment(postId, comment.id)}
          className="flex items-center gap-1 text-gray-500 tex-xs hover:cursor-pointer hover:text-yellow-400/75"
        >
          <HandsClapping size={16} />
          <span className="text-sm -mr-2">Applaud</span>
          <Dot size={25} weight="bold" />
          <span className="text-sm -ml-2">{comment.likesCount}</span>
        </div>
      </div>

      {showModal && (
        <Modal>
          <DeleteCommentModalContent
            postId={postId}
            commentId={comment.id}
            onCancelDeleteComment={setShowModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Comment;
