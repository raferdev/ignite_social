import styles from "./ConfirmAction.module.css";

interface ConfirmActionProps {
  activated: boolean;
  type: string;
  onDeleteComment: (comment: string) => void;
  content: string;
}
export function ConfirmAction({
  activated = false,
  type,
  onDeleteComment,
  content,
}: ConfirmActionProps) {
  const typeShowText = type[0].toUpperCase() + type.slice(1);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div
    onScrollCapture={()=>{console.log('weasdas')}}
      className={
        activated
          ? styles.confirmActionWrapper
          : `${styles.confirmActionWrapper} ${styles.hidden}`
      }
    >
      <div className={styles.advertiseBox}>
        <h1>{typeShowText} advertise</h1>
        <p>Do you really want {type}?</p>
        <div className={styles.buttonsWrapper}>
          <button className={styles.buttonNo} onMouseDown={handleDeleteComment}>
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
