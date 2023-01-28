import styles from "./ConfirmAction.module.css";

interface ConfirmActionProps {
    warnActivated: boolean;
  type: string;
  setWarnActivated: (value:boolean) => void;
  onDeleteComment: (comment: string) => void;
  content: string;
}
export function ConfirmAction({
    warnActivated,
    setWarnActivated,
  type,
  onDeleteComment,
  content,
}: ConfirmActionProps) {
  const typeShowText = type[0].toUpperCase() + type.slice(1);
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  function handleDeleteCommentFalse(){
    setWarnActivated(false);
  }

  return (
    <div
      className={
        warnActivated
          ? styles.confirmActionWrapper
          : `${styles.confirmActionWrapper} ${styles.hidden}`
      }
    >
      <div className={styles.advertiseBox}>
        <h1>{typeShowText} advertise</h1>
        <p>Do you really want {type}?</p>
        <div className={styles.buttonsWrapper}>
          <button className={styles.buttonNo} onMouseDown={handleDeleteCommentFalse}>
            No
          </button>
          <button
            className={styles.buttonYes}
            onMouseDown={handleDeleteComment}
          >
            Yes, confirm
          </button>
        </div>
      </div>
    </div>
  );
}
