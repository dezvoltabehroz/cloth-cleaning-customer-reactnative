import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    headerImageStyle: {
        height: 40,
        width: screenWidth,
        backgroundColor: '#29B1DB'
    },
    upperListContainer: {
        marginHorizontal: '5%',
        height: 70,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 3,
        borderColor: "#EEE",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    upperContainer: {
        marginHorizontal: '5%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderColor: "#EEE",
        borderWidth: 0.3,
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
    },
    checkButtonTextStyle: {
        color: 'white',
        textAlign: 'center'
    },
    checkoutInnerContainer: {
        marginHorizontal: '5%',
        bottom: '5%'
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#7A7A7A'
    },
    checkoutItemStyle: {
        flexDirection: 'row',
        marginVertical: '2.5%',
        justifyContent: 'space-between'
    },
    checkoutTextStyle: {
        color: '#7A7A7A',
        fontFamily: 'Roboto-Light'

    },
    totalTextStyle: {
        color: '#374B5C',
        fontSize: 14,
        fontFamily: 'Roboto-Medium'
    },
    totalPriceTextStyle: {
        color: '#0DA7DF',
        fontSize: 14,
        fontFamily: 'Roboto-Medium'
    },
    checkoutButtonContainer: {
        borderRadius: 35,
        height: 33,
        width: 140,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        justifyContent: 'center',
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    tipContainer: {
        height: 54,
        // backgroundColor: THEME.PRIMARY_COLOR,
        justifyContent: "center",
        alignItems: "center",
        width: screenWidth * 0.35,
        borderRadius: 7
    },

    iconContainer: {
        backgroundColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: 25,
        width: 25
    },
    discountTextStyle: {
        color: '#A50808'
    },
    headingText: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular'
    }
})