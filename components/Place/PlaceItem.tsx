import React from "react";
import {
  Container,
  IconContainer,
  IconImage,
  TextContainer,
} from "./PlaceItem.style";
import CustomTxt from "../common/CustomTxt/CustomTxt";
import { Spacer } from "../common/spacer/Spacer";
import { scale } from "react-native-size-matters";
import Divider from "../Divider/Divider";

interface PlaceItemProps {
  name: string;
  address: string;
  iconUrl: string;
  onPlaceItemPress: () => void;
}

const PlaceItem = ({
  onPlaceItemPress,
  iconUrl,
  name,
  address,
}: PlaceItemProps) => {
  return (
    <Container onPress={onPlaceItemPress}>
      <IconContainer>
        <IconImage source={{ uri: iconUrl }} />
      </IconContainer>
      <Spacer width={scale(10)} />
      <TextContainer>
        <CustomTxt variant="title">{name}</CustomTxt>
        <Spacer height={scale(3)} />
        <CustomTxt variant="caption">{address}</CustomTxt>
        <Spacer height={scale(5)} />
        <Divider />
      </TextContainer>
    </Container>
  );
};

export default PlaceItem;
