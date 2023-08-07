import { ridesData } from "@/components/chooseRideBS/mockData";
import { Dimensions } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

const { height } = Dimensions.get("screen");

export const rideSheetSnapPoints = (insets: EdgeInsets) => {
  const footerHeight = scale(120) + (insets.bottom || scale(10));
  const itemHeigth = scale(85);
  const headerHeight = scale(50) + 24;

  return [
    footerHeight + itemHeigth + headerHeight,
    footerHeight + headerHeight + ridesData[0].data.length * itemHeigth,
    height - (insets.top + scale(85)),
  ];
};

export const mapRideSheetMapPadding = [
  height * 0.15,
  height * 0.45,
  height * 0.45,
];
