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
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        backgroundColor: 'white',
        borderColor: "#EEE",
        borderWidth: 1,
    },
    imageContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 96,
        width: 122,
        backgroundColor: 'white',
        borderColor: "#EEE",
        borderWidth: 1,
        borderRadius: 9
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
        height: 22,
        fontFamily: 'Roboto-Light'
    },
    totalTextStyle: {
        color: '#374B5C',
        height: 22,
        fontFamily: 'Roboto-Medium'
    },
    totalPriceTextStyle: {
        color: '#0DA7DF',
        height: 22,
        fontFamily: 'Roboto-Medium'
    },
    checkoutButtonContainer: {
        borderRadius: 35,
        height: 33,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        width: 140,
        justifyContent: 'center',
    },
    checkoutInnerContainer: {
        marginHorizontal: '5%',
        bottom: '5%'
    },
    lineStyle: {
        borderWidth: 0.5,
        marginBottom: '2.5%',
        borderColor: '#7A7A7A'
    },
    checkoutItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkButtonTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto-Medium'
    }

})