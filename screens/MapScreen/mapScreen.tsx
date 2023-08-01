import { View, Text } from "react-native";
import React from "react";
import { StyledMapView } from "./mapScreen.style";
import useMapScreen from "./useMapScreen";

const MapScreen = ({ showsUserLocation }: { showsUserLocation: any }) => {
  const { models, operations } = useMapScreen();
  return (
    <StyledMapView
      ref={models.mapRef}
      showsUserLocation
      onUserLocationChange={operations.handleUserLocationChange}
      showsMyLocationButton={false}
      showsCompass={false}
    />
  );
};

export default MapScreen;
