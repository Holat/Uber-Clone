import { colors, Colors } from "./Colors";
import { Shadows, shadows } from "./Shadows";

export const theme = {
  colors,
  shadows,
};

declare module "@emotion/react" {
  export interface Theme {
    colors: Colors;
    shadows: Shadows;
  }
}
