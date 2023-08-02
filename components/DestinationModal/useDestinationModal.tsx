import { useState } from "react";

export const useDestinationModal = () => {
  const [destinationInputValue, setDestinationInputValue] = useState("");

  const destinationInputValueChange = (value: string) => {
    setDestinationInputValue(value);
    console.log(value);
  };
  return {
    modals: {
      destinationInputValue,
    },
    operation: {
      destinationInputValueChange,
    },
  };
};
