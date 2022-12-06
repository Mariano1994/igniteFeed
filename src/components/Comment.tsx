import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface propsComment {
  content: string;
}

export function Comment(commentContent: propsComment) {
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

            <button title="Deletar comentario">
              <Trash size={22} />
            </button>
          </header>
          <p>{commentContent.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
