import { type FC, useState, useEffect } from "react";
import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import type { ITodo } from "../../../../types/todo";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";
import { useTodoContext } from "../useTodoContext";

const TodoList: FC = ( ) => {
    const { todoList, setTodoList } = useTodoContext();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=6')
            .then((res: AxiosResponse<ITodo[]>) => {
                setTodoList(res.data);
            })
            .catch((err: AxiosError) => {
                setError(err.message);
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    });

    if (loading) {
        return <span>Loading...</span>
    }

    if (error) {
        return <span>Error: {error}</span>
    }

    return (
        <div className={styles.list}>
            {todoList.map((todo: ITodo): React.ReactNode => {
                return (
                    <div className={styles.todoList} key={todo.id}>
                        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;