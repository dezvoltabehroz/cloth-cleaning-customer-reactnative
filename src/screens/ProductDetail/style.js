import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1
    },
    upperContainer: {
        height: 80,
        backgroundColor: '#0DA7DF'
    },
    imageContainer: {
        backgroundColor: 'white',
        marginHorizontal: '5%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        height: 218,
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
        // bottom: '11%',
        marginHorizontal: '5%',
    },
    headingTitleStyle: {
        fontSize: 16,
        paddingBottom: '5%',
        fontWeight: 'bold'
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
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listTextStyle: {
        lineHeight: 25,
        fontSize: 12,
        color: '#7A7A7A'
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
})