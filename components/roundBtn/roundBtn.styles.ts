import styled from "@emotion/native";
import { EdgeInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

interface StyledPressableProps {
  inset: EdgeInsets;
}

export const StyledPressable = styled.Pressable<StyledPressableProps>(
  ({ theme, inset }) => {
    return {
      width: scale(45),
      height: scale(45),
      borderRadius: scale(45 / 2),
      backgroundColor: "#fff",
      position: "absolute",
      top: inset.top + scale(10),
      left: scale(10),
      ...theme.shadows.primary(theme),
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
    };
  }
);
