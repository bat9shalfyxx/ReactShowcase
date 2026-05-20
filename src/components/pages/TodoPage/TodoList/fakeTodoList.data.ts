import type { ITodo } from '@/types/todo.type';

export const fakeTodoList: ITodo[] = [
    {
        id: crypto.randomUUID(),
        title: 'дописать реферат',
        completed: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'доделать лабы',
        completed: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Изучить SSH на Linux'е (управлять с домашней ОС (винды))",
        completed: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'анжумания',
        completed: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'не забыть',
        completed: false,
    },
    {
        id: crypto.randomUUID(),
        title: 'выпрямить спину',
        completed: false,
    },
];
