import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: '5%'
    },
    headingConatiner: {
        marginTop: '5%'
    },
    headingTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    listContainer: {
        marginTop: '5%'
    },
    listTextStyle: {
        fontSize: 12,
        marginVertical: 5,
        fontWeight: 'bold'
    },
    listColorTextStyle: {
        fontSize: 12,
        marginVertical: 5,
        color: '#7A7A7A'
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#7A7A7A'
    },
    listSeperatorStyle: {
        height: 5
    },
    checkoutButtonContainer: {
        borderRadius: 35,
        height: 40,
        width: 140,
        justifyContent: 'center',
        paddingHorizontal: '5%'
    },
    checkButtonTextStyle: {
        color: 'white',
        textAlign: 'center'
    },
})