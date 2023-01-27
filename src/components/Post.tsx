import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/esm/locale/en-US/index.js";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "./Avatar.jsx";
import { Comment } from "./Comment.jsx";
import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["NICE POST BROH, Ah... i don't change the account. 🙃"]);
  const [newCommentText, setNewCommentText] = useState("");
  const commentDate = new Date().getTime();

  const publishedDateFormatted = format(
    publishedAt,
    "'Published date ' d ',' LLLL ',' HH:mm'hrs'",
    {
      locale: enUS,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  function handlerCreateNewContent(event: FormEvent) {
    event.preventDefault();

    setNewCommentText("");

    setComments([...comments, newCommentText]);
  }

  function handlerNewCommentText(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete:string) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("The comment are empty.");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}> {line.content} </p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href={line.content}>🔗 {line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handlerCreateNewContent} className={styles.commentForm}>
        <strong>Give your feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handlerNewCommentText}
          name="comment"
          placeholder="Leave a comment."
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              author={"Rafael Fernandes"}
              timeDate={commentDate}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
