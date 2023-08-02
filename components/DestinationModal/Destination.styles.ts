import styled from "@emotion/native";
import { FlatList } from "react-native-gesture-handler";

export const StyledFlatlist = styled.FlatList(({ theme }) => {
  return {
    flex: 1,
  };
}) as unknown as typeof FlatList;

// 1: 24: 03
