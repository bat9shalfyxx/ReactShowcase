import { type FC } from 'react';

import PageTemplate from '@/components/layout/PageTemplate/PageTemplate';
import { TodoContext } from '@/context/TodoContext';
import { useTodo } from '@/hooks/useTodo';

import TodoCreateForm from './TodoCreateForm/TodoCreateForm';
import TodoList from './TodoList/TodoList';
import styles from './TodoPage.module.scss';

const TodoPage: FC = () => {
    const { todoList, setTodoList, toggleCompleted, removeTodoItem, createTodoItem } = useTodo();

    return (
        <TodoContext.Provider
            value={{
                todoList,
                setTodoList,
                toggleCompleted,
                removeTodoItem,
            }}
        >
            <PageTemplate>
                <div className={styles.todoPage}>
                    <TodoCreateForm onCreateTodo={createTodoItem} />
                    <TodoList />
                </div>
            </PageTemplate>
        </TodoContext.Provider>
    );
};

export default TodoPage;
