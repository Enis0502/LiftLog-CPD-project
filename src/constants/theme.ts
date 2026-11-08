export const Colors = {
  light: {
    cardBackground: "#ffffff",
    background: "#f1f4ee",

    text: {
      primary: "#1b1f1a",
      secondary: "#6b7268",
      highlight: "#4f7a00",
    },
  },
  dark: {
    cardBackground: "#20231f",
    background: "#2b342b",

    text: {
      primary: "#f6f7f4",
      secondary: "#7e847c",
      highlight: "#d7ff54",
    },
  },
} as const;

export type Theme = (typeof Colors)["light"];

export const Spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const FontSize = {
  xs: 18,
  sm: 20,
  md: 24,
  lg: 26,
  xxl: 40,
} as const;
