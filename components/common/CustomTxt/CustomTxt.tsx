import { View, Text } from "react-native";
import React from "react";
import { BodyTxt } from "./CustomTxt.style";

interface CustomTxtProp {
  variant: "body";
  children: string;
}
const getComponent = (variant: CustomTxtProp["variant"]) => {
  switch (variant) {
    case "body":
      return BodyTxt;
    default:
      return BodyTxt;
  }
};

const CustomTxt = ({ variant, children }: CustomTxtProp) => {
  const Comp = getComponent(variant);
  return <Comp>{children}</Comp>;
};

export default CustomTxt;
