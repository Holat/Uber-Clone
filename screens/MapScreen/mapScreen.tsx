import React from "react";
import { StyledMapView, Container } from "./mapScreen.style";
import useMapScreen from "./useMapScreen";
import { RoundBtn } from "@/components/roundBtn";
import { MapSearchBar } from "@/components/mapSearchBar";
import DestinationModal from "@/components/DestinationModal/DestinationModal";

const MapScreen = () => {
  const { models, operations } = useMapScreen();

  return (
    <Container>
      <StyledMapView
        ref={models.mapRef}
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        showsMyLocationButton={false}
        showsCompass={false}
      />

      <RoundBtn icon="ios-menu-outline" />
      <MapSearchBar onPress={operations.handleMapSearchBarPress} />
      <DestinationModal
        visible={models.modalVisible}
        closeModal={operations.closeDestinationModal}
      />
    </Container>
  );
};

export default MapScreen;
