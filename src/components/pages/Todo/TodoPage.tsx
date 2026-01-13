import type { ITodo } from "../../../types/todo";
import { type FC, useState } from "react";
import { TodoContext } from "./useTodoContext";
import styles from './TodoPage.module.scss';
import PageTemplate from "../PageTemplate/PageTemplate";
import TodoList from "./TodoList/TodoList";

const TodoPage: FC = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    // const removeTodoItem = (event: MouseEvent, id: number) => {
    //     setTodoList(todoList.filter((todoToDelete) => todoToDelete.id));
    // }
    
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