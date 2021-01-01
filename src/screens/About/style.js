import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white',
        // marginTop: StatusBar.currentHeight,
    },

    aboutTitleStyle: {
        fontSize: 20,
        marginLeft: 15,
        marginTop: 8
    },
    aboutcontentmainStyle: {
        marginBottom: 60
    },
    aboutcontentStyle: {
        fontSize: 15,
        textAlign: "justify",
        alignSelf: 'center',
        fontFamily: 'Roboto-Light',
        paddingVertical: 10,
        paddingHorizontal: 15,
        letterSpacing: 1,
        marginTop: 6,
    },
    contact: {
        marginTop: 6,
        marginLeft: 15,
        width: "100%",
        marginBottom: 30
    },
    contacttype1: {
        textAlign: 'left',
        fontSize: 15,
        fontFamily: 'Roboto-Medium'
    },
    contacttype2: {
        textAlign: 'left',
        marginTop: 4,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
    },
    headingTextStyle: {
        color: '#102134',
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        marginTop: '5%',
        marginHorizontal: '5%'
    }
})