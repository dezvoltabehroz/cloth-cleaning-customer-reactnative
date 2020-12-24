import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    btnPrimary: {
        height: 44,
        width: 180,
        borderRadius: 5,
        backgroundColor: '#EAF7FB'
    },
    btnPrimaryText: {
        fontSize: 16,
        fontFamily:'Nunito-SemiBold',
        color: '#0DA7DF',
    },
    clearBtnPrimary: {
        height: 44,
        width: 180,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'rgb(30,199,178)',
        backgroundColor: 'white'
    },
    clearBtnPrimaryText: {
        fontSize: 14,
        fontFamily:'Nunito-SemiBold',
        color: 'rgb(30,199,178)',
    },
});