import { Dimensions, StyleSheet } from 'react-native'
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    backgroundImageStyle: {
        height: screenHeight * 0.368,
        width: screenWidth
    },
    innerImageContainer: {
        marginTop: '13%',
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
    }

})