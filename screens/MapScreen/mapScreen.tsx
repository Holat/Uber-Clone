import React from "react";
import { StyledMapView, Container } from "./mapScreen.style";
import useMapScreen from "./useMapScreen";
import { RoundBtn } from "@/components/roundBtn";
import { MapSearchBar } from "@/components/mapSearchBar";
import { View } from "react-native";

const MapScreen = ({ showsUserLocation }: { showsUserLocation: any }) => {
  const { models, operations } = useMapScreen();
  const handlePress = () => {
    console.log("pressed");
  };
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
      <MapSearchBar onPress={handlePress} />
    </Container>
  );
};

export default MapScreen;
