import { type Dispatch, type SetStateAction, useContext, createContext } from "react";
import type { ITodo } from "../types/todoType";

interface ITodoContext {
    todoList: ITodo[];
    setTodoList: Dispatch<SetStateAction<ITodo[]>>;
    removeTodoItem: (id: number) => void;
    addTodoItem?: (event: MouseEvent) => void;
    toggleCompleted: (id: number) => void;
}

export const TodoContext = createContext<ITodoContext | null>(null);

export const useTodoContext = () => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error('useTodoContext must be used within <TodoContext.Provider>.')
    }

    return context as ITodoContext;
}