import React from 'react';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, Platform } from 'react-native';
import { Cart, Home, ProductDetail, Checkout } from '../../screens';
import { withBadge, Icon as Icons } from 'react-native-elements'
import { Icon } from '../../components';
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();

const BadgedIcon = withBadge(1)(Icons);
function HomeRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerStyle: {
                    marginTop: Platform.OS == 'ios' ? 25 : 0
                },
                headerBackground: () => (<Image resizeMode="cover" style={{ height: 56, width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 15 }}><Icon.MaterialIcons name="menu" color="white" size={30} /></TouchableOpacity>),
                headerRight: () => (<View style={{ marginRight: 20 }}><BadgedIcon onPress={() => navigation.navigate('Cart')} type="font-awesome" name="shopping-cart" color='white' /></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}></Text></View>),
            })} />
            <Stack.Screen name="Cart" component={Cart} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    marginTop: Platform.OS == 'ios' ? 25 : 0
                },
                headerBackground: () => (<Image resizeMode="cover" style={{ height: 55, width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<View style={{ marginRight: 20 }}><Text style={styles.headerTextStyle}>Clear All</Text></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Cart</Text></View>),
            })} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: {
                    marginTop: Platform.OS == 'ios' ? 25 : 0
                },
                headerBackground: () => (<Image resizeMode="cover" style={{ height: 56, width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<View style={{ marginRight: 20 }}><BadgedIcon onPress={() => navigation.navigate('Cart')} type="font-awesome" name="shopping-cart" color='white' /></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Product Detail</Text></View>),
            })} />
            <Stack.Screen name="Checkout" component={Checkout} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: {
                    marginTop: Platform.OS == 'ios' ? 25 : 0
                },
                headerBackground: () => (<Image resizeMode="cover" style={{ height: 56, width: screenWidth }} source={require('../../assets/images/header.png')} />),
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                // headerRight: () => (<View style={{ marginRight: 20 }}><BadgedIcon onPress={() => navigation.navigate('Cart')} type="font-awesome" name="shopping-cart" color='white' /></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Checkout</Text></View>),
            })} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 18,
        color: "#fff",
    },
    headerTextStyle: {
        color: "#fff",
    }
})

export default HomeRoutes;


