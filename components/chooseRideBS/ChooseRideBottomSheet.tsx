import { View, Text } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";
import { rideSheetSnapPoints } from "@/constants/BottomSheetSnapPoints";
import { ridesData } from "./mockData";
import ChooseRideItem from "./components/chooseRideItem/ChooseRideItem";

interface ChooseRideBottomSheetProps {
  onChange: (index: number) => void;
}

const ChooseRideBottomSheet = ({ onChange }: ChooseRideBottomSheetProps) => {
  const renderSectionItem = () => {
    return <ChooseRideItem />;
  };
  return (
    <BottomSheet index={1} onChange={onChange} snapPoints={rideSheetSnapPoints}>
      <BottomSheetSectionList
        sections={ridesData}
        renderItem={renderSectionItem}
      />
    </BottomSheet>
  );
};

export default ChooseRideBottomSheet;
