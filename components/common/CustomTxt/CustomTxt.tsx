import React from "react";
import { BodyTxt, CaptionTxt, HeaderTxt, TitleTxt } from "./CustomTxt.style";

interface CustomTxtProp {
  variant: "body" | "title" | "caption" | "header";
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
    case "header":
      return HeaderTxt;
    default:
      return BodyTxt;
  }
};

const CustomTxt = ({ variant, children }: CustomTxtProp) => {
  const Comp = getComponent(variant);
  return <Comp>{children}</Comp>;
};

export default CustomTxt;
