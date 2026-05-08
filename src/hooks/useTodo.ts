import { useCallback, useState } from 'react';
import type { ITodo } from '@/types/todoType';

export const useTodo = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const removeTodoItem = useCallback((id: number) => {
        setTodoList(prev => [...prev.filter(todo => todo.id !== id)]);
    }, []);

    const toggleCompleted = useCallback(
        (id: number) => {
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
                id: prev.length + 1,
                title: title,
                description: description,
                completed: false,
            },
        ]);
    }, []);

    return { todoList, setTodoList, toggleCompleted, removeTodoItem, createTodoItem };
};
