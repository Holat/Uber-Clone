import styled from "@emotion/native";
import { scale } from "react-native-size-matters";
import { StyleSheet } from "react-native";

export const SDivider = styled.View(({ theme }) => {
  return {
    height: StyleSheet.hairlineWidth,
    width: "100%",
    backgroundColor: theme.colors.components.divider.BackgroundColor,
  };
});
