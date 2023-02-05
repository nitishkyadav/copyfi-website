import { ReactNode, useMemo } from "react";

import { CssBaseline, StyledEngineProvider } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

type ThemeCustomizationProps = {
  children: ReactNode;
};

export default function ThemeCustomization({
  children,
}: ThemeCustomizationProps) {
  const themes = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "'Manrope', 'Helvetica', 'Arial', sans-serif",
          h1: {
            fontSize: 82,
            fontWeight: "bold",
          },
          h2: {
            fontSize: 50,
            fontWeight: "bold",
          },
          h3: {
            fontSize: 42,
            fontWeight: "bold",
          },
          h4: {
            fontSize: 32,
            fontWeight: "bold",
          },
        },
        palette: {
          primary: {
            main: "#3DB5F1",
          },
          text: {
            primary: "#fff",
            secondary: "#3DB5F1",
          },
          background: {
            default: "#111518",
            paper: "#13171A",
          },
        },
      }),
    []
  );
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
