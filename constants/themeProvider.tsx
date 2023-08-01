import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import React, { ReactNode } from "react";
import { theme } from "./theme";

interface ThemeProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProvider) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
