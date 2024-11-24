interface ContentProps {
  content: string;
}

const PostContent = ({ content }: ContentProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p>{content}</p>
    </div>
  );
};

export default PostContent;
