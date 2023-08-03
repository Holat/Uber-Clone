import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const Container = styled.TouchableOpacity(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    height: scale(50),
    paddingHorizontal: scale(15),
  };
});

export const IconContainer = styled.View(({ theme }) => {
  return {
    height: scale(45),
    width: scale(45),
    borderRadius: scale(45 / 2),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.components.placeItem.iconBg,
  };
});

export const TextContainer = styled.View(({ theme }) => {
  return {
    flex: 1,
    flexShrink: 1,
  };
});

export const IconImage = styled.Image(({ theme }) => {
  return {
    height: scale(20),
    width: scale(20),
    tintColor: theme.colors.components.placeItem.iconTint,
  };
});
