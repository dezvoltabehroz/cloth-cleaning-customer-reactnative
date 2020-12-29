import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        backgroundColor: 'white'
    },
    headingConatiner: {
        marginTop: '5%'
    },
    headingTextStyle: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium'
    },
    listContainer: {
        marginTop: '5%'
    },
    listTextStyle: {
        fontSize: 12,
        marginVertical: 5,
        fontFamily: 'Roboto-Medium'
    },
    listColorTextStyle: {
        fontSize: 12,
        marginVertical: 5,
        color: '#7A7A7A',
        fontFamily: 'Roboto-Regular'
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#7A7A7A',
        opacity: 0.1
    },
    listSeperatorStyle: {
        height: 5
    },
})