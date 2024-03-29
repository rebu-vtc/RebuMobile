import { StyleSheet } from "react-native";
import { ThemeStyles } from "../../ThemeStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 20,
    },
    flexCenter: {
        alignItems: "center",
    },
    horizontalClip: {
        backgroundColor: ThemeStyles.color.mediumGrey,
        width: 60,
        height: 5,
        borderRadius: 25,
        marginBottom: 8,
    },
    inputBox: {
        backgroundColor: ThemeStyles.color.lightGrey,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderRadius: 8
    },
    inputText: {
        fontSize: 15,
        fontWeight: "500",
        color: ThemeStyles.color.blackGrey,
    },
    timeContainer: {
        flexDirection: "row",
        width: 100,
        justifyContent: "space-between",
        backgroundColor: ThemeStyles.color.background,
        padding: 8,
        alignItems: "center",
        borderRadius: 50
    },
    row: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: ThemeStyles.color.mediumGrey
    },
    iconContainer: {
        backgroundColor: "#b3b3b3",
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 15,
        fontWeight: "600",
        fontSize: 16,
        color: ThemeStyles.color.darkGrey,
    },
    displayRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    lastRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    pointsText: {
        marginLeft: 8,
        fontWeight: "600",
        fontSize: 14,
        color: ThemeStyles.color.darkGrey, 
    },
    rewardsText: {
        fontWeight: "400",
        marginRight: 15,
        fontSize: 14,
        color: ThemeStyles.color.darkGrey,  
    },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5, 
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    }
});

export default styles;
