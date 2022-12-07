import styles from "./DeleteComment.module.css";

// interface DeleteCommentProps {
//     content: string
//     onDeleteComment: (comment: string) => void
// }

export function DeleteComment() {
  return (
    <>
      <div className={styles.fullScreen}></div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <strong>Excluir comentário</strong>
          <p>Você tem certeza que gostaria de excluir este comentário?</p>
          <footer>
            <a>Cancelar</a>
            <a>Sim, excluir</a>
          </footer>
        </div>
      </div>
    </>
  );
}
