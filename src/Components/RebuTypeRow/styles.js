import { StyleSheet } from "react-native";
import { ThemeStyles } from "../../ThemeStyles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: ThemeStyles.color.mediumGrey
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: "contain"
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    type: {
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 5,
    },
    time: {
        color: ThemeStyles.color.darkGrey
    },
    rightContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: 100,
    },
    price: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: "600",
        color: ThemeStyles.color.blackGrey
    }
});

export default styles;
