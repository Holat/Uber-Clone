import { View, Text } from "react-native";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface LocationStateContextProviderProp {
  children: ReactNode;
}

type UserLocation = {
  cords: {
    latitude: number;
    longitude: number;
  };
};

const useUserLocationStateContextValue = () => {
  const [userLocation, setUserLocation] = useState<UserLocation>();

  return {
    userLocation,
    setUserLocation,
  };
};

type UserLocationContextValue = ReturnType<
  typeof useUserLocationStateContextValue
>;

const UserLocationStateContext = createContext<UserLocationContextValue | null>(
  null
);

export const UserLocationStateContextProvider = ({
  children,
}: LocationStateContextProviderProp) => {
  const userLocationStateContextValue = useUserLocationStateContextValue();

  return (
    <UserLocationStateContext.Provider value={userLocationStateContextValue}>
      {children}
    </UserLocationStateContext.Provider>
  );
};

export const useUserLocationStateContext = () => {
  const context = useContext(UserLocationStateContext);

  if (!context) {
    throw new Error(
      "useUserLocationContext must be use inside UserLocationContextProvider"
    );
  }

  return context;
};
