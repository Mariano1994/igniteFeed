import { Dot, ThumbsUp, Trash } from "@phosphor-icons/react";
import userImage from "../assets/avatar-1.jpg";
import Avatar from "./Avatar";
const Comment = () => {
  return (
    <div className="flex items-start gap-4 w-full">
      <Avatar userImage={userImage} width={50} height={50} />
      <div className="flex flex-col gap-2 flex-1 ">
        <div className="flex flex-col  bg-gray-400/5 rounded-md ">
          <div className="flex items-start justify-between p-4">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-bold">
                  Mariano Capiliku{" "}
                  <span className="text-xs text-gray-500">(voce)</span>
                </span>
                <span className="text-xs text-gray-500">about 2h ago</span>
              </div>
              <div className="w-full flex-1">
                <p className="text-sm w-full">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div
              className="hover:cursor-pointer hover:text-red-400"
              title="Delete comment"
            >
              <Trash size={20} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-500 tex-xs hover:cursor-pointer hover:text-green-850">
          <ThumbsUp size={16} />
          <span className="text-sm -mr-2">like</span>
          <Dot size={25} weight="bold" />
          <span className="text-sm -ml-2">33</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
