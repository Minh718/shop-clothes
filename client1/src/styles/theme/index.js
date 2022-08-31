import { createTheme } from "@mui/material/styles";
export const colors = {
  primary: "#A66CFF",
  secondary: "#AF7AB3",
  warning: "#e53637",

  white: "#fff",
  black: "#000",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 678,
      md: 900,
      lg: 1200,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          justifyContent: "space-between",
          padding: "30px 8px",
          boxSizing: "border-box",
          background: colors.secondary,
          color: colors.white,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: colors.primary,
        },
      },
    },
  },
});
