import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 160,
          textTransform: "none",
          fontSize: 16,
          fontWeight: 600,
          borderRadius: 8,
        },
        outlined: {
          color: "#404040",
          backgroundColor: "#eee",
          border: "1px solid #797979",
          "&:hover": {
            backgroundColor: "#eee",
            border: "1px solid #797979",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    htmlFontSize: 16,
    fontSize: 16,
    h4: {
      fontWeight: 600,
      fontSize: 24,
    },
    h6: {
      fontWeight: 500,
      fontSize: 20,
    },
  },
});

export default theme;
