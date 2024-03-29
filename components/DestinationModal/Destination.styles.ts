import styled from "@emotion/native";
import { FlatList, StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

export const StyledFlatlist = styled.FlatList(({ theme }) => {
  return {
    flex: 1,
  };
}) as unknown as typeof FlatList;

export const useStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    flatlistContainer: {
      paddingBottom: insets.bottom || scale(10),
    },
  });
