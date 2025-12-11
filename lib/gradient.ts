import { useState, useRef, useCallback } from 'react';

/**
 * Типы для градиентного эффекта текста
 */
export interface MousePosition {
  [key: string]: { x: number; y: number };
}

export interface ElementRefs {
  [key: string]: HTMLAnchorElement | HTMLDivElement | HTMLSpanElement | null;
}

export interface GradientStyle {
  WebkitBackgroundClip?: string;
  WebkitTextFillColor?: string;
  backgroundClip?: string;
  color?: string;
  backgroundImage?: string;
}

/**
 * Хук для управления градиентным эффектом при наведении
 * @returns Объект с состоянием, рефами и обработчиками
 */
export function useGradientHover() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({});
  const elementRefs = useRef<ElementRefs>({});

  const handleMouseMove = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement | HTMLSpanElement>,
      key: string
    ) => {
      const element = elementRefs.current[key];
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition((prev: MousePosition) => ({
        ...prev,
        [key]: { x, y },
      }));
    },
    []
  );

  const handleMouseLeave = useCallback((key: string) => {
    setMousePosition((prev: MousePosition) => {
      const newPos = { ...prev };
      delete newPos[key];
      return newPos;
    });
  }, []);

  return {
    mousePosition,
    elementRefs,
    handleMouseMove,
    handleMouseLeave,
  };
}

/**
 * Создает стили для градиентного эффекта текста, следующего за курсором
 * @param key - Уникальный ключ элемента
 * @param mousePosition - Объект с позициями курсора для каждого элемента
 * @param linkRefs - Рефы на DOM элементы
 * @param isLargeText - Флаг для большого текста (использует другой градиент)
 * @returns Объект со стилями для применения к элементу
 */
export function getGradientStyle(
  key: string,
  mousePosition: MousePosition,
  linkRefs: React.MutableRefObject<ElementRefs>,
  isLargeText: boolean = false
): GradientStyle {
  const pos = mousePosition[key];
  if (!pos) {
    return {
      WebkitBackgroundClip: 'initial',
      WebkitTextFillColor: 'initial',
      backgroundClip: 'initial',
    };
  }

  const element = linkRefs.current[key];
  if (!element) {
    return {
      WebkitBackgroundClip: 'initial',
      WebkitTextFillColor: 'initial',
      backgroundClip: 'initial',
    };
  }

  const rect = element.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Вычисляем расстояние от центра до курсора
  const distance = Math.sqrt(
    Math.pow(pos.x - centerX, 2) + Math.pow(pos.y - centerY, 2)
  );
  const maxDistance = Math.sqrt(
    Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
  );

  // Нормализуем позицию курсора в процентах от размера элемента
  // Центр элемента = 50% 50%
  const normalizedX = (pos.x / rect.width) * 100;
  const normalizedY = (pos.y / rect.height) * 100;

  // Создаем радиальный градиент от позиции курсора
  // Чем ближе к центру, тем больше пурпурного в центре
  const gradientSize = Math.min(150, 100 + (distance / maxDistance) * 50);

  // Для большого текста используем другой градиент с меньшей пурпурной областью
  const gradientString = isLargeText
    ? `radial-gradient(circle ${gradientSize}px at ${normalizedX}% ${normalizedY}%, var(--color-purple) 0%, var(--color-purple) 50%, white 100%)`
    : `radial-gradient(circle ${gradientSize}px at ${normalizedX}% ${normalizedY}%, var(--color-purple) 0%, white 50%, white 100%)`;

  return {
    backgroundImage: gradientString,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };
}
