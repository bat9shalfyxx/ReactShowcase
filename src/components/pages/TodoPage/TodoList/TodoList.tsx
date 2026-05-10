import type { FC } from 'react';

import TodoItem from '@/components/pages/TodoPage/TodoItem/TodoItem';
import { useTodoContext } from '@/context/useTodoContext';
import { useTodoFetch } from '@/hooks/useTodoFetch';
import type { ITodo } from '@/types/todoType';

import styles from './TodoList.module.scss';

const fakeTodoList: ITodo[] = [
    {
        id: Number(crypto.randomUUID()),
        title: 'дописать реферат',
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: 'доделать лабы',
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: "Изучить SSH на Linux'е (управлять с домашней ОС (винды))",
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: 'анжумания',
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: 'не забыть',
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: 'выпрямить спину',
        completed: false,
    },
];

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
        <div className={styles.list}>
            {todoList.length ? (
                todoList.map(
                    (todo: ITodo, index): React.ReactNode => (
                        <div className={styles.todoList} key={todo.id}>
                            <TodoItem id={todo.id} title={todo.title} completed={todo.completed} index={index + 1} />
                        </div>
                    )
                )
            ) : (
                <span>You've completed all your tasks, good job!</span>
            )}
        </div>
    );
};

export default TodoList;
