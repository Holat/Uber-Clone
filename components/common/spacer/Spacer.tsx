import React from "react";
import { View, StyleSheet, DimensionValue } from "react-native";

interface SpacerProp {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
}

export const Spacer = ({ width, height }: SpacerProp) => {
  const styles = StyleSheet.create({
    spacer: {
      width: width,
      height: height,
    },
  });
  return <View style={styles.spacer} />;
};
