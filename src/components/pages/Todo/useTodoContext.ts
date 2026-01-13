import { useContext, createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ITodo } from "../../../types/todo";

interface todoContext {
    todoList: ITodo[],
    setTodoList: Dispatch<SetStateAction<ITodo[]>>,
    addTodoItem?: (event: MouseEvent) => void,
    removeTodoItem?: (event: MouseEvent) => void
}

export const TodoContext = createContext<todoContext | null>(null);

export const useTodoContext = () => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error('useTodoContext must be used within <TodoContext.Provider>.')
    }

    return context as todoContext;
}