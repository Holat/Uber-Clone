import { View, Text } from "react-native";
import React from "react";
import { Container } from "./SectionHeader.style";
import CustomTxt from "@/components/common/CustomTxt/CustomTxt";
import { Spacer } from "@/components/common/spacer/Spacer";
import { scale } from "react-native-size-matters";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <Container>
      <Spacer width={scale(20)} />
      <CustomTxt variant="header">{title}</CustomTxt>
    </Container>
  );
};

export default SectionHeader;
