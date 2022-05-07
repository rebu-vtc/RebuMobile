import { StyleSheet } from "react-native";
import { SIZES, ThemeStyles } from "../../../ThemeStyles";

const styles = StyleSheet.create({
    sousContainers: {
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // height: "100%",
        flexDirection: "column",
    },
    container: {
        flex: 1,
        backgroundColor: ThemeStyles.color.tint
    },
    flexRow: {
        flexDirection: "column",
        width: "90%",
        paddingLeft: 30
    },
    icon: {
        position: "absolute",
        marginVertical: 5
    },
    sideContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "10%",
        paddingBottom: 15
    },
    circle: {
        position: "absolute",
        top: 20,
        left: 8,
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor: ThemeStyles.color.blackGrey,
    },
    verticalLine: {
        position: "absolute",
        top: 54,
        left: -10,
        width: 45,
        height: 0.5,
        borderRadius: 50,
        backgroundColor: ThemeStyles.color.blackGrey,
        transform: [{ rotate: "90deg" }]
    },
    rectangle: {
        position: "absolute",
        bottom: 20,
        left: 8,
        width: 8,
        height: 8,
        backgroundColor: ThemeStyles.color.darkGrey,
    },
    textInput: {
        padding: 10,
        backgroundColor: ThemeStyles.color.lightGray2,
        marginVertical: 5
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: "#A4A4A4",
        padding: 5,
        borderRadius: 50,
        marginRight: 15
    },
    locationText: {
        color: ThemeStyles.color.darkGrey
    },
    header: {
        color: ThemeStyles.color.white,
        fontWeight: 'bold',
        fontSize: 30,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    arrowleft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 2   
    },
});

export default styles;
