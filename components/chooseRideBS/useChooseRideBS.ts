import type { RideItem } from "@/types/rideItem";
import { useState } from "react";
import { ridesData } from "./mockData";

interface UseChooseRideBSProp {
  onChange: (index: number) => void;
}

export const useChooseRideBS = ({ onChange }: UseChooseRideBSProp) => {
  const [selectedRide, setSelectedRide] = useState<RideItem>(
    ridesData[0].data[0]
  );

  const [snapIndex, setSnapIndex] = useState(1);

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
    models: { selectedRide, snapIndex },
    operations: { handleRideItemPress, handleRideButtomSheetChange },
  };
};
