import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    containerStyle: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        paddingBottom: 0
    },
    inputContainerStyle: {
        backgroundColor: 'rgb(240,240,240)',
        marginBottom: 0,
        height: 35,
        paddingLeft: '5%',
        borderBottomWidth: 0,
        borderRadius: 30
    },
    headingTextStyle: {
        fontSize: 14, color: 'white', fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 12, color: 'white',
    },
    headerImageStyle: { height: 210, width: screenWidth },
    seperatorStyle: {
        width: 15
    },
    listSeperatorStyle: {
        height: 15
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
    listTextStyle: {
        fontSize: 12,
        color: '#7A7A7A',
        fontFamily: 'Roboto-Regular'
    },
    listContentContainer: {
        borderRadius: 10,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00, marginBottom: '1%',
        borderColor: "#EEE",
        borderWidth: 0.3,
    },
    imageContainer: {
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        justifyContent: 'center',
        alignItems: 'center',
        height: 96,
        width: 122,
        shadowOpacity: 0.18,
        shadowRadius: 1.00, padding: '10%',
        borderColor: "#EEE",
        borderWidth: 0.3,
        borderRadius: 10
    },
    itemContainer: {
        flex: 1,
        marginHorizontal: '5%',
        justifyContent: 'space-evenly'
    },
    itemNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemNameTextStyle: {
        fontFamily: 'Roboto-Medium',
        lineHeight: 22,
    },
    itemQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemQuantityButtonContainer: {
        width: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkoutTextStyle: {
        color: '#7A7A7A',
        fontFamily: 'Roboto-Light'
    },
    totalTextStyle: {
        color: '#374B5C',
        fontFamily: 'Roboto-Medium'
    },
    totalPriceTextStyle: {
        color: '#0DA7DF',
        fontFamily: 'Roboto-Medium'
    },
    checkoutButtonContainer: {
        borderRadius: 35,
        height: 33,
        width: 140,
        justifyContent: 'center',
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
    checkButtonTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto-Medium'
    }

})