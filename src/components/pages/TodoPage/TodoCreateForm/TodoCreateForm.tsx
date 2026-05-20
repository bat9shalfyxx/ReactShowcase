import { memo, useState, type FC, type SubmitEvent } from 'react';

import CustomInput from '@/components/common/CustomInput/CustomInput';
import { useTodoContext } from '@/context/useTodoContext';

import styles from './TodoCreateForm.module.scss';

const TodoCreateForm: FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const createTodoItem = useTodoContext().createTodoItem;

    const submitHandler = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        createTodoItem(title, description);

        setTitle('');
        setDescription('');
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

export default memo(TodoCreateForm);
