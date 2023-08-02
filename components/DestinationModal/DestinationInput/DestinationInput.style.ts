import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const DisabledInput = styled.TextInput(({ theme }) => {
  return {
    minHeight: scale(30),
    width: "100%",
    padding: scale(10),
    backgroundColor:
      theme.colors.components.destinationInput.disabledBackground,
    borderRadius: scale(10),
  };
});

export const Input = styled.TextInput(({ theme }) => {
  return {
    minHeight: scale(30),
    width: "100%",
    padding: scale(10),
    backgroundColor: theme.colors.components.destinationInput.activeBackground,
    borderRadius: scale(10),
    color: theme.colors.typography.common,
  };
});
