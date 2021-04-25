import { Platform, StyleSheet, Dimensions } from "react-native";
import { Configuration } from "./Configuration";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const AppStyles = {
  color: {
    main: "#5ea23a",
    text: "#696969",
    title: "#464646",
    subtitle: "#545454",
    categoryTitle: "#161616",
    tint: "#ff5a66",
    tint1: "ff5a68",
    description: "#bbbbbb",
    filterTitle: "#8a8a8a",
    starRating: "#2bdf85",
    location: "#a9a9a9",
    white: "white",
    facebook: "#4267b2",
    grey: "grey",
    greenBlue: "#00aea8",
    placeholder: "#a0a0a0",
    background: "#f2f2f2",
    blue: "#3293fe",
    secondary:'#CDCDD2',
    lightGray: "#e3e4e6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16
  },
  buttonWidth: {
    main: "70%"
  },
  textInputWidth: {
    main: "80%"
  },
  fontName: {
    main: "Noto Sans",
    bold: "Noto Sans"
  },
  borderRadius: {
    main: 25,
    small: 5
  }
};

export const AppIcon = {
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginRight: 10
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25
  },
  images: {
    car: require("../assets/icons/car.png"),
    user: require("../assets/icons/user.png"),
    logout: require("../assets/icons/shutdown.png"),
    course: require("../assets/icons/baseline_directions_car_black_18dp.png"),
    local: require("../assets/icons/baseline_add_location_alt_black_18dp.png"),
    miniCar: require("../assets/icons/baseline_local_shipping_black_18dp.png"),
    loyalty: require("../assets/icons/baseline_loyalty_black_18dp.png"),
    menu: require("../assets/icons/menu-hamb.png"),
    avatarC: require("../assets/icons/avatar.png"),
    luxe: require("../assets/icons/car-01.png"),
    flat: require("../assets/icons/drapeau.png"),
  }
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: "row"
  },
  container: {
    padding: 10
  },
  image: {
    justifyContent: "center",
    width: 35,
    height: 35,
    margin: 6
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: "normal",
    fontFamily: AppStyles.fontName.main
  }
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold"
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10
  },
  leftSubtitle: {
    flex: 2
  },
  avatarStyle: {
    height: 80,
    width: 80
  }
});

export const SIZES = {
  //global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  //font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  width,
  height

}

export const FONTS = {
  largeTitle: { fontFamily: "Roboto-Regular", fontSize: SIZES.largeTitle, lineHeight: 1},
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36},
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30},
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22},
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22},
  body1: { fontFamily: "Roboto-regular", fontSize: SIZES.body1, lineHeight: 36},
  body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30},
  body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22},
  body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22},
  body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22}
}
