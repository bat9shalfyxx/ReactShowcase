> **Пет-проект / Портфолио** — современное веб-приложение для демонстрации навыков разработки на React + TypeScript.

**[ Посмотреть демо (https://bat9shalfyxx.github.io/ReactShowcase/#/)]**

## О проекте:
Проект создан для демонстрации моих навыков в разработке клиентских приложений.
Здесь я показываю свой подход к архитектуре, типизации, работе с состоянием и проч.

**Что внутри:**
- Управление todo-листом с реализацией CRUD
- Кастомные UI-компоненты (Input, Button и др.)

## Используемые технологии:

### Core
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Styling
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### State Management
![React Context](https://img.shields.io/badge/Context_API-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Hooks](https://img.shields.io/badge/React_Hooks-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### Tools
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

___
## Мои наработки:
Здесь я показал (или чему научился):
| Техника | Где используется |
|---------|------------------|
| ✅ Кастомные хуки | `useTodoFetch` (вынос логики запросов) |
| ✅ Композиция компонентов | `CustomInput` (проброс всех пропсов) |
| ✅ Работа с формами | Кастомный `TodoCreateForm` с валидацией |
| ✅ Адаптивные стили | `clamp()` для шрифтов, медиа-запросы |
| ✅ Управление состоянием | Context + кастомный редюсер для тудушек |
| ✅ Типизация API | Интерфейсы для ответов JSONPlaceholder |

## Качество кода:
Проект использует строгие настройки линтинга и форматирования:
- **ESLint** — проверка качества кода, TypeScript правил, React Hooks
- **Prettier** — автоматическое форматирование (единый стиль кода)

```bash
npm run lint:fix #проверка (без исправлений)
npm run lint #исправить код

npm run format:check #проверить форматирование
npm run format #отформатировать
```

## Быстрый старт:
Чтобы запустить проект локально:
```bash
git clone https://github.com/bat9shalfyxx/ReactShowcase.git  # клонировать репозиторий

cd ./ReactShowcase # Перейти в папку проекта

npm install # установить зависимости

npm run dev # запустить дев-сервер
```
