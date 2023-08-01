import { Theme } from "@emotion/react";
import { scale } from "react-native-size-matters";

export const shadows = {
  primary: (theme: Theme) => {
    return {
      shadowColor: theme.colors.common.shadowDef,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: scale(1.41),
      elevation: 2,
    };
  },
};

export type Shadows = typeof shadows;
