import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { AppContainer } from "./AppContainer.tsx";
import { grey } from "@mui/material/colors";
import { VolumeProvider } from "./context/VolumeContext.tsx";

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
    background: {
      paper: grey[800],
    },
  },
});

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={prefersDark ? darkTheme : lightTheme}>
    <VolumeProvider>
      <AppContainer />
    </VolumeProvider>
  </ThemeProvider>
);
