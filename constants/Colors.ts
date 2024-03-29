const pallete = {
  white: "#fff",
  black: "#000",
  grey: "#CCCCCC",
  lightGray: "rgba(100,100,100,0.28)",
  lighterGray: "rgba(100,100,100,0.1)",
  blue: "#4a80f5",
};

export const colors = {
  common: {
    background: pallete.white,
    shadowDef: pallete.black,
  },
  typography: {
    body: pallete.grey,
    textDisabled: pallete.lightGray,
    common: pallete.black,
  },
  components: {
    mapSearchBar: {
      squareClr: pallete.black,
    },

    destinationInput: {
      disabledBackground: pallete.lighterGray,
      activeBackground: pallete.lightGray,
    },

    destinationModals: {
      decoratorCircle: pallete.lightGray,
      decoratorSquare: pallete.black,
    },

    divider: {
      BackgroundColor: pallete.lighterGray,
    },

    placeItem: {
      iconBg: pallete.blue,
      iconTint: pallete.white,
    },

    chooseRideItem: {
      selectedBorderColor: pallete.black,
      borderColor: pallete.white,
    },

    rideBottomSheet: {
      footerRightIconBg: pallete.lighterGray,
      footerLeftIconBg: pallete.black,
      leftIconColor: pallete.white,
    },

    actionBtn: {
      bgColor: pallete.black,
      fontColor: pallete.white,
    },
  },
  screens: {
    mapScrn: {
      directionStroke: pallete.blue,
    },
  },
};

export type Colors = typeof colors;
