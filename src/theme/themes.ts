import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#addfff",
      },
      secondary: {
        main: "#A6A6A6",
      },
    },
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            '&:focus': {
              outline: 'none', // Remove the focus outline
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            '&:focus': {
              outline: 'none', // Remove the focus outline
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:focus': {
              outline: 'none', // Remove the focus outline
            },
          },
        },
      },
    },
});
  
export const darkTheme = createTheme({
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
    components: {
        MuiToggleButton: {
        styleOverrides: {
            root: {
            '&:focus': {
                outline: 'none', // Remove the focus outline
            },
            },
        },
        },
        MuiButton: {
        styleOverrides: {
            root: {
            '&:focus': {
                outline: 'none', // Remove the focus outline
            },
            },
        },
        },
        MuiIconButton: {
        styleOverrides: {
            root: {
            '&:focus': {
                outline: 'none', // Remove the focus outline
            },
            },
        },
        },
    },
});