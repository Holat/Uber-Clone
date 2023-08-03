import { useUserLocationStateContext } from "@/context/userLocationStateContext";
import { useState, useRef, useEffect } from "react";
import MapView, { UserLocationChangeEvent } from "react-native-maps";

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export default function useMapScreen() {
  const mapRef = useRef<MapView>(null);
  const { userLocation, setUserLocation } = useUserLocationStateContext();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (userLocation) {
      mapRef.current?.animateToRegion({
        longitude: userLocation.cords.longitude,
        latitude: userLocation.cords.latitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [userLocation]);

  const handleUserLocationChange = ({
    nativeEvent: { coordinate },
  }: UserLocationChangeEvent) => {
    if (coordinate) {
      setUserLocation({
        cords: {
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        },
      });
    }
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
