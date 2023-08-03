import { Modal } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";

import { RoundBtn } from "../roundBtn";
import { StyledFlatlist, useStyles } from "./Destination.styles";
import FlatlistHeader from "./FlatlistHeader/FlatlistHeader";
import { useDestinationModal } from "./useDestinationModal";
import PlaceItem from "../Place/PlaceItem";
import { TxtSearchItem } from "@/modal/places/types/TxtSearchItems";
import { Spacer } from "../common/spacer/Spacer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface DestinationModalProp {
  visible: boolean;
  closeModal: () => void;
}
const ItemSeparatorComponent = () => <Spacer height={scale(17)} />;

const DestinationModal = ({ visible, closeModal }: DestinationModalProp) => {
  const { modals, operation } = useDestinationModal();
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);

  const handleRoundBtnPress = () => {
    closeModal();
  };

  const renderFlatlistItem = ({ item }: { item: TxtSearchItem }) => {
    return (
      <PlaceItem
        name={item.name}
        iconUrl={item.icon}
        address={item.formatted_address}
        onPress={() => console.log("pressed")}
      />
    );
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
        data={modals.txtSearchQueryRespData}
        renderItem={renderFlatlistItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.flatlistContainer}
        stickyHeaderIndices={[0]}
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
