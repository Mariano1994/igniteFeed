import { DateFormatterFns } from "../utils/helpers";
import Avatar from "./Avatar";

interface AuthorProps {
  author: {
    name: string;
    avatar_url: string;
    role: string;
  };
  publisedAt: Date;
}

const PostHeader = ({ author, publisedAt }: AuthorProps) => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar
          userImage={author?.avatar_url}
          width={60}
          height={60}
          isWithBorder
        />
        <div className="flex flex-col ">
          <strong className="font-bold  text-sm">{author?.name}</strong>
          <span className="text-xs text-gray-500">{author?.role}</span>
        </div>
      </div>
      <time
        dateTime="2024-12-23"
        title="2024-12-23"
        className="text-sm text-gray-500"
      >
        {DateFormatterFns(publisedAt, new Date())}
      </time>
    </header>
  );
};

export default PostHeader;
