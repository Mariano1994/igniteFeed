const AddNewCommentPost = () => {
  return (
    <div className="group border-t border-t-1 border-gray-300/5 pt-5 ">
      <span className="text-sm font-bold">Leave a feedback</span>
      <textarea className="w-full h-24 bg-app outline-none mt-4 rounded-lg py-2 px-4 focus:outline-green-850 text-sm" />

      <button
        type="submit"
        className="py-2 px-4 bg-green-850 mt-2 rounded-md hover:brightness-90 hidden group-focus-within:block"
      >
        {" "}
        Comment
      </button>
    </div>
  );
};

export default AddNewCommentPost;
