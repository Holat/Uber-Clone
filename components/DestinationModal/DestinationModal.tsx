import { Modal, Text } from "react-native";
import React from "react";
import { Container } from "./Destination.styles";
import { RoundBtn } from "../roundBtn";

interface DestinationModalProp {
  visible: boolean;
  closeModal: () => void;
}

const DestinationModal = ({ visible, closeModal }: DestinationModalProp) => {
  const handleRoundBtnPress = () => {
    closeModal();
  };
  return (
    <Modal visible={visible} animationType="fade" statusBarTranslucent={true}>
      <Container>
        <RoundBtn
          icon={"ios-arrow-back-outline"}
          onPress={handleRoundBtnPress}
        />
      </Container>
    </Modal>
  );
};

export default DestinationModal;
