import styled from "@emotion/native";
import Animated from "react-native-reanimated";
import { EdgeInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

type ContainerProp = {
  insets: EdgeInsets;
};

export const Container = styled(Animated.View)<ContainerProp>(
  ({ theme, insets }) => {
    return {
      height: scale(120) + (insets.bottom || scale(10)),
      backgroundColor: theme.colors.common.background,
      width: "100%",
      alignItems: "center",
    };
  }
);

export const HorizontalContainer = styled.View({
  flexDirection: "row",
  alignSelf: "flex-start",
  alignItems: "center",
  paddingHorizontal: scale(20),
});

export const IconContainer = styled.View(({ theme }) => {
  return {
    width: scale(65),
    height: scale(38),
    borderRadius: scale(65 / 2),
    backgroundColor: theme.colors.components.rideBottomSheet.footerRightIconBg,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: scale(10),
    flexDirection: "row",
  };
});

export const LeftIconContainer = styled.View(({ theme }) => {
  return {
    width: scale(38),
    height: scale(38),
    borderRadius: scale(38 / 2),
    backgroundColor: theme.colors.components.rideBottomSheet.footerLeftIconBg,
    alignItems: "center",
    justifyContent: "center",
    left: scale(-8),
  };
});

export const TextContainer = styled.View({
  flex: 1,
});

export const BtnContainer = styled.View({
  width: "100%",
  paddingHorizontal: scale(20),
});
