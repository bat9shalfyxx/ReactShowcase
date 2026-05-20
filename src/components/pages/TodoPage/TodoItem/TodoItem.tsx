import { memo, type FC } from 'react';

import { useTodoContext } from '@/context/useTodoContext';

import styles from './TodoItem.module.scss';

interface ITodoItem {
    id: string;
    title: string;
    completed: boolean;
    index: number;
}

const TodoItem: FC<ITodoItem> = ({ id, title, completed, index }) => {
    const removeFunc = useTodoContext().removeTodoItem;
    const toggleFunc = useTodoContext().toggleCompleted;

    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <span>{index}</span>
                <span className={`${styles.title}  ${completed ? styles.completed : ''}`}>{title}</span>
            </div>

            <div className={styles.actions}>
                <input type="checkbox" checked={completed} onChange={() => toggleFunc(id)} />
                <button className={styles.btn} onClick={() => removeFunc(id)}>
                    X
                </button>
            </div>
        </div>
    );
};

export default memo(TodoItem);
