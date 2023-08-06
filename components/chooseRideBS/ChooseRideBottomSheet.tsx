import { View, Text } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";
import { SectionListRenderItem } from "react-native/types";
import { rideSheetSnapPoints } from "@/constants/BottomSheetSnapPoints";
import { ridesData } from "./mockData";
import ChooseRideItem from "./components/chooseRideItem/ChooseRideItem";
import { RideItem } from "@/types/rideItem";

interface ChooseRideBottomSheetProps {
  onChange: (index: number) => void;
}

const ChooseRideBottomSheet = ({ onChange }: ChooseRideBottomSheetProps) => {
  const renderSectionItem: SectionListRenderItem<RideItem> = ({ item }) => {
    return (
      <ChooseRideItem
        key={item.id}
        variant="compact"
        onPress={() => {}}
        title={item.type}
        price={"50"}
        eta={item.eta}
        description={item.description}
        maxPassenger={item.maxPassengers}
        selected={item.id === "1"}
      />
    );
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
