import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { AppLayout } from "./AppLayout.tsx";
import { VolumeProvider } from "./context/VolumeContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme/themes.ts";
import AppRouter from "./AppRouter.tsx";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={prefersDark ? darkTheme : lightTheme}>
    <VolumeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </VolumeProvider>
  </ThemeProvider>
);
