import { StyleSheet } from "react-native";
import  { ThemeStyles } from "../../../ThemeStyles";


const styles = StyleSheet.create({
    map: {  
        ...StyleSheet.absoluteFillObject,
    },
    bottomContainer: {
        height: "60%",
    },
    floatTopButton: {
        position: "absolute",
        top: 50,
        left: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: ThemeStyles.color.lightGrey,
        zIndex: 4,
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }
});

export default styles;
