import React from "react";
import { DisabledInput, Input } from "./DestinationInput.style";

interface DestinationInputProps {
  disabled?: boolean;
  placeholder?: string;
  autofocus?: boolean;
  onChangeText?: (value: string) => void;
  value?: string;
}

const DestinationInput = ({
  disabled,
  placeholder,
  autofocus,
  onChangeText,
  value,
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
      value={value}
    />
  );
};

export default DestinationInput;
