import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#addfff",
    },
    secondary: {
      main: "#cfcfcf",
    },
  },
});

<<<<<<< Updated upstream
=======
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#addfff",
    },
    secondary: {
      main: "#addfff",
    },
  },
});

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

>>>>>>> Stashed changes
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
