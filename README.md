# Лендинг "Обо мне"

Современный лендинг-страница, созданный с использованием Next.js, Tailwind CSS и shadcn/ui.

## Технологии

- **Next.js 16** (App Router) - React фреймворк
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - утилитарный CSS фреймворк
- **Prettier** - форматирование кода
- **ESLint** - линтинг кода

## Начало работы

Установите зависимости:

```bash
npm install
```

Запустите dev сервер:

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Скрипты

- `npm run dev` - запуск dev сервера
- `npm run build` - сборка для production
- `npm run start` - запуск production сервера
- `npm run lint` - проверка кода линтером
- `npm run lint:fix` - автоматическое исправление ошибок линтера
- `npm run format` - форматирование кода с помощью Prettier
- `npm run format:check` - проверка форматирования кода

## Структура проекта

```
landing/
├── app/              # App Router страницы и компоненты
│   ├── layout.tsx    # Корневой layout
│   ├── page.tsx      # Главная страница "Обо мне"
│   └── globals.css   # Глобальные стили
├── lib/              # Утилиты
│   └── utils.ts      # Утилита для объединения классов (cn)
├── public/           # Статические файлы
└── ...config files   # Конфигурационные файлы
```

## Настройка

### Prettier

Конфигурация Prettier находится в `.prettierrc`. Игнорируемые файлы указаны в `.prettierignore`.

### ESLint

Конфигурация ESLint находится в `eslint.config.mjs`. Настроена интеграция с Prettier.

## Разработка

Проект использует современный стек технологий и следует лучшим практикам разработки. Все файлы автоматически форматируются при сохранении (если настроено в IDE).
