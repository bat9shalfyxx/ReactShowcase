import { type FC, useState, useEffect } from "react";
import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import type { ITodo } from "../../../../../shared/types/todoType";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";
import { useTodoContext } from "../useTodoContext";

const fakeTodoList: ITodo[] = [
    {
        id: Number(crypto.randomUUID()),
        title: "дописать реферат",
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: "доделать лабы",
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: "Изучить SSH на Linux'е (управлять с домашней ОС (винды))",
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: "анжумания",
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: "не забыть",
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: "выпрямить спину",
        completed: false,
    },
]

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
            })
            .finally(() => {
                setLoading(false);
            })
    }, [setTodoList]);
        
    if (loading) {
        return <span>Loading...</span>
    }
    
    if (error) {
        console.log(error)
        setTodoList(fakeTodoList);
    }

    return (
        <div className={styles.list}>
            {todoList.length ? (
                todoList.map((todo: ITodo, index): React.ReactNode =>  (
                    <div className={styles.todoList} key={todo.id}>
                        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} index={index + 1}/>
                    </div>
                ))
            ) : (
                <span>You've completed all your tasks, good job!</span>
            )}
        </div>
    )
}

export default TodoList;