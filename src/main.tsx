import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#addfff",
    },
    secondary: {
      main: "#cfcfcf",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#addfff",
    },
    secondary: {
      main: "#cfcfcf",
    },
  },
});

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={prefersDark ? darkTheme : lightTheme}>
    <App />
  </ThemeProvider>
);
