import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface postProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: [
    {
      type: string;
      content: string;
    }
  ];
  publisedAt: Date;
}

export function Post({ author, publisedAt, content }: postProps) {
  const [comments, setComments] = useState([
    "Maravilha. Continue postando e ganhand pontos",
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormat = format(publisedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeNow = formatDistanceToNow(publisedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = function (event: any) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentInvalid = function (event: any) {
    event.target.setCustomValidity("Este campo e obrigatorio!");
  };

  const handleNewCommentChange = function (event: any) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const deleteComment = function (commentToDelete: postProps) {
    const commentsWithoutDeletedOne = comments.filter((comment: any) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  };
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong> {author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publisedAt.toISOString()}>
          {" "}
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}> {line.content} </p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#"> {line.content} </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong> Deixa seu feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          name="comment"
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          placeholder="Deixe um comentario"
          required
        />

        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
