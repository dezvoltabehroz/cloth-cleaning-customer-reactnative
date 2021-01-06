import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1
    },
    upperContainer: {
        height: 80,
        backgroundColor: '#29B1DB'
    },
    imageContainer: {
        marginTop: 5,
        backgroundColor: 'white',
        marginHorizontal: '5%',
        paddingVertical: '2.5%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        justifyContent: 'center',
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        // height: 140,
        borderColor: "#EEE",
        borderWidth: 1,
        bottom: '12%'
    },
    imageStyle: {
        height: 146,
        width: 140
    },
    checkoutButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        top: '15%',
        height: 35,
        borderRadius: 17
    },
    checkoutTextStyle: {
        color: 'white',
        fontSize: 16
    },
    lowerContainer: {
        marginTop: '5%',
        backgroundColor: 'white',
        marginHorizontal: '5%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        borderColor: "#EEE",
        borderWidth: 1,
        bottom: '10%',
        paddingHorizontal: '5%',
        paddingVertical: '5%'
    },
    headingTitleStyle: {
        fontSize: 14,
        marginTop: '5%',
        fontFamily: 'Roboto-Medium'
    },
    lineStyle: {
        marginTop: '5%',
        borderWidth: 0.2,
        color: '#7A7A7A',
        opacity: 0.1,
    },
    itemQuantityContainer: {
        flexDirection: 'row',
        marginTop: '2.5%',
        justifyContent: 'space-between',
    },
    itemQuantityButtonContainer: {
        width: 80,
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listTextStyle: {
        lineHeight: 20,
        fontSize: 12,
        color: '#7A7A7A',
        fontFamily: 'Roboto-Regular'
    },
    totalPriceTextStyle: {
        color: '#0DA7DF'
    },
    quantityButtonStyle: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0DA7DF',
        height: 25,
        width: 25
    },
    crossButtonStyle: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2E2E2',
        height: 15,
        width: 15
    },
    cardContainer: {
        backgroundColor: 'white',
        marginHorizontal: '2.5%',
        padding: '5%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        justifyContent: 'center',
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        // height: 140,
        borderColor: "#EEE",
        borderWidth: 1,
    },
    iconContainer: {
        backgroundColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: 25,
        width: 25
    },
    headingText: {
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        color: '#193628'
    },
    saveButtonContainer: {
        borderRadius: 35,
        height: 33,
        width: 95,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        justifyContent: 'center',
    },
    checkButtonTextStyle: {
        color: 'white',
        textAlign: 'center'
    },
    containerStyle: {
        marginVertical: '5%',
        marginHorizontal: 0,
        paddingHorizontal: 0,
        height: 70,
    },
    inputContainerStyle: {
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        borderBottomWidth: 0,
        height: 90,
        backgroundColor: '#F4F4F4',
        borderRadius: 5,
    },
    inputStyle: {
        fontSize: 12,
        justifyContent: 'flex-start',
        fontFamily: 'Nunito-Regular',
        marginLeft: '2.5%'
    },
})