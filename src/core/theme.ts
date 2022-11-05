const color = {
  white: "rgb(255, 255, 255)",
  pickledBluewood_100: "rgb(52, 73, 94)",
  pickledBluewood_200: "rgb(44, 62, 80)",
  pickledBluewood_300: "rgb(35, 51, 66)",
  gray_100: "rgb(235, 237, 239)",
  gray_400: "rgb(189, 189, 189)",
  gray_900: "rgb(69, 69, 69)",
};

const size = {
  widthNawigation: 300,
  heightBar: 70,
};

const media = {
  hiddenNav: 1000,
};

export const themeDefault = {
  color: {
    backgroundApp: color.gray_100,
    backgroundBar: color.white,
    borderBottomBar: color.gray_400,
    backgroundNav: color.pickledBluewood_100,
    backgroundLogo: color.pickledBluewood_200,
    borderBotomLogo: color.pickledBluewood_300,
    colorText: color.gray_900,
    colorTextLogo: color.white,
  },
  size: {
    ...size,
  },
  media: {
    ...media,
  },
};
