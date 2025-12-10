# Цветовая палитра проекта

## Описание

Цветовая палитра проекта состоит из 9 цветов, включая градиент.

## Цвета

| Цвет | HEX | Tailwind класс | Описание |
|------|-----|----------------|----------|
| Dark | `#262323` | `bg-dark`, `text-dark` | Темный цвет |
| White | `#ffffff` | `bg-white`, `text-white` | Белый |
| Light Gray | `#D7D9E0` | `bg-light-gray`, `text-light-gray` | Светло-серый |
| Purple | `#AA56A8` | `bg-purple`, `text-purple` | Фиолетовый |
| Purple Dark | `#964294` | `bg-purple-dark`, `text-purple-dark` | Темно-фиолетовый |
| Dark Purple | `#4E324B` | `bg-dark-purple`, `text-dark-purple` | Очень темный фиолетовый |
| Pink | `#D32F73` | `bg-pink`, `text-pink` | Розовый |
| Green | `#00A67D` | `bg-green`, `text-green` | Зеленый |
| Red | `#DF2B4A` | `bg-red`, `text-red` | Красный |

## Градиент

Градиент от белого к фиолетовому:
- От: `#ffffff` (white)
- До: `#964294` (purple-dark)

Использование в CSS:
```css
background: linear-gradient(to right, #ffffff, #964294);
```

## Использование

### В TypeScript/JavaScript

```typescript
import { colors } from "@/lib/colors";

// Использование цветов
const purpleColor = colors.purple; // "#AA56A8"
const gradient = `linear-gradient(to right, ${colors.white}, ${colors.purpleDark})`;
```

### В Tailwind CSS

Все цвета доступны как классы Tailwind:

```tsx
// Фон
<div className="bg-purple">...</div>
<div className="bg-pink">...</div>

// Текст
<p className="text-green">...</p>
<p className="text-red">...</p>

// Границы
<div className="border-4 border-purple">...</div>
```

### Компонент палитры

Для отображения палитры используйте компонент:

```tsx
import ColorPalette from "@/app/components/ColorPalette";

<ColorPalette />
```

## Демонстрация

Посмотреть все цвета в действии можно на странице `/palette`.

## Файлы

- `lib/colors.ts` - Константы цветов для использования в коде
- `app/components/ColorPalette.tsx` - Компонент для отображения палитры
- `app/globals.css` - CSS переменные и конфигурация Tailwind

