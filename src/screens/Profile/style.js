import { StyleSheet, Dimensions } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        marginTop: '15%'
    },
    cardContainer: {
        paddingVertical: '5%',
        marginTop: '5%',
        backgroundColor: 'white',
        marginHorizontal: '5%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        borderColor: "#EEE",
        borderWidth: 0.3,
        bottom: '10%',
        paddingHorizontal: '5%',
    },
    itemQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headingTitleStyle: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium'
    },
    lineStyle: {
        marginTop: '5%',
        borderWidth: 0.2,
        color: '#7A7A7A'
    },
    listTextStyle: {
        lineHeight: 25,
        fontSize: 10,
        color: '#7A7A7A',
        fontFamily: 'Roboto-Regular'
    },

    checkButtonTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold'
    },
    clearTextStyle: {
        color: '#0DA7DF',
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold'
    },
    checkoutButtonContainer: {
        borderRadius: 35,
        height: 33,
        width: 95,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    clearButtonContainer: {
        borderRadius: 35,
        height: 33,
        width: 95,
        borderWidth: 1,
        borderColor: '#0DA7DF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    iconContainer: {
        backgroundColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: 25,
        width: 25
    },
})