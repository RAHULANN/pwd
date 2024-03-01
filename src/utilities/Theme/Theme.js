import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Sf pro Display"].join(","),
      textTransform: "none",
      fontSize: 16,
    },

    h1: {
      fontSize: 96,
      fontWeight: 600,
    },
    h2: {
      fontSize: 64,
      fontWeight: 600,
    },
    h3: {
      fontSize: 38,
      fontWeight: 700,
      letterSpacing: 1.25,
      color: "#2C2C2E",
    },
    h4: {
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: 1.5,
      color: "#222224",
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 29,
      fontWeight: 600,
      letterSpacing: 1,
      color: "#2A4596",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
    },

    body1: {
      fontSize: 19,
      color: "#636366",
      fontWeight: 500,
      letterSpacing: 1.5,
    },

    body2: {
      fontSize: 20,
      letterSpacing: 0.5,

      fontWeight: 600,
      color: "#3A3A3C",
    },

    body3: {
      fontSize: 25,
      letterSpacing: 1.5,

      fontWeight: 600,
      color: "#3A3A3C",
    },

    body4: {
      fontSize: 20,
      letterSpacing: 1.5,

      fontWeight: 500,
      color: "#3A3A3C",
    },
    button1: {
      fontSize: 16,

      fontWeight: 500,
    },

    button2: {
      fontSize: 13,
      color: "#3A3A3C",
      fontWeight: 600,
      letterSpacing: 1.25,
    },

    button3: {
      fontSize: 16,

      fontWeight: 600,
      letterSpacing: 1,
      color: "#3A3A3C",
    },
    callout: {
      fontSize: 20,
      letterSpacing: 0.71,
      fontWeight: 500,
      color: "#222224",
    },
    level: {
      fontSize: 20,

      fontWeight: 400,
      letterSpacing: 4,
      color: "#222224",
    },
  },
  palette: {
    primary: {
      main: "#4996C9",
      text: "#1B1D1F",
      error: "#F12A16",
      onText: "#FFFFFF",
      border: "#D9D9D9",
      container: "#E9F0F4",
      button: "#2A4596",
      bg: "#FFFFFF",
      disabled: "#B2B9C0",
    },
    secondary: {
      main: "#80B83D",
      text: "#5C5C5C",
      onText: "#FFFFFF",
    },
    tertiary: {
      main: "#B8B8B8",
      text: "#B8B8B8",
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            // color: red[500],
            // backgroundColor: grey[400],
            borderBottom: "none",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",

        disableRipple: true,
      },

      variant: "text",
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const AppThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;
