import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    containerStyle: {
        height: 54,
        marginBottom: 0
    },
    inputContainerStyle: {
        borderBottomWidth: 0,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
    },
    inputStyle: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        marginLeft: '2.5%'
    },
}
);
