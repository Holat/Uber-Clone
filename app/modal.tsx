import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { Link, Tabs } from "expo-router";
// import { Pressable, useColorScheme } from "react-native";

export default function ModalScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
// [
//   "expo-location",
//   {
//     "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
//   }
// ]

/**
 * ,
      "permissions": [
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.ACCESS_BACKGROUND_LOCATION"
      ]
 */

/**
 *  "infoPlist": {
        "NSLocationAlwaysAndWhenInUseUsageDescription": "We need your location to provide awesome features."
      }

    "permission": ["LOCATION", "BACKGROUND_LOCATION"],

 */
