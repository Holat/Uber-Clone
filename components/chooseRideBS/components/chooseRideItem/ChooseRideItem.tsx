import React from "react";
import { CarImage, StyledPressable } from "./ChooseRideItem.style";

interface ChooseRideItemProps {
  title: string;
  price: string;
  description: string;
  eta: string;
  maxPassanger: number | null;
  selected: boolean;
  onPress: () => void;
  variant: "compact" | "expanded";
}

const ChooseRideItem = ({ selected, onPress }: ChooseRideItemProps) => {
  return (
    <StyledPressable selected={selected} onPress={onPress}>
      <CarImage source={require("../../../../assets/images/Lux.jpg")} />
    </StyledPressable>
  );
};

export default ChooseRideItem;
