import React from "react";
import { StyledPressable } from "./roundBtn.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";

interface RoundBtnProp {
  icon: "ios-menu-outline" | "ios-arrow-back-outline";
  onPress?: () => void;
}

const RoundBtn = ({ icon }: RoundBtnProp) => {
  const inset = useSafeAreaInsets();
  return (
    <StyledPressable inset={inset}>
      <Ionicons name={icon} size={scale(26)} color="black" />
    </StyledPressable>
  );
};
// <Ionicons name="ios-menu-outline" size={24} color="black" />
export default RoundBtn;
