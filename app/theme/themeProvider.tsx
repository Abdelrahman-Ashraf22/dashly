"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#1976d2",
        },
        success: {
          main: "#2e7d32",
        },
        background: {
          default: "#f5f5f5",
          paper: "#ffffff",
        },
        text: {
          primary: "#1a1a1a",
          secondary: "#000000",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#90caf9",
          light: "#bbdefb",
          dark: "#42a5f5",
        },
        success: {
          main: "#66bb6a",
        },
        background: {
          default: "#0a0a0a",
          paper: "#1a1a1a",
        },
        text: {
          primary: "#e0e0e0",
          secondary: "#b0b0b0",
        },
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});

export default function MUIThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
