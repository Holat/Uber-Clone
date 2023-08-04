import { useSearchHistory } from "@/hooks/useSearchHistory";
import { useTextSearchQuery } from "@/modal/places/useTextSearchQuery";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { LatLng } from "react-native-maps";
import { TxtSearchItem } from "@/modal/places/types/TxtSearchItems";

type UseDestinationModal = {
  onPlaceItemPress: (cords: LatLng) => void;
  closeModal: () => void;
};

export const useDestinationModal = ({
  onPlaceItemPress,
  closeModal,
}: UseDestinationModal) => {
  const [destinationInputValue, setDestinationInputValue] = useState("");

  /**
   * sets the destinationInputValue every 200 millisec to prevent multiple api fetches
   */
  const [debouncedDestinationInputValue] = useDebounce(
    destinationInputValue,
    200
  );

  const { searchHistoryItem, addItemToSearchHistory } = useSearchHistory(
    "places",
    "place_id"
  );

  const requestData = useTextSearchQuery(debouncedDestinationInputValue);

  const destinationInputValueChange = (value: string) => {
    setDestinationInputValue(value);
  };

  const handlePlaceItemPress = (item: TxtSearchItem) => {
    return () => {
      onPlaceItemPress({
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
      });
      addItemToSearchHistory(item);
    };
  };

  const handleRoundBtnPress = () => {
    closeModal();
  };

  const handleModalDismiss = () => {
    setDestinationInputValue("");
  };

  return {
    modals: {
      destinationInputValue,
      txtSearchQueryRespData: requestData?.results || searchHistoryItem,
    },
    operation: {
      destinationInputValueChange,
      handlePlaceItemPress,
      handleRoundBtnPress,
      handleModalDismiss,
    },
  };
};
