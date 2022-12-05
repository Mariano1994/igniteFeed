import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  inComment?: boolean;
}

export function Avatar(source: AvatarProps) {
  return (
    <img
      className={source.inComment ? styles.inCommentAvatar : styles.avatar}
      src={source.src}
    />
  );
}
