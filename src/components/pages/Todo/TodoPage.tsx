import type { ITodo } from "../../../types/todo";
import type { FC } from "react"; 
import { useState } from "react";
import styles from './TodoPage.module.scss';
import PageTemplate from "../PageTemplate/PageTemplate";
import TodoList from "./TodoList/TodoList";
import { TodoContext } from "./useTodoContext";

const TodoPage: FC = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    
    return (
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            <PageTemplate>
                <div className={styles.todoPage}>
                    <TodoList />
                </div>
            </PageTemplate>
        </TodoContext.Provider>
    )
}

export default TodoPage;