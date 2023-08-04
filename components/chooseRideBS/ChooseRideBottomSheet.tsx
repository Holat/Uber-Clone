import { View, Text } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";

export const snapPoints = ["20%", "50%", "90%"];

const ChooseRideBottomSheet = () => {
  return (
    <BottomSheet snapPoints={snapPoints}>
      <BottomSheetSectionList sections={[]} />
    </BottomSheet>
  );
};

export default ChooseRideBottomSheet;
