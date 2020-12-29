import React from 'react';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, Platform } from 'react-native';
import { Cart, Home, ProductDetail, Checkout, Orders, OrdersDetail, MapScreen, Search, Profile, About, ResetPassword } from '../../screens';
import { withBadge, Icon as Icons } from 'react-native-elements'
import { Icon } from '../../components';
import MapRoutes from '../Map';
import Menu from '../../assets/svg/menu.svg';
import CartIcon from '../../assets/svg/cart.svg';
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();


function HomeRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 15 }}><Menu /></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Cart')}><CartIcon /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}></Text></View>),
            })} />
            <Stack.Screen name="Cart" component={Cart} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<View style={{ marginRight: 20 }}><Text style={styles.headerTextStyle}>Clear All</Text></View>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Cart</Text></View>),
            })} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Cart')}><CartIcon /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Product Detail</Text></View>),
            })} />
            <Stack.Screen name="Checkout" component={Checkout} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Checkout</Text></View>),
            })} />
            <Stack.Screen name="Map" component={MapRoutes} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Orders" component={Orders} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Orders</Text></View>),
            })} />
            <Stack.Screen name="OrdersDetail" component={OrdersDetail} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Orders</Text></View>),
            })} />
            <Stack.Screen name="Profile" component={Profile} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('Reset')} style={{ marginRight: 15 }}><Icon.Ionicons name="ellipsis-vertical" size={25} color={'white'} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Profile</Text></View>),
            })} />
            <Stack.Screen name="About" component={About} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>About</Text></View>),
            })} />
            <Stack.Screen name="Reset" component={ResetPassword} options={({ navigation, route }) => ({
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Reset Password</Text></View>),
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
        fontFamily: 'Roboto-Regular'
    },
    headerMapTitleStyle: {
        fontSize: 14,
        color: "#fff",
    },
    headerTextStyle: {
        color: "#fff",
        fontFamily: 'Roboto-Regular'
    }
})

export default HomeRoutes;


