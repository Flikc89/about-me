/**
 * Утилиты для работы со шрифтами
 */

export const fontClasses = {
  heading: 'heading',
  body: 'text-body',
  cardHeading: 'card-heading',
  contact: 'contact-text',
} as const;

/**
 * Tailwind классы для шрифтов
 */
export const fontTailwind = {
  pixeloid: 'font-[var(--font-pixeloid-sans)]',
  hack: 'font-[var(--font-hack)]',
} as const;
