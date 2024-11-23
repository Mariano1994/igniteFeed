import profileImage from "../assets/avatar-1.jpg";

const PostHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="border-2  border-green-850 rounded-lg overflow-hidden">
          <img
            src={profileImage}
            width={60}
            height={60}
            className="border-2 border-black overflow-hidden"
          />
        </div>
        <div className="flex flex-col ">
          <strong className="font-bold  text-sm">Mariano Capiliku</strong>
          <span className="text-xs text-gray-500">Web Developer</span>
        </div>
      </div>
      <time
        dateTime="2024-12-23"
        title="2024-12-23"
        className="text-sm text-gray-500"
      >
        published 1h ago
      </time>
    </header>
  );
};

export default PostHeader;
