// src/theme/theme.ts

export const colors = {
  background: "#F7F8FA",

  white: "#FFFFFF",

  primary: "#1E3A8A",

  text: "#111111",

  textSecondary: "#666666",

  yellow: "#FACC15",

  border: "#E5E7EB",
};

export const spacing = {
  xs: 4,

  sm: 8,

  md: 16,

  lg: 20,

  xl: 24,

  xxl: 32,
};

export const layout = {

  screenPadding: 20,

  sectionSpacing: 35,

  headerBottom: 20,
  gridGap: 12,
  maxContentWidth: 520,
};

export const radius = {

  sm: 8,

  md: 14,

  lg: 22,

  full: 999,

};

export const typography = {

  title: {
    fontSize: 24,
    fontWeight: "500" as const,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "500" as const,
  },

  body: {
    fontSize: 16,
    fontWeight: "400" as const,
  },

  small: {
    fontSize: 13,
    fontWeight: "400" as const,
  },

};