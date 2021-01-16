import { Dimensions, StyleSheet } from 'react-native'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    backgroundImageStyle: {
        height: screenHeight * 0.368,
        width: screenWidth
    },
    backgroundStyle: {
        height: screenHeight,
        width: screenWidth
    },
    innerImageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerImageStyle: {
        height: screenHeight * 0.2,
        width: screenWidth,
    },
    logoImageStyle: {
        height: 90,
        width: 306
    },
    headingTextStyle: {
        fontSize: 14,
        textAlign: "center",
        fontFamily: 'Roboto-Regular',
        color: '#707070'
    },
    headingTextStyle1: {
        fontSize: 14,
        textAlign: "center",
    },
    googleImageContainer: {
        alignItems: 'center',
        marginTop: '5%',
        paddingBottom: '10%'
    },
    googleImageStyle: {
        height: 30, width: 30
    },
    iconImageStyle: {
        height: 20,
        width: 20
    },
    codeContainer: {
        justifyContent: 'center',
        // paddingTop: "5%",
        paddingVertical: "5%",
        flexDirection: 'row',
        marginHorizontal: '10%'
    },
    codeInput: {
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: '#F0F1F3',
        height: 40, width: 30,
        fontSize: 13,
        fontFamily: 'Roboto-Regular',
        color: '#3F4B59'
    },


})