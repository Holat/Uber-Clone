import { useTextSearchQuery } from "@/modal/places/useTextSearchQuery";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export const useDestinationModal = () => {
  const [destinationInputValue, setDestinationInputValue] = useState("");

  /**
   * sets the destinationInputValue every 500 sec to prevent multiple api fetches
   */
  const [debouncedDestinationInputValue] = useDebounce(
    destinationInputValue,
    300
  );

  const requestData = useTextSearchQuery(debouncedDestinationInputValue);

  const destinationInputValueChange = (value: string) => {
    setDestinationInputValue(value);
  };
  return {
    modals: {
      destinationInputValue,
      txtSearchQueryRespData: requestData?.results || [],
    },
    operation: {
      destinationInputValueChange,
    },
  };
};
