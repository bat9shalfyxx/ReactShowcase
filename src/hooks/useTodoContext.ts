import { useContext } from 'react';

import { TodoContext, type ITodoContext } from '@/context/TodoContext';

export const useTodoContext = () => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error('useTodoContext must be used within <TodoContext.Provider>.');
    }

    return context as ITodoContext;
};
