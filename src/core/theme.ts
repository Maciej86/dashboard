const color = {
  white: "rgb(255, 255, 255)",
  pickledBluewood_100: "rgb(52, 73, 94)",
  pickledBluewoodAlpha_100: "rgba(52, 73, 94, .8)",
  pickledBluewood_200: "rgb(44, 62, 80)",
  pickledBluewood_300: "rgb(35, 51, 66)",
  gray_100: "rgb(235, 237, 239)",
  gray_400: "rgb(189, 189, 189)",
  gray_600: "rgb(109, 109, 109)",
  gray_900: "rgb(69, 69, 69)",
};

const size = {
  widthNawigation: 300,
  heightBar: 70,
};

const media = {
  hiddenNav: 1000,
};

const speed = {
  speedNav: 0.3,
};

export const themeDefault = {
  color: {
    backgroundApp: color.gray_100,
    backgroundNameAlpha: color.pickledBluewoodAlpha_100,
    backgroundName: color.white,
    backgroundBar: color.white,
    borderBottomBar: color.gray_400,
    backgroundNav: color.pickledBluewood_100,
    backgroundLogo: color.pickledBluewood_200,
    borderBotomLogo: color.pickledBluewood_300,
    colorText: color.gray_900,
    colorTextLogo: color.white,
    colorTextDescription: color.gray_600,
    boxShadow: color.gray_900,
  },
  size: {
    ...size,
  },
  media: {
    ...media,
  },
  speed: {
    ...speed,
  },
};
