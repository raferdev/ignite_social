import { Comment } from "./Comment.jsx";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://media.licdn.com/dms/image/D4D03AQHXAtNJHVcbGw/profile-displayphoto-shrink_800_800/0/1665630311610?e=1679529600&v=beta&t=Izv36qKHlCAMmyaVrLs1g7JNQexrL3yJpODJnNqHDkw"
          />
          <div className={styles.authorInfo}>
            <strong>Rafael Fernandes</strong>
            <span>Software Developer</span>
          </div>
        </div>
        <time
          title="Publicado 18 de Janeiro de 2023"
          dateTime="2023-01-18 15:00:00"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
      </div>
    </article>
  );
}
