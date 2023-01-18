import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://media.licdn.com/dms/image/D4D03AQHXAtNJHVcbGw/profile-displayphoto-shrink_800_800/0/1665630311610?e=1679529600&v=beta&t=Izv36qKHlCAMmyaVrLs1g7JNQexrL3yJpODJnNqHDkw" />

      <div className={styles.commentBox}>
        <div className={styles.coomentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Fernandes</strong>
              <time title="18 de Janeiro as 16:00" dateTime="2023-01-18 16:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parábens!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
          </button>
          Aplaudir <span>20</span>
        </footer>
      </div>
    </div>
  );
}
