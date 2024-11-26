import { usePosts } from "../context/PostsContext";

interface ModalProps {
  postId: string;
  commentId: string;
  onCancelDeleteComment: (value: boolean) => void;
}

const DeleteCommentModalContent = ({
  postId,
  commentId,
  onCancelDeleteComment,
}: ModalProps) => {
  const { handleDeleteComment } = usePosts();

  const handleConfirmCommentDelete = () => {
    handleDeleteComment(postId, commentId);
    onCancelDeleteComment(false);
  };

  return (
    <div className="w-[30%] bg-black-200 h-[30%] p-8 rounded-lg  ">
      <div className="flex flex-col items-center mt-3 gap-2">
        <span className="font-bold text-lg mb-3 ">Delete Comment</span>
        <p className="text-sm text-gray-400 max-w-[70%] text-center leading-6">
          {" "}
          Are you sure you would like to delete this comment?
        </p>
        <div className="flex items-center mt-2 gap-6 2xl:mt-4">
          <button
            onClick={() => onCancelDeleteComment(false)}
            className="py-2 px-4  rounded-md transition-all hover:bg-gray-800/75 "
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmCommentDelete}
            className="py-2 px-4 text-red-500 rounded-md border border-1 border-red-500 transition-all hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentModalContent;
