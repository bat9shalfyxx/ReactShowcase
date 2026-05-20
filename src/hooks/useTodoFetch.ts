import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

import { useTodoContext } from '@/context/useTodoContext';
import type { ITodo } from '@/types/todo.type';

interface IUseTodoFetchReturn {
    loading: boolean;
    error: string | null;
}

export const useTodoFetch = (limit: number): IUseTodoFetchReturn => {
    const { setTodoList } = useTodoContext();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            setError(null);

            const response = await axios
                .get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
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

        fetchTodos();
    }, [limit, setTodoList]);

    return { loading, error };
};
