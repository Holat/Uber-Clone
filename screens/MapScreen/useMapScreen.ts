import { View, Text } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import MapView, { UserLocationChangeEvent } from "react-native-maps";

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export default function useMapScreen() {
  const mapRef = useRef<MapView>(null);
  const [UserLocation, setUserLocation] =
    useState<UserLocationChangeEvent["nativeEvent"]["coordinate"]>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (UserLocation) {
      mapRef.current?.animateToRegion({
        longitude: UserLocation.longitude,
        latitude: UserLocation.latitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [UserLocation]);

  const handleUserLocationChange = ({
    nativeEvent: { coordinate },
  }: UserLocationChangeEvent) => {
    setUserLocation(coordinate);
  };

  const closeDestinationModal = () => {
    setModalVisible(false);
  };

  const handleMapSearchBarPress = () => {
    setModalVisible(true);
  };

  return {
    models: {
      mapRef,
      modalVisible,
    },
    operations: {
      handleUserLocationChange,
      handleMapSearchBarPress,
      closeDestinationModal,
    },
  };
}
