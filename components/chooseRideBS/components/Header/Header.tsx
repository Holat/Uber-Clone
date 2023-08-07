import { View, Text } from "react-native";
import React from "react";
import { Container } from "./Header.style";
import CustomTxt from "@/components/common/CustomTxt/CustomTxt";
import { Spacer } from "@/components/common/spacer/Spacer";
import { scale } from "react-native-size-matters";
import Divider from "@/components/Divider/Divider";

const Header = () => {
  return (
    <Container>
      <CustomTxt variant="header">Choose your ride</CustomTxt>
      <Spacer height={scale(15)} />
      <Divider />
    </Container>
  );
};

export default Header;
