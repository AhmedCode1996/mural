export const COLORS = {
  primary: "#00C27A",
  secondary: "#BED7FF",
  tertiary: '#BE53FF',
  neutral: {
    black: "#141522",
    lightBlack: '#1F1F1F',
    white: "#FFFFFF",
    boldWhite: '#EDEDDB',
    yellow: '#FFAA00',
    lightYellow: '#ffed87'
  },
  label: {
    blue: "#EAF8FF",
    green: "#EFF6E9",
    red: "#FFF4F3",
    yellow: "#FFF3E0",
  },
  transparent: {
    black10: "rgba(0, 0, 0, 0.1)",
    black20: "rgba(0, 0, 0, 0.2)",
    black30: "rgba(0, 0, 0, 0.3)",
    black100: "rgba(0, 0, 0, 1)",
  },
};
export const TYPOGRAPHY = {
  xs: `${12 / 16}rem`,
  sm: `${14 / 16}rem`,
  base: `${16 / 16}rem`,
  lg: `${18 / 16}rem`,
  xl: `${24 / 16}rem`,
  xl2: `${32 / 16}rem`,
  xl3: `${42 / 16}rem`,
  xl4: `${72 / 16}rem`,
};

export const FONT_FAMILY = {
  ubuntu: "'Ubuntu', sans-serif",
  inter: "'Inter', sans-serif",
};

export const BREAKPOINTS = {
  tabletMax: 950,
};

export const QUERIES = {
  tabletAndDown: `(max-width:${BREAKPOINTS.tabletMax / 16}rem)`,
};
