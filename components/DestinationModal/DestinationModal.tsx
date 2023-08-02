import { Modal } from "react-native";
import React from "react";
import { RoundBtn } from "../roundBtn";
import { StyledFlatlist } from "./Destination.styles";
import FlatlistHeader from "./FlatlistHeader/FlatlistHeader";
import { useDestinationModal } from "./useDestinationModal";

interface DestinationModalProp {
  visible: boolean;
  closeModal: () => void;
}

const DestinationModal = ({ visible, closeModal }: DestinationModalProp) => {
  const { modals, operation } = useDestinationModal();

  const handleRoundBtnPress = () => {
    closeModal();
  };

  const renderFlatlistItem = () => {
    return null;
  };

  return (
    //onRequestClose - allow the modal to close when andriod navigation back arrow is pressed
    <Modal
      onRequestClose={closeModal}
      visible={visible}
      animationType={"fade"}
      statusBarTranslucent={true}
    >
      <RoundBtn icon={"ios-arrow-back-outline"} onPress={handleRoundBtnPress} />
      <StyledFlatlist
        data={[]}
        renderItem={renderFlatlistItem}
        ListHeaderComponent={
          <FlatlistHeader
            dest={modals.destinationInputValue}
            onDestTxtChange={operation.destinationInputValueChange}
          />
        }
      />
    </Modal>
  );
};

export default DestinationModal;
