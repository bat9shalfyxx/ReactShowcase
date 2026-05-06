import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import type { ITodo } from "../types/todoType";
import { useTodoContext } from "./useTodoContext";

interface IUseTodoFetchReturn {
    loading: boolean;
    error: string | null;
}

export const useTodoFetch = (limit: number): IUseTodoFetchReturn => {
    const { setTodoList } = useTodoContext();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTodos = async () => {
        setLoading(true);
        setError(null);

        const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
                .then((res: AxiosResponse<ITodo[]>) => {
                    setTodoList(res.data);
                })
                .catch((error: AxiosError) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                });

        return response;
    };

    useEffect(() => {
        fetchTodos();
    }, [limit]);

    return { loading, error };
}