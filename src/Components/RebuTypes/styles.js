import { StyleSheet } from "react-native";
import { ThemeStyles } from "../../ThemeStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
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
    promoCodeContainer: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 20,
    },
    promoText: {
        fontSize: 14,
        color: ThemeStyles.color.darkGrey,
        marginLeft: 5,
    },
    paymentRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 15,
        paddingBottom: 2
    },
    iconContainer: {
        marginRight: 30,
    },
    roundIcon: {
        zIndex: 2,
        padding: 10,
        borderRadius: 50,
        backgroundColor: ThemeStyles.color.black,
    },
    personLockIconContainer: {
        position: "absolute",
        backgroundColor: ThemeStyles.color.mediumGrey,
        width: 55,
        height: 30,
        zIndex: 1,
        top: 4,
        left: 7,
        borderRadius: 25,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    lockIcon: {
        marginLeft: 25,
        marginBottom: 8
    },
    middlePaymentContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    paymentType: {
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 0,
    },
    paymentCard: {
        fontSize: 12,
        color: ThemeStyles.color.darkGrey
    },
    rightPaymentContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: 100,
    },
    submitButton: {
        flex: 1,
        padding: 10,
        margin: 10,
        backgroundColor: ThemeStyles.color.black,
        alignItems: "center",
    },
    buttonText: {
        fontWeight: "bold",
        color: ThemeStyles.color.white
    },
    driveTimeContainer: {
        width: 50,
        backgroundColor: ThemeStyles.color.mediumGrey,
        padding: 10,
        marginRight: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    bottomContainer: {
        height: 145,
        backgroundColor: ThemeStyles.color.white,
        paddingBottom: 15,
    }
});

export default styles;
