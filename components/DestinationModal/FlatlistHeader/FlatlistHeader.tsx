import { View, Text } from "react-native";
import React from "react";

import {
  Container,
  DecoratorCircle,
  DecoratorCont,
  DecoratorLine,
  DecoratorSquare,
  HorizonatalCont,
  InputContainer,
} from "./FlatlistHeader.style";
import DestinationInput from "../DestinationInput/DestinationInput";
import { Spacer } from "@/components/common/spacer/Spacer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import Divider from "@/components/Divider/Divider";

const FlatlistHeader = () => {
  const inset = useSafeAreaInsets();
  return (
    <>
      <Container>
        <Spacer height={inset.top + scale(10)} />
        <HorizonatalCont>
          <DecoratorCont>
            <DecoratorCircle />
            <DecoratorLine />
            <DecoratorSquare />
          </DecoratorCont>
          <Spacer width={scale(10)} />
          <InputContainer>
            <DestinationInput disabled placeholder="Current location" />
            <Spacer height={scale(10)} />
            <DestinationInput />
          </InputContainer>
        </HorizonatalCont>
      </Container>
      <Spacer height={scale(10)} />
      <Divider />
    </>
  );
};

export default FlatlistHeader;
