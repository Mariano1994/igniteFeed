interface AvatarProps {
  userImage: string;
  width: number;
  height: number;
  isWithBorder?: boolean;
}

const Avatar = ({ userImage, width, height, isWithBorder }: AvatarProps) => {
  return (
    <div
      className={`${
        isWithBorder ? "border-2  border-green-850" : ""
      } rounded-md overflow-hidden`}
    >
      <img
        src={userImage}
        width={width}
        height={height}
        className={`${
          isWithBorder ? "border-2 border-black overflow-hidden" : ""
        }`}
      />
    </div>
  );
};

export default Avatar;
