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
        backgroundColor: 'white',
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
    headerImageStyle: {
        height: 150,
        width: screenWidth,
        backgroundColor: '#29B1DB'
    },
    seperatorStyle: {
        width: 15
    },
    listSeperatorStyle: {
        height: 15
    },
    upperListContainer: {
        marginHorizontal: '5%',
        // padding: '5%',
        paddingVertical: '5%',
        paddingLeft: '5%',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            x: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    headingStyle: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium'
    },
    lowerListContainer: {
        // borderColor:'black',
        // borderWidth:1,
        marginHorizontal: '5%',
        marginTop: '5%'
    }
})