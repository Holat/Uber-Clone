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
import { LatLng } from "react-native-maps";

interface DestinationModalProp {
  visible: boolean;
  closeModal: () => void;
  onPlaceItemPress: (cords: LatLng) => void;
}
const ItemSeparatorComponent = () => <Spacer height={scale(17)} />;

const DestinationModal = ({
  visible,
  closeModal,
  onPlaceItemPress,
}: DestinationModalProp) => {
  const { modals, operation } = useDestinationModal({
    onPlaceItemPress,
    closeModal,
  });
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);

  const renderFlatlistItem = ({ item }: { item: TxtSearchItem }) => {
    return (
      <PlaceItem
        key={item.place_id}
        name={item.name}
        iconUrl={item.icon}
        address={item.formatted_address}
        onPlaceItemPress={operation.handlePlaceItemPress(item)}
      />
    );
  };

  return (
    //onRequestClose - allow the modal to close when andriod navigation back arrow is pressed
    <Modal
      onRequestClose={closeModal}
      onDismiss={operation.handleModalDismiss}
      visible={visible}
      animationType={"fade"}
      statusBarTranslucent={true}
    >
      <RoundBtn
        icon={"ios-arrow-back-outline"}
        onPress={operation.handleRoundBtnPress}
      />
      <StyledFlatlist
        data={modals.txtSearchQueryRespData}
        renderItem={renderFlatlistItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.flatlistContainer}
        keyboardShouldPersistTaps={"always"}
        keyboardDismissMode={"on-drag"}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
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
