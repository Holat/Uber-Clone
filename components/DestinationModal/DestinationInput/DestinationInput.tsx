import React from "react";
import { DisabledInput, Input } from "./DestinationInput.style";

interface DestinationInputProps {
  disabled?: boolean;
  placeholder?: string;
  autofocus?: boolean;
  onChangeText?: () => void;
}

const DestinationInput = ({
  disabled,
  placeholder,
  autofocus,
  onChangeText,
}: DestinationInputProps) => {
  const sharedProps = { placeholder };
  return disabled ? (
    <DisabledInput editable={false} {...sharedProps} />
  ) : (
    <Input
      onChangeText={onChangeText}
      autoFocus={autofocus}
      {...sharedProps}
      selectionColor={"black"}
    />
  );
};

export default DestinationInput;
