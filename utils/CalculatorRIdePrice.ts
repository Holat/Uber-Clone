import { RideItemPrice } from "@/types/rideItem";
import { MapDirectionsResponse } from "react-native-maps-directions";

export const calculateRidePrice = (
  price: RideItemPrice,
  routeInfo?: MapDirectionsResponse
) => {
  if (routeInfo) {
    const { distance, duration } = routeInfo;
    return `${price.currency}${(
      Math.round(price.perKm * distance * price.perMinute * duration * 100) /
      100
    ).toFixed(2)}`;
  }
  return "";
};
