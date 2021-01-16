import React from 'react';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, Platform } from 'react-native';
import { Cart, Home, ProductDetail, Checkout, Orders, OrdersDetail, MapScreen, Search, Profile, About, ResetPassword } from '../../screens';
import { withBadge, Icon as Icons } from 'react-native-elements'
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import { Icon } from '../../components';
import MapRoutes from '../Map';
import Menus from '../../assets/svg/menu.svg';
import CartIcon from '../../assets/svg/cart.svg';
import { connect } from 'react-redux';
import { cartActions } from '../../redux/actions/cart';
import { bindActionCreators } from "redux";
import PhoneVerification from '../../screens/PhoneVerification';
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();


function HomeRoutes(props) {
    const BadgedIcon = withBadge(props.cart.cart != null ? props.cart.cart.length : 0)(Icons);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 15 }}><Menus /></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Cart')}><BadgedIcon type="feather" name="shopping-cart" size={25} color='white' /></TouchableOpacity>),
                headerTitle: () => (<View><Text style={styles.headerTitleStyle}></Text></View>),
            })} />
            <Stack.Screen name="Cart" component={Cart} options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#29B1DB',
                    elevation: 0
                },
                headerLeft: () => (<TouchableOpacity onPress={() => navigation.replace('Home')} style={{ paddingLeft: 15 }}><Icon.AntDesign name="arrowleft" color="white" size={25} /></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity onPress={() => props.cartActions.clear()} style={{ marginRight: 20 }}><Text style={styles.headerTextStyle}>Clear All</Text></TouchableOpacity>),
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
                headerRight: () => (
                    <>
                        <Menu rendererProps={{
                            flexDirection: 'column', marginLeft: -25,
                            marginTop: -5,
                        }}
                            style={{ height: 50, marginRight: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <MenuTrigger>
                                <Icon.Ionicons name="ellipsis-vertical" size={25} color={'white'} />
                            </MenuTrigger>
                            <MenuOptions optionsContainerStyle={{ width: 100 }}>
                                <MenuOption onSelect={() => navigation.navigate('Reset')}>
                                    <View style={{ marginVertical: 5, alignItems: 'center' }}>
                                        <Text style={{ color: '#7a7a7a', fontFamily: 'Roboto-Regular', fontSize: 10 }}>Change Password</Text>
                                    </View>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                    </>),
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
             <Stack.Screen name="PhoneVerification" component={PhoneVerification} options={{
                headerShown: false
            }} />
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
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {},
        cart: state.cartReducer || {}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartActions: bindActionCreators(cartActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRoutes);


