"use client";
import { useColorScheme } from "@mui/material/styles";
import { IconButton, Tooltip, useMediaQuery } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const mobileScreen = useMediaQuery("(min-width: 500px)");

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // Prevent hydration mismatch
  if (!mode) {
    return <IconButton disabled />;
  }

  return (
    <>
      {mobileScreen && (
        <Tooltip
          title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        >
          <IconButton
            onClick={toggleTheme}
            color="inherit"
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}
