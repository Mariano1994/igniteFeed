import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface propsComment {
  content: string;
  onDeleteComment: Function;
}

export function Comment({ content, onDeleteComment }: propsComment) {
  const [likecount, setLikeCount] = useState(0);

  const handlelikeCount = function () {
    setLikeCount(likecount + 1);
  };

  const handleDeleteComment = function () {
    onDeleteComment(content);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/83432409?v=4"
        inComment={true}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Mariano Capiliku</strong>
              <time
                title="03 de Dezembro as 08h: 13'"
                dateTime="2022-03-12 08:13:30"
              >
                {" "}
                Cerca de 1h
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={22} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handlelikeCount}>
            <ThumbsUp />
            Aplaudir <span> {likecount} </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
