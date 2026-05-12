import type { ITodo } from '@/types/todoType';

export const fakeTodoList: ITodo[] = [
    {
        id: Number(crypto.randomUUID()),
        title: 'дописать реферат',
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: 'доделать лабы',
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: "Изучить SSH на Linux'е (управлять с домашней ОС (винды))",
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: 'анжумания',
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: 'не забыть',
        completed: false,
    },
    {
        id: Number(crypto.randomUUID()),
        title: 'выпрямить спину',
        completed: false,
    },
];
