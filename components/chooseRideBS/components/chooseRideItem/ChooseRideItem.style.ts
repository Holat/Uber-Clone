import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

type StyledPressableProp = {
  selected: boolean;
};

export const StyledPressable = styled.Pressable<StyledPressableProp>(
  ({ theme, selected }) => {
    return {
      flexDirection: "row",
      borderColor: selected
        ? theme.colors.components.chooseRideItem.selectedBorderColor
        : theme.colors.components.chooseRideItem.borderColor,
      borderWidth: scale(2),
      height: scale(85),
      alignItems: "center",
      borderRadius: scale(15),
      paddingHorizontal: scale(10),
      marginHorizontal: scale(10),
      overflow: "hidden",
    };
  }
);

export const CarImage = styled.Image({
  width: scale(80),
  resizeMode: "contain",
});

export const TextContainer = styled.View({
  flexDirection: "row",
  flexShrink: 1,
});

export const Container = styled.View({
  flex: 1,
});

export const IconContainer = styled.View({
  flexDirection: "row",
  flexShrink: 1,
  alignItems: "center",
});
