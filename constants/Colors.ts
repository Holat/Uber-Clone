const pallete = {
  white: "#fff",
  black: "#000",
  grey: "#CCCCCC",
  lightGray: "rgba(100,100,100,0.28)",
  lighterGray: "rgba(100,100,100,0.1)",
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
  },
};

export type Colors = typeof colors;
