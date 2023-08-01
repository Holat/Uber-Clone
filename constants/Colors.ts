const pallete = {
  white: "#fff",
  black: "#000",
  grey: "#CCCCCC",
};

export const colors = {
  common: {
    background: pallete.white,
    shadowDef: pallete.black,
  },
  components: {
    mapSearchBar: {
      squareClr: pallete.black,
    },
  },
  typography: {
    body: pallete.grey,
  },
};

export type Colors = typeof colors;
