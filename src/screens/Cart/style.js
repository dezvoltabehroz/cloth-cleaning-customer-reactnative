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
        color: '#7A7A7A'
    },
    listContentContainer: {
        borderRadius: 10,
        elevation: 1,
        marginBottom: '1%', shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
    },
    imageContainer: {
        elevation: 1,
        padding: '7%',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
    },
    itemContainer: {
        marginTop: '2.5%',
        width: screenWidth * 0.5,
        marginHorizontal: '5%',
    },
    itemNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemNameTextStyle: {
        fontWeight: 'bold',
        marginVertical: '5%'
    },
    itemQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemQuantityButtonContainer: {
        width: 80,
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        textAlign: 'center'
    }

})