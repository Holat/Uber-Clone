import React from "react";
import { scale } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { SharedValue } from "react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper";

import {
  BtnContainer,
  Container,
  HorizontalContainer,
  IconContainer,
  LeftIconContainer,
  TextContainer,
} from "./Footer.style";
import Divider from "@/components/Divider/Divider";
import { Spacer } from "@/components/common/spacer/Spacer";
import CustomTxt from "@/components/common/CustomTxt/CustomTxt";
import { ActionBtn } from "@/components/common/ActionBtn";
import { RideItem } from "@/types/rideItem";
import { useTheme } from "@emotion/react";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";

interface FooterProps {
  selectedRide: RideItem;
  offset: SharedValue<number>;
}

const Footer = ({ selectedRide, offset }: FooterProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withTiming(offset.value) }],
    };
  });
  return (
    <Container style={animatedStyles} insets={insets}>
      <Divider />
      <Spacer height={scale(15)} />
      <HorizontalContainer>
        <IconContainer>
          <LeftIconContainer>
            <Ionicons
              name="person"
              size={scale(14)}
              color={theme.colors.components.rideBottomSheet.leftIconColor}
            />
          </LeftIconContainer>
          <Ionicons name="briefcase-sharp" size={scale(14)} />
        </IconContainer>
        <Spacer width={scale(10)} />
        <TextContainer>
          <CustomTxt variant="smallHeader">Personal</CustomTxt>
          <CustomTxt variant="caption">Apple Pay</CustomTxt>
        </TextContainer>
        <Ionicons
          name="chevron-forward"
          size={scale(16)}
          color={theme.colors.typography.body}
        />
      </HorizontalContainer>
      <Spacer height={scale(15)} />
      <BtnContainer>
        <ActionBtn text={`Choose: ${selectedRide.type}`} />
      </BtnContainer>
    </Container>
  );
};

export default Footer;
