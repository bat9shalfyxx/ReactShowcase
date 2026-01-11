import type { FC } from "react";
import styles from "./TodoItem.module.scss";

interface ITodoItem {
  id: number,
  title: string  
}

const TodoItem: FC<ITodoItem> = ({ id, title }) => {
  return (
    <div className={styles.item}>
      <div className={styles.id}>{id}</div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default TodoItem;