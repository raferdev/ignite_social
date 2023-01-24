import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar.jsx";
import { useState } from "react";

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/D4D03AQHXAtNJHVcbGw/profile-displayphoto-shrink_800_800/0/1665630311610?e=1679529600&v=beta&t=Izv36qKHlCAMmyaVrLs1g7JNQexrL3yJpODJnNqHDkw" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Fernandes</strong>
              <time title="18 de Janeiro as 16:00" dateTime="2023-01-18 16:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button onMouseDown={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

         {content}
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
          Aplaudir <span>
            {likeCount}
          </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
