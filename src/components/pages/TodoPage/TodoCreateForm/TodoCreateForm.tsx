import { useState, type FC, type FormEvent } from 'react';
import CustomInput from '@/components/UI/CustomInput/CustomInput';
import styles from './TodoCreateForm.module.scss';

interface ITodoCreateForm {
    onCreateTodo: (title: string, description?: string | undefined) => void;
}

const TodoCreateForm: FC<ITodoCreateForm> = ({ onCreateTodo }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string | undefined>(undefined);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onCreateTodo(title, description);

        setTitle('');
        setDescription(undefined);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.input_holder}>
                <CustomInput placeholder="Название задачи" value={title} onChange={e => setTitle(e.target.value)} />

                <CustomInput
                    placeholder="Описание (необязательно)"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <button className={styles.btn} type="submit">
                Create
            </button>
        </form>
    );
};

export default TodoCreateForm;
