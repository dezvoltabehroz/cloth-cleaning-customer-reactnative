import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1
    },
    upperContainer: {
        height: 80,
        backgroundColor: '#29B1DB',
    },
    imageContainer: {
        marginTop: 5,
        paddingTop: '5%',
        backgroundColor: 'white',
        marginHorizontal: '5%',
        borderRadius: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
        borderColor: "#EEE",
        borderWidth: 0.3,
        bottom: '11%'
    },
    imageStyle: {
        height: 146,
        width: 140
    },
    checkoutButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        top: '10%',
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        height: 33,
        borderRadius: 35
    },
    checkoutTextStyle: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Roboto-Regular'
    },
    lowerContainer: {
        backgroundColor: 'white',
        marginTop: '5%',
        bottom: '5%',
        marginHorizontal: '5%',
    },
    headingTitleStyle: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium',
        paddingBottom: '5%',
    },
    lineStyle: {
        borderWidth: 0.2,
        color: '#7A7A7A'
    },
    itemQuantityContainer: {
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: 'space-between'
    },
    itemQuantityButtonContainer: {
        width: 80,
        marginTop: '2.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listTextStyle: {
        lineHeight: 25,
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#7A7A7A'
    },
    totalPriceTextStyle: {
        color: '#0DA7DF',
        fontFamily: 'Roboto-Medium'
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
})