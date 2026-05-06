import { type FC } from "react";
import { TodoContext } from "../../../hooks/useTodoContext";
import styles from './TodoPage.module.scss';
import PageTemplate from "../PageTemplate/PageTemplate";
import TodoList from "./TodoList/TodoList";
import TodoCreateForm from "./TodoCreateForm/TodoCreateForm";
import { useTodo } from "../../../hooks/useTodo";

const TodoPage: FC = () => {
    const { todoList, setTodoList, toggleCompleted, removeTodoItem, createTodoItem } = useTodo();

    return (
        <TodoContext.Provider value={{ 
            todoList, 
            setTodoList, 
            toggleCompleted,
            removeTodoItem 
        }}>
            <PageTemplate>
                <div className={styles.todoPage}>
                    <TodoCreateForm onCreateTodo={createTodoItem}/>
                    <TodoList />
                </div>
            </PageTemplate>
        </TodoContext.Provider>
    )
}

export default TodoPage;