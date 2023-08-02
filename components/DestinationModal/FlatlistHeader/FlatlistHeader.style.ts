import styled from "@emotion/native";
import { Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

export const Container = styled.View(({ theme }) => {
  return {
    width: Dimensions.get("window").width - scale(70),
    alignSelf: "flex-end",
  };
});

export const InputContainer = styled.View(({ theme }) => {
  return {
    flex: 1,
  };
});

export const DecoratorCont = styled.View(({ theme }) => {
  return {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scale(20),
  };
});

export const HorizonatalCont = styled.View(({ theme }) => {
  return {
    flexDirection: "row",
    marginRight: scale(12),
  };
});

export const DecoratorCircle = styled.View(({ theme }) => {
  return {
    width: scale(7),
    height: scale(7),
    borderRadius: scale(45 / 2),
    backgroundColor: theme.colors.components.destinationModals.decoratorCircle,
  };
});

export const DecoratorLine = styled.View(({ theme }) => {
  return {
    width: scale(1),
    flex: 1,
    backgroundColor: theme.colors.components.destinationModals.decoratorCircle,
    marginVertical: scale(3),
  };
});

export const DecoratorSquare = styled.View(({ theme }) => {
  return {
    width: scale(7),
    height: scale(7),
    backgroundColor: theme.colors.components.destinationModals.decoratorSquare,
  };
});
