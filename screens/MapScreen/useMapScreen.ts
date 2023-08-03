import { useUserLocationStateContext } from "@/context/userLocationStateContext";
import { useState, useRef, useEffect } from "react";
import MapView, { LatLng, UserLocationChangeEvent } from "react-native-maps";
import {
  MapDirectionsResponse,
  MapViewDirectionsTimePrecision,
} from "react-native-maps-directions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export default function useMapScreen() {
  const mapRef = useRef<MapView>(null);
  const { userLocation, setUserLocation } = useUserLocationStateContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [mapMarkers, setMapMarkers] = useState<LatLng[]>([]);
  const [mapDirection, setMapDirection] = useState<MapDirectionsResponse>();
  const inset = useSafeAreaInsets();

  useEffect(() => {
    if (mapDirection?.coordinates) {
      mapRef.current?.fitToCoordinates(mapDirection?.coordinates, {
        edgePadding: {
          top: inset.top + scale(15),
          bottom: scale(15),
          left: scale(15),
          right: scale(15),
        },
      });
    }
  }, []);

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

  const handleOnMapDirectionReady = (routeInfo: MapDirectionsResponse) => {
    setMapDirection(routeInfo);
  };

  const handlePlaceItemPress = (cords: LatLng) => {
    return () => {
      if (userLocation?.cords) {
        setMapMarkers([userLocation?.cords, cords]);
        setModalVisible(false);
      }
    };
  };

  return {
    models: {
      mapRef,
      modalVisible,
      mapMarkers,
    },
    operations: {
      handleUserLocationChange,
      handleMapSearchBarPress,
      closeDestinationModal,
      handlePlaceItemPress,
      handleOnMapDirectionReady,
    },
  };
}
