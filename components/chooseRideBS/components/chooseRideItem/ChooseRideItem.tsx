import React from "react";
import { scale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";

import {
  CarImage,
  Container,
  IconContainer,
  StyledPressable,
  TextContainer,
} from "./ChooseRideItem.style";
import { Spacer } from "@/components/common/spacer/Spacer";
import CustomTxt from "@/components/common/CustomTxt/CustomTxt";
import { useDate } from "@/hooks/useDate";

interface ChooseRideItemProps {
  title: string;
  price: string;
  description: string;
  eta: number;
  maxPassenger: number | null;
  selected: boolean;
  onPress: () => void;
  variant: "compact" | "expanded";
}

const ChooseRideItem = ({
  selected,
  onPress,
  title,
  maxPassenger,
  variant,
  description,
  price,
  eta,
}: ChooseRideItemProps) => {
  const { date } = useDate();
  const isExtended = variant === "expanded";
  const formattedEta = date?.add(eta, "minute").format("HH:mm");

  return (
    <StyledPressable selected={selected} onPress={onPress}>
      <CarImage source={require("../../../../assets/images/Lux.jpg")} />
      <Spacer width={scale(5)} />
      <TextContainer>
        <Container>
          <IconContainer>
            <CustomTxt variant="header">{title}</CustomTxt>
            <Spacer width={scale(5)} />
            {maxPassenger && (selected || isExtended) ? (
              <>
                <Ionicons name="person" size={scale(14)} color="black" />
                <CustomTxt variant="body">{maxPassenger.toString()}</CustomTxt>
              </>
            ) : null}
          </IconContainer>
          {!isExtended ? (
            <CustomTxt variant="body">
              {selected
                ? `${formattedEta} • ${eta} mins to arrival`
                : `${formattedEta}`}
            </CustomTxt>
          ) : null}
          {isExtended ? (
            <CustomTxt variant="caption">{description}</CustomTxt>
          ) : null}
        </Container>
        <CustomTxt variant="header">{price}</CustomTxt>
      </TextContainer>
    </StyledPressable>
  );
};

export default ChooseRideItem;
