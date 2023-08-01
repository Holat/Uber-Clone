import styled from "@emotion/native";
import { EdgeInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { Dimensions } from "react-native";

interface ContainerProps {
  inset: EdgeInsets;
}

export const Container = styled.View<ContainerProps>(({ inset }) => {
  return {
    top: inset.top + scale(10),
    right: 15,
    position: "absolute",
    alignItems: "center",
  };
});

export const StyledPressable = styled.Pressable(({ theme }) => {
  return {
    backgroundColor: theme.colors.common.background,
    ...theme.shadows.primary(theme),
    alignItems: "center",
    padding: scale(15),
    minHeight: scale(30),
    width: Dimensions.get("window").width - scale(90),
    borderRadius: scale(45 / 2),
    flexDirection: "row",
  };
});

export const Square = styled.View(({ theme }) => {
  return {
    // width: scale(7),
    // height: scale(7),
    // backgroundColor: theme.colors.components.mapSearchBar.squareClr,
    alignItems: "center",
    justifyContent: "center",
    marginRight: scale(20),
  };
});
