import { Dimensions, StyleSheet } from 'react-native'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    backgroundImageStyle: {
        height: screenHeight * 0.368,
        width: screenWidth
    },
    innerImageContainer: {
        top: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerImageStyle: {
        height: screenHeight * 0.3,
        width: screenWidth,
    },
    logoImageStyle: {
        height: 90,
        width: 306
    },
    headingTextStyle: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: 'bold'
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
        borderRadius: 5,
        fontSize: 13,
        color: '#3F4B59'
    },
    errorText: {
        paddingTop: "1%",
        paddingLeft: 8,
        color: '#c30000',
        fontSize: 12,
        marginLeft: 5
    },


})