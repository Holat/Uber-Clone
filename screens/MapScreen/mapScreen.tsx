import React from "react";
import { StyledMapView, Container } from "./mapScreen.style";
import useMapScreen from "./useMapScreen";
import { RoundBtn } from "@/components/roundBtn";
import { MapSearchBar } from "@/components/mapSearchBar";
import { View } from "react-native";
import DestinationModal from "@/components/DestinationModal/DestinationModal";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useTheme } from "@emotion/react";
import { scale } from "react-native-size-matters";
import ChooseRideBottomSheet from "@/components/chooseRideBS/ChooseRideBottomSheet";

const MapScreen = () => {
  const { models, operations } = useMapScreen();
  const theme = useTheme();

  const renderMapMarkers = () => {
    return models.mapMarkers.map((item, index) => {
      return <Marker coordinate={item} key={index} />;
    });
  };

  return (
    <Container>
      <StyledMapView
        ref={models.mapRef}
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        showsMyLocationButton={false}
        showsCompass={false}
      >
        {renderMapMarkers()}
        <MapViewDirections
          origin={models.mapMarkers[0]}
          destination={models.mapMarkers[1]}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeColor={theme.colors.screens.mapScrn.directionStroke}
          strokeWidth={scale(5)}
          onReady={operations.handleOnMapDirectionReady}
        />
      </StyledMapView>

      <RoundBtn
        icon={
          models.isRouteVisible ? "ios-arrow-back-outline" : "ios-menu-outline"
        }
        onPress={operations.handleRoundBtnPress}
      />
      {models.isRouteVisible || models.modalVisible ? null : (
        <MapSearchBar onPress={operations.handleMapSearchBarPress} />
      )}
      <DestinationModal
        visible={models.modalVisible}
        closeModal={operations.closeDestinationModal}
        onPlaceItemPress={operations.handlePlaceItemPress}
      />
      {models.isRouteVisible ? <ChooseRideBottomSheet /> : null}
    </Container>
  );
};

export default MapScreen;
