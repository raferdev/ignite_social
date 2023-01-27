import styles from "./Comment.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar.js";
import { useState } from "react";
import { enUS } from "date-fns/locale";

interface CommentProps {
  content: string;
  onDeleteComment: (comment:string) => void;
  author: string;
  timeDate: number;
}


export function Comment({content, onDeleteComment,author, timeDate }:CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const timeDateFormatted = format(
    timeDate,
    "'Published date ' d ',' LLLL ',' HH:mm'hrs'",
    {
      locale: enUS,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(timeDate, {
    locale: enUS,
    addSuffix: true,
  });

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount((state) =>{
      return state + 1
    })
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/D4D03AQHXAtNJHVcbGw/profile-displayphoto-shrink_800_800/0/1665630311610?e=1679529600&v=beta&t=Izv36qKHlCAMmyaVrLs1g7JNQexrL3yJpODJnNqHDkw" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author}</strong>
              <time title={timeDateFormatted} dateTime={timeDateFormatted}>
                {publishedDateRelativeToNow}
              </time>
            </div>
            <button onMouseDown={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

         {content}
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
          Claps 👏<span>
            {likeCount}
          </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
