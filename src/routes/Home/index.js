import React from 'react';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, Platform } from 'react-native';
import { Cart, Home, ProductDetail, Checkout, Orders, OrdersDetail, MapScreen, Search } from '../../screens';
import { withBadge, Icon as Icons } from 'react-native-elements'
import { Icon } from '../../components';
import MapRoutes from '../Map';
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();

const BadgedIcon = withBadge(1)(Icons);
function HomeRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 15 }}><Icon.MaterialIcons name="menu" color="white" size={30} /></TouchableOpacity>),
                headerRight: () => (<View style={{ marginRight: 20 }}><BadgedIcon onPress={() => navigation.navigate('Cart')} type="font-awesome" name="shopping-cart" color='white' /></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}></Text></View>),
            })} />
            <Stack.Screen name="Cart" component={Cart} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<View style={{ marginRight: 20 }}><Text style={styles.headerTextStyle}>Clear All</Text></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Cart</Text></View>),
            })} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<View style={{ marginRight: 20 }}><BadgedIcon onPress={() => navigation.navigate('Cart')} type="font-awesome" name="shopping-cart" color='white' /></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Product Detail</Text></View>),
            })} />
            <Stack.Screen name="Checkout" component={Checkout} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                // headerRight: () => (<View style={{ marginRight: 20 }}><BadgedIcon onPress={() => navigation.navigate('Cart')} type="font-awesome" name="shopping-cart" color='white' /></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Checkout</Text></View>),
            })} />
            <Stack.Screen name="Map" component={MapRoutes} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Orders" component={Orders} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                // headerRight: () => (<View style={{ marginRight: 20 }}><BadgedIcon onPress={() => navigation.navigate('Cart')} type="font-awesome" name="shopping-cart" color='white' /></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Orders</Text></View>),
            })} />
            <Stack.Screen name="OrdersDetail" component={OrdersDetail} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerBackground: () => (<Image resizeMode="cover" style={{ height: '100%', width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                // headerRight: () => (<View style={{ marginRight: 20 }}><BadgedIcon onPress={() => navigation.navigate('Cart')} type="font-awesome" name="shopping-cart" color='white' /></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Orders</Text></View>),
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

export default HomeRoutes;


