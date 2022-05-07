import { Platform, StyleSheet, Dimensions } from "react-native";
import { Configuration } from "./Configuration";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const ThemeStyles = {
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
    lightGrey: "#F4F4F4",
    mediumGrey: "#D6D6D6",
    darkGrey: "#656565",
    blackGrey: "#4C4C4C",
    background: "#fff",
    lightBlue: "#2b80ff",
    whiteBlue: "#bed9ff",
    green: "#03BE66",
    black: "black",
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
    tintColor: ThemeStyles.color.tint,
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
  },
  carTypes: {
    prive: require("../src/assets/cars/top-UberX.png"),
    economic: require("../src/assets/cars/top-UberXL.png"),
    business: require("../src/assets/cars/top-Comfort.png")
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
    color: ThemeStyles.color.tint,
    marginRight: 10,
    fontWeight: "normal",
    fontFamily: ThemeStyles.fontName.main
  }
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: ThemeStyles.color.subtitle,
    fontFamily: ThemeStyles.fontName.bold,
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

export const globalStyles = {
  constainer: {
    flex: 1,
    padding: 20, 
  }, 
  titleText: {
    fontFamily: 'Roboto-regular',
    color: '#333',
    fontSize: SIZES.body4
  },
  paragraph:{
    marginVertical: 8, 
    lineHeight: 20,

  },
  item: {
    marginTop: 24,
    padding: 30, 
    backgroundColor: ThemeStyles.tint,
    fontSize: 24,
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
},
footer: {
  flex: 2,
  backgroundColor: ThemeStyles.color.white,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 20
},
header: {
  flex: 1,
  justifyContent: 'flex-end',
  paddingHorizontal: 20,
  paddingBottom: 50,
  backgroundColor: ThemeStyles.color.tint
},
alignMyItem: {
  alignItems: 'center', justifyContent: 'center'
},
title: {
  color: 'black',
  fontSize: 25, 
  fontWeight: 'bold',
},

logo: {
  height: "15%",
  width: "70%",
  marginLeft: 70,
  marginTop: 30,
},
titleLogin: {
  fontSize: ThemeStyles.fontSize.title,
  fontWeight: "bold",
  color: ThemeStyles.color.tint,
  textAlign: "center",
  marginBottom: 20,
  marginLeft: 20,
  marginRight: 20
},
loginText: {
  color: ThemeStyles.color.white
},
signInText: {
  color: ThemeStyles.color.tint
},
signInContainer: {
  width: 200,
  backgroundColor: ThemeStyles.color.white,
  borderRadius: ThemeStyles.borderRadius.main,
  padding: 8,
  borderWidth: 1,
  borderColor: ThemeStyles.color.tint,
  marginTop: 15,
  alignItems: 'center',
  justifyContent: 'center'
},
loginContainer: {
  width: 200,
  backgroundColor: ThemeStyles.color.tint,
  borderRadius: ThemeStyles.borderRadius.main,
  padding: 10,
  marginTop: 30,
  alignItems: 'center',
  justifyContent: 'center'
},
textInput: {
  flex: 1,
  marginTop: Platform.OS == 'ios' ? 0 : -12,
  marginLeft: 10,
  color: '#05375a'
},
action: {
  flexDirection: 'row',
  marginTop: 7,
  marginBottom: 7,
  borderWidth: 1,
  borderColor: '#F2F2F2',
  paddingBottom: 5,
  backgroundColor: ThemeStyles.color.white
},
actionError: {
  flexDirection: 'row', 
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#FF0000',
  paddingBottom: 5,
},

}
