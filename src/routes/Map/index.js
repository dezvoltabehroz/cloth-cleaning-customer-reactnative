import React from 'react';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, Platform } from 'react-native';
import { Cart, Home, ProductDetail, Checkout, Orders, OrdersDetail, MapScreen, Search } from '../../screens';
import { withBadge, Icon as Icons } from 'react-native-elements'
import { Icon } from '../../components';
import { connect } from 'react-redux'
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();

const BadgedIcon = withBadge(1)(Icons);
function MapRoutes(props) {
    return (
        <Stack.Navigator initialRouteName="Map">
            <Stack.Screen name="Map" component={MapScreen} options={({ navigation, route }) => {
                return ({
                    headerStyle: {
                        backgroundColor: '#29B1DB',
                        elevation: 0
                    },
                    headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                    headerTitle: () => (<View><Text style={styles.headerMapTitleStyle}>{truncateString(props.cart.address, 28)}</Text></View>),
                })
            }} />
            <Stack.Screen name="Search" component={Search} options={({ navigation, route }) => ({
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerMapTitleStyle}></Text></View>),
            })} />

        </Stack.Navigator>
    );
}
const truncateString = (str, num) => {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + '...'
}
const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 18,
        color: "#fff",
    },
    headerMapTitleStyle: {
        fontSize: 14,
        color: "#fff",
    },
    headerTextStyle: {
        color: "#fff",
    }
})
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {},
        cart: state.cartReducer || {}
    };
};
export default connect(mapStateToProps)(MapRoutes);


