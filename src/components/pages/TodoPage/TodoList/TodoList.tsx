import { memo, type Dispatch, type FC, type SetStateAction } from 'react';

import TodoItem from '@/components/pages/TodoPage/TodoItem/TodoItem';
import { useTodoFetch } from '@/hooks/useTodoFetch';
import type { ITodo } from '@/types/todo.type';

import { fakeTodoList } from './fakeTodoList.data';
import styles from './TodoList.module.scss';

interface ITodoListProps {
    todoList: ITodo[];
    setTodoList: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoList: FC<ITodoListProps> = ({ todoList, setTodoList }) => {
    const { loading, error } = useTodoFetch(6);

    if (loading) {
        return (
            <div className={styles.listContainer}>
                <span>Data is loading...</span>
            </div>
        );
    }

    if (error) {
        console.log(error);
        setTodoList(fakeTodoList);
    }

    return (
        <div className={styles.listContainer}>
            <ul role="list" className={styles.list}>
                {todoList.length ? (
                    todoList.map(
                        (todo: ITodo, index): React.ReactNode => (
                            <li className={styles.todoList} key={todo.id} role="listitem">
                                <TodoItem
                                    id={todo.id}
                                    title={todo.title}
                                    completed={todo.completed}
                                    index={index + 1}
                                />
                            </li>
                        )
                    )
                ) : (
                    <span>You've completed all your tasks, good job!</span>
                )}
            </ul>
        </div>
    );
};

export default memo(TodoList);
