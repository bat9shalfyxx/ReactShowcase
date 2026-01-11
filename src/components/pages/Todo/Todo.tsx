import { type FC, useEffect, useState } from "react";
import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import type { ITodo } from "../../../types/api/todo";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from './Todo.module.scss';

const Todo: FC = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        axios.get<ITodo[]>(('https://jsonplaceholder.typicode.com/todos?_limit=20'))
            .then((res: AxiosResponse<ITodo[]>) => {
                setTodoList(res.data);
            })
            .catch((err: AxiosError) => {
                console.log(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <span>Loading...</span>
    }

    if (error) {
        return <span>Error: {error}</span>
    }

    return (
        <PageTemplate>
            <div className={styles.todoPage}>
                todo <br />
                will be soon...
                {/* {todoList.map((todo: ITodo): React.ReactNode => {
                    // return <span>{todo.title} <br /></span>
                })} */}
            </div>
        </PageTemplate>
    )
}

export default Todo;