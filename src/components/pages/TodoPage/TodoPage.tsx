import { memo, useCallback, useState, type FC } from 'react';

import PageTemplate from '@/components/layout/PageTemplate/PageTemplate';
import { TodoContext } from '@/context/useTodoContext';
import type { ITodo } from '@/types/todo.type';

import TodoCreateForm from './TodoCreateForm/TodoCreateForm';
import TodoList from './TodoList/TodoList';
import styles from './TodoPage.module.scss';

const TodoPage: FC = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const removeTodoItem = useCallback((id: string) => {
        setTodoList(prev => [...prev.filter(todo => todo.id !== id)]);
    }, []);

    const toggleCompleted = useCallback(
        (id: string) => {
            const updatedTodoList = todoList.map((todo: ITodo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });

            setTodoList(updatedTodoList);
        },
        [todoList]
    );

    const createTodoItem = useCallback((title: string, description: string | undefined): void => {
        setTodoList(prev => [
            ...prev,
            {
                id: crypto.randomUUID(),
                title: title,
                description: description,
                completed: false,
            },
        ]);
    }, []);

    return (
        <PageTemplate>
            <TodoContext.Provider
                value={{
                    todoList,
                    setTodoList,
                    toggleCompleted,
                    removeTodoItem,
                    createTodoItem,
                }}
            >
                <div className={styles.todoPage}>
                    <TodoCreateForm />
                    <TodoList todoList={todoList} setTodoList={setTodoList} />
                </div>
            </TodoContext.Provider>
        </PageTemplate>
    );
};

export default memo(TodoPage);
