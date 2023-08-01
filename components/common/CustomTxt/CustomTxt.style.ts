import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const BodyTxt = styled.Text(({ theme }) => {
  return {
    fontSize: scale(14),
    color: theme.colors.typography.body,
  };
});
