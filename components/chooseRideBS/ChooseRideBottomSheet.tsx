import React from "react";
import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";
import { SectionListRenderItem, SectionListData } from "react-native/types";
import { MapDirectionsResponse } from "react-native-maps-directions";

import { rideSheetSnapPoints } from "@/constants/BottomSheetSnapPoints";
import { ridesData } from "./mockData";
import { ChooseRideItem } from "./components/chooseRideItem";
import { RideItem } from "@/types/rideItem";
import { calculateRidePrice } from "@/utils/CalculatorRIdePrice";
import { useChooseRideBS } from "./useChooseRideBS";
import { Header } from "./components/Header";
import { SectionHeader } from "./components/SectionHeader";

interface ChooseRideBottomSheetProps {
  onChange: (index: number) => void;
  mapDirections?: MapDirectionsResponse;
}

const ChooseRideBottomSheet = ({
  onChange,
  mapDirections,
}: ChooseRideBottomSheetProps) => {
  const { models, operations } = useChooseRideBS({ onChange });
  const isBottomSheet = models.snapIndex === 2;
  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<RideItem>;
  }) => {
    return isBottomSheet ? <SectionHeader title={section.title} /> : null;
  };

  const renderSectionItem: SectionListRenderItem<RideItem> = ({ item }) => {
    return (
      <ChooseRideItem
        key={item.id}
        variant={isBottomSheet ? "expanded" : "compact"}
        onPress={operations.handleRideItemPress(item)}
        title={item.type}
        price={calculateRidePrice(item.price, mapDirections)}
        eta={item.eta}
        description={item.description}
        maxPassenger={item.maxPassengers}
        selected={item.id === models.selectedRide.id}
      />
    );
  };

  return (
    <BottomSheet
      index={1}
      onChange={operations.handleRideButtomSheetChange}
      snapPoints={rideSheetSnapPoints}
    >
      <BottomSheetSectionList
        ListHeaderComponent={<Header />}
        sections={ridesData}
        renderItem={renderSectionItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
      />
    </BottomSheet>
  );
};

export default ChooseRideBottomSheet;
