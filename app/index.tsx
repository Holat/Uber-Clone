import { MapScreen } from "@/screens/MapScreen";
import LocationPermissionService from "@/services/LocationPermissionService";
import { ThemeProvider } from "@/constants/themeProvider";
import { UserLocationStateContextProvider } from "@/context/userLocationStateContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const index = () => {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <UserLocationStateContextProvider>
          <MapScreen />
        </UserLocationStateContextProvider>
        <LocationPermissionService />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
export default index;
