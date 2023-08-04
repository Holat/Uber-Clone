import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledPressable, Container, Square } from "./MapSearchBar.style";
import CustomTxt from "../common/CustomTxt/CustomTxt";
import { FadeInDown } from "react-native-reanimated";

interface MapSearchBarProps {
  onPress: () => void;
}

export const MapSearchBar = ({ onPress }: MapSearchBarProps) => {
  const inset = useSafeAreaInsets();
  return (
    <Container entering={FadeInDown} inset={inset}>
      <StyledPressable onPress={onPress}>
        <Square>
          <Ionicons name="ios-location" size={15} color="black" />
        </Square>
        <CustomTxt variant="body">Where to?</CustomTxt>
      </StyledPressable>
    </Container>
  );
};
