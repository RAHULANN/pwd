import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
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
      fontSize: 48,
      fontWeight: 600,
    },
    h4: {
      fontSize: 32,
      fontWeight: 600,
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
      fontSize: 16,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
    },

    body1: {
      fontSize: 16,

      fontWeight: 400,
    },

    body2: {
      fontSize: 14,

      fontWeight: 400,
    },
    button: {
      fontSize: 16,

      fontWeight: 600,
    },
    level: {
      fontSize: 12,

      fontWeight: 600,
    },
    caption: {
      fontSize: 12,

      fontWeight: 400,
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
      bg: "#F7F7FB",
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
