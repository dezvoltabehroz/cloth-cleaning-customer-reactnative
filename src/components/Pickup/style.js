import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    headerImageStyle: {
        height: 40,
        width: screenWidth
    },
    upperListContainer: {
        marginHorizontal: '5%',
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
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '2%'
    },
    upperContainer: {
        marginHorizontal: '5%',
        paddingHorizontal: '5%',
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
    }
})