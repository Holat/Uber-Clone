import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const BodyTxt = styled.Text(({ theme }) => {
  return {
    fontSize: scale(14),
    color: theme.colors.typography.body,
  };
});

export const TitleTxt = styled.Text(({ theme }) => {
  return {
    fontSize: scale(15),
    color: theme.colors.typography.common,
    fontWeight: "700",
  };
});

export const CaptionTxt = styled.Text(({ theme }) => {
  return {
    fontSize: scale(13),
    color: theme.colors.typography.body,
  };
});
