import type { FC } from 'react';

import TodoItem from '@/components/pages/TodoPage/TodoItem/TodoItem';
import { useTodoContext } from '@/hooks/useTodoContext';
import { useTodoFetch } from '@/hooks/useTodoFetch';
import type { ITodo } from '@/types/todoType';

import { fakeTodoList } from './fakeTodoList.data';
import styles from './TodoList.module.scss';

const TodoList: FC = () => {
    const { todoList, setTodoList } = useTodoContext();
    const { loading, error } = useTodoFetch(6);

    if (loading) {
        return <span>Data is loading...</span>;
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

export default TodoList;
