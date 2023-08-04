import { View, Text } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";
import { rideSheetSnapPoints } from "@/constants/BottomSheetSnapPoints";

interface ChooseRideBottomSheetProps {
  onChange: (index: number) => void;
}

const ChooseRideBottomSheet = ({ onChange }: ChooseRideBottomSheetProps) => {
  return (
    <BottomSheet index={1} onChange={onChange} snapPoints={rideSheetSnapPoints}>
      <BottomSheetSectionList sections={[]} />
    </BottomSheet>
  );
};

export default ChooseRideBottomSheet;
