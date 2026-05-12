import { type Dispatch, type SetStateAction, createContext } from 'react';

import type { ITodo } from '@/types/todoType';

export interface ITodoContext {
    todoList: ITodo[];
    setTodoList: Dispatch<SetStateAction<ITodo[]>>;
    removeTodoItem: (id: number) => void;
    addTodoItem?: (event: MouseEvent) => void;
    toggleCompleted: (id: number) => void;
}

export const TodoContext = createContext<ITodoContext | null>(null);
