import { type FC, useState } from "react";
import type { ITodo } from "../../../../shared/types/todoType";
import { TodoContext } from "./useTodoContext";
import styles from './TodoPage.module.scss';
import PageTemplate from "../PageTemplate/PageTemplate";
import TodoList from "./TodoList/TodoList";

const TodoPage: FC = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const removeTodoItem = (id: number) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id)
        setTodoList(updatedTodoList);
    }

    const toggleCompleted = (id: number) => {
        const updatedTodoList = todoList.map((todo: ITodo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        })

        setTodoList(updatedTodoList);
    }

    return (
        <TodoContext.Provider value={{ 
            todoList, 
            setTodoList, 
            toggleCompleted,
            removeTodoItem 
        }}>
            <PageTemplate>
                <div className={styles.todoPage}>
                    <TodoList/>
                </div>
            </PageTemplate>
        </TodoContext.Provider>
    )
}

export default TodoPage;