import type { FC } from "react";
import styles from "./TodoItem.module.scss";
import { useTodoContext } from "../useTodoContext";

interface ITodoItem {
  id: number,
  title: string,
  completed: boolean
}

const TodoItem: FC<ITodoItem> = ({ id, title, completed }) => {
  const todoContext = useTodoContext();
  
  return (
    <div className={styles.item}>
      <input type="text" className={styles.id} value={id} readOnly />
      <input type="text" className={styles.title} value={title} readOnly />
      <input type="checkbox" checked={completed} />
      <input type="button" onClick={() => console.log(todoContext)} value="X" />
    </div>
  )
}

export default TodoItem;