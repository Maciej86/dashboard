const color = {
  white: "rgb(255, 255, 255)",
  pickledBluewood_100: "rgb(52, 73, 94)",
  pickledBluewoodAlpha_100: "rgba(52, 73, 94, .8)",
  pickledBluewood_200: "rgb(44, 62, 80)",
  pickledBluewood_300: "rgb(35, 51, 66)",
  gray_100: "rgb(235, 237, 239)",
  gray_400: "rgb(189, 189, 189)",
  gray_500: "rgb(149, 149, 149)",
  gray_600: "rgb(109, 109, 109)",
  gray_900: "rgb(69, 69, 69)",
  jungleGreen_100: "rgb(46, 184, 92)",
  jungleGreen_200: "rgb(40, 161, 80)",
};

const size = {
  widthNawigation: 300,
  heightBar: 70,
} as const;

const media = {
  hiddenNav: 1000,
  height800: 800,
  height350: 350,
} as const;

const speed = {
  speedNav: 0.3,
} as const;

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
    colorTextBasic: color.gray_900,
    colorTextWhite: color.white,
    colorTextLogo: color.white,
    colorTextDescription: color.gray_600,
    boxShadow: color.gray_900,
    buttonConfirmBg: color.jungleGreen_100,
    buttonConfirmBgHover: color.jungleGreen_200,
    buttonCancelBg: color.gray_400,
    buttonCancelBgHover: color.gray_500,
    borderInput: color.gray_500,
    borderInputHover: color.gray_900,
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
