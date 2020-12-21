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
    headerImageStyle: { height: 150, width: screenWidth },
    seperatorStyle: {
        width: 15
    },
    listSeperatorStyle: {
        height: 15
    },
    upperListContainer: {
        marginHorizontal: '5%',
        padding: '5%',
        paddingVertical: '5%',
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
    headingStyle: {
        fontSize: 16,
        fontWeight: '600'
    },
    lowerListContainer: {
        // borderColor:'black',
        // borderWidth:1,
        marginHorizontal: '5%',
        marginTop: '5%'
    }
})