import { Check } from "@phosphor-icons/react";
import { usePosts } from "../context/PostsContext";
import { useState } from "react";
import { toast } from "sonner";

const CreatePostModalContent = ({ onCancelNewPost }: any) => {
  const [postContent, setPostContent] = useState("");
  const { handlerAddNewPost } = usePosts();

  const AddNewPost = () => {
    toast.success("post created");
    handlerAddNewPost(postContent);
    onCancelNewPost(false);
    setPostContent("");
  };
  return (
    <div className="w-[45%] bg-black-200 h-[50%] p-8 rounded-lg  ">
      <div className="flex flex-col items-center mt-8 gap-2">
        <span className="text-lg font-bold">Create new post</span>
        <textarea
          value={postContent}
          onChange={(event: any) => setPostContent(event.target.value)}
          className="w-full h-32 bg-app outline-none mt-4 rounded-lg py-2 px-4 focus:outline-green-850 text-sm resize-none"
        />
        <div className="flex items-center mt-8 gap-6 2xl:mt-4">
          <button
            onClick={() => onCancelNewPost(false)}
            className="flex items-center justify-center gap-2 py-2 px-4 text-red-400/75 rounded-md border border-1 border-red-400/75 transition-all hover:bg-red-400/75 hover:text-white"
          >
            <span className="font-semibold">Cancel</span>
          </button>
          <button
            onClick={AddNewPost}
            disabled={postContent.length === 0}
            className="flex items-center justify-center gap-2 py-2 px-4 text-green-850 rounded-md border border-1 border-green-850 transition-all  hover:bg-green-850 hover:text-white disabled:hover:brightness-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <Check size={20} weight="bold" />
            <span className="font-semibold">Post</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModalContent;
