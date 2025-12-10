/**
 * Цветовая палитра проекта
 */
export const colors = {
  dark: "#262323",
  white: "#ffffff",
  lightGray: "#D7D9E0",
  purple: "#AA56A8",
  purpleDark: "#964294",
  darkPurple: "#4E324B",
  pink: "#D32F73",
  green: "#00A67D",
  red: "#DF2B4A",
} as const;

/**
 * Градиент от белого к фиолетовому
 */
export const gradient = {
  from: colors.white,
  to: colors.purpleDark,
} as const;

/**
 * Массив всех цветов палитры для удобной итерации
 */
export const paletteColors = [
  { name: "dark", value: colors.dark },
  { name: "white", value: colors.white },
  { name: "lightGray", value: colors.lightGray },
  { name: "purple", value: colors.purple },
  {
    name: "gradient",
    value: `linear-gradient(to right, ${colors.white}, ${colors.purpleDark})`,
  },
  { name: "darkPurple", value: colors.darkPurple },
  { name: "pink", value: colors.pink },
  { name: "green", value: colors.green },
  { name: "red", value: colors.red },
] as const;
