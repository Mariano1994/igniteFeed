import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/83432409?v=4" />

          <div className={styles.authorInfo}>
            <strong> Mariano Capiliku</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 de Dezembro as 08h: 13'" dateTime="2022-03-12 08:13:30">
          {" "}
          Publicado ha 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          <a href="#"> 👉 jane.design/doctorcare </a>
        </p>
        <p>
          <a href="#"> #novoprojeto </a>
          <a href="#"> #nlw </a> <a href="#"> #rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixa seu feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button className={styles.buttonForm} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
