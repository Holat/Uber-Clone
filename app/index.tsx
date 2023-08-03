import { MapScreen } from "@/screens/MapScreen";
import LocationPermissionService from "@/services/LocationPermissionService";
import { ThemeProvider } from "@/constants/themeProvider";
import { UserLocationStateContextProvider } from "@/context/userLocationStateContext";

const index = () => {
  return (
    <ThemeProvider>
      <UserLocationStateContextProvider>
        <MapScreen />
      </UserLocationStateContextProvider>
      <LocationPermissionService />
    </ThemeProvider>
  );
};
export default index;
