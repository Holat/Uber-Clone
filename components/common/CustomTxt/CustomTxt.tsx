import React from "react";
import { BodyTxt, CaptionTxt, TitleTxt } from "./CustomTxt.style";

interface CustomTxtProp {
  variant: "body" | "title" | "caption";
  children: string;
}
const getComponent = (variant: CustomTxtProp["variant"]) => {
  switch (variant) {
    case "body":
      return BodyTxt;
    case "title":
      return TitleTxt;
    case "caption":
      return CaptionTxt;
    default:
      return BodyTxt;
  }
};

const CustomTxt = ({ variant, children }: CustomTxtProp) => {
  const Comp = getComponent(variant);
  return <Comp>{children}</Comp>;
};

export default CustomTxt;
