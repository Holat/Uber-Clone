import React from "react";
import {
  BodyTxt,
  CaptionTxt,
  HeaderTxt,
  SmallHeaderTxt,
  TitleTxt,
} from "./CustomTxt.style";

interface CustomTxtProp {
  variant: "body" | "title" | "caption" | "header" | "smallHeader";
  children: string;
  color?: string;
}
const getComponent = (variant: CustomTxtProp["variant"]) => {
  switch (variant) {
    case "body":
      return BodyTxt;
    case "title":
      return TitleTxt;
    case "caption":
      return CaptionTxt;
    case "header":
      return HeaderTxt;
    case "smallHeader":
      return SmallHeaderTxt;
    default:
      return BodyTxt;
  }
};

const CustomTxt = ({ variant, children, color }: CustomTxtProp) => {
  const Comp = getComponent(variant);
  const sharedProps = {
    style: {
      ...(color ? { color } : {}),
    },
  };

  return <Comp {...sharedProps}>{children}</Comp>;
};

export default CustomTxt;
