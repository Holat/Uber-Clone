import type { RideItem } from "@/types/rideItem";
import { useState, useEffect } from "react";
import { ridesData } from "./mockData";
import { useSharedValue } from "react-native-reanimated";
import { scale } from "react-native-size-matters";

interface UseChooseRideBSProp {
  onChange: (index: number) => void;
}

export const useChooseRideBS = ({ onChange }: UseChooseRideBSProp) => {
  const [selectedRide, setSelectedRide] = useState<RideItem>(
    ridesData[0].data[0]
  );

  const [snapIndex, setSnapIndex] = useState(1);
  const footerOffset = useSharedValue(0);
  const isBottomSheetExtended = snapIndex === 2;

  useEffect(() => {
    if (isBottomSheetExtended) {
      footerOffset.value = scale(200);
    } else {
      footerOffset.value = 0;
    }
  }, [isBottomSheetExtended, footerOffset]);

  const handleRideItemPress = (item: RideItem) => {
    return () => {
      setSelectedRide(item);
    };
  };

  const handleRideButtomSheetChange = (index: number) => {
    setSnapIndex(index);
    onChange(index);
  };

  return {
    models: { selectedRide, snapIndex, isBottomSheetExtended, footerOffset },
    operations: { handleRideItemPress, handleRideButtomSheetChange },
  };
};
