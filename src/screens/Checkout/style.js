import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    headerImageStyle: {
        height: 40,
        width: screenWidth,
    },
    upperListContainer: {
        marginHorizontal: '5%',
        height: 70,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 1,
        borderColor: "#EEE",
        borderWidth: 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
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
        color: '#7A7A7A'
    },
    totalTextStyle: {
        color: '#374B5C'
    },
    totalPriceTextStyle: {
        color: '#0DA7DF'
    },
    checkoutButtonContainer: {
        borderRadius: 35,
        height: 40,
        width: 140,
        justifyContent: 'center',
        paddingHorizontal: '5%'
    },
})