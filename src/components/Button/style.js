import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    btnPrimary: {
        height: 54,
        width: '100%',
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAF7FB'
    },
    btnPrimaryText: {
        fontSize: 14,
        color: '#0DA7DF',
    },
    clearBtnPrimary: {
        height: 54,
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgb(30,199,178)',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    clearBtnPrimaryText: {
        fontSize: 14,
        color: 'rgb(30,199,178)',
    },
});