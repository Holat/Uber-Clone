import { View, Text } from "react-native";
import React from "react";
import { StyledPressable } from "./ActionBtn.style";
import CustomTxt from "../CustomTxt/CustomTxt";
import { useTheme } from "@emotion/react";

const ActionBtn = ({ text }: { text: string }) => {
  const theme = useTheme();
  return (
    <StyledPressable>
      <CustomTxt
        color={theme.colors.components.actionBtn.fontColor}
        variant="header"
      >
        {text}
      </CustomTxt>
    </StyledPressable>
  );
};

export default ActionBtn;
