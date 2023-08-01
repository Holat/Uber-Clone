import { MapScreen } from "@/screens/MapScreen";
import LocationPermissionService from "@/services/LocationPermissionService";
import { ThemeProvider } from "@/constants/themeProvider";

const index = () => {
  return (
    <ThemeProvider>
      <MapScreen showsUserLocation />
      <LocationPermissionService />
    </ThemeProvider>
  );
};
export default index;
