import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Home } from '../../screens';
import { Button, Icon } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar, withBadge, Icon as Icons } from 'react-native-elements';
import HomeRoutes from '../Home';
import User from '../../assets/svg/user.svg';
import Bag from '../../assets/svg/bag.svg';
import Question from '../../assets/svg/question.svg';
import Logout from '../../assets/svg/logout.svg';
const Drawer = createDrawerNavigator();
const BadgedIcon = withBadge(1)(Icons);
function MainRoutes() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Home" >
            <Drawer.Screen name="Home" component={HomeRoutes} options={{
                swipeEnabled: false
            }} />
        </Drawer.Navigator>
    );
}

function CustomDrawerContent({ navigation }) {
    return (
        <>
            <View style={{ flex: 1 }} >
                <LinearGradient colors={['#27C2FA', '#27C2FA', '#0DA7DF']} style={styles.upperContainer}>
                    <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.upperContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View>
                                <Avatar size={50} rounded={true} source={{ uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" }} />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: '5%' }}>
                                <Text style={{ color: "white", marginLeft: "10%", fontFamily: 'Roboto-Bold', }} >John Doe</Text>
                                <Text style={{ color: "white", marginLeft: "10%", fontFamily: 'Roboto-Regular', fontSize: 10 }} >San Francisco, CA</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={{ flex: 0.7, paddingTop: '10%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Orders')} style={styles.itemStyle}>
                        <Bag height={16} width={16} />
                        <Text style={{ color: "#0092C7", marginLeft: "10%",fontFamily: 'Roboto-Regular', fontSize: 12 }}>Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.itemStyle}>
                        <User height={16} width={16} />
                        <Text style={{ color: "#0092C7", marginLeft: "10%",fontFamily: 'Roboto-Regular', fontSize: 12 }} >Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.itemStyle}>
                        <Question height={16} width={16} />
                        <Text style={{ color: "#0092C7", marginLeft: "10%",fontFamily: 'Roboto-Regular', fontSize: 12 }} >About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.replace('Auth')} style={styles.itemStyle}>
                        <Logout height={16} width={16} />
                        <Text style={{ color: "#0092C7", marginLeft: "10%",fontFamily: 'Roboto-Regular', fontSize: 12 }} >Logout</Text>
                    </TouchableOpacity>
                    <View style={styles.policyStyles}>
                        <Text style={{ color: "#707070",fontFamily: 'Roboto-Regular', fontSize: 12 }} >Terms & conditions / policy</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: '10%', height: 54, width: 150, justifyContent: 'space-between', }}>
                        <Icon.FontAwesome name="facebook" size={20} color="#0092C7" />
                        <Icon.FontAwesome name="instagram" size={20} color="#0092C7" />
                        <Icon.FontAwesome name="twitter" size={20} color="#0092C7" />
                    </View>
                </View>

                {/* <View style={{ justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: '5%' }}>
                        <Icon.FontAwesome name="facebook" size={20} color="#0092C7" />
                        <Icon.FontAwesome name="instagram" size={20} color="#0092C7" />
                        <Icon.FontAwesome name="twitter" size={20} color="#0092C7" />
                    </View>
                </View> */}
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 16,
        color: "#fff",
    },
    upperContainer: {
        flex: 0.3,
        justifyContent: 'center',
    },
    itemStyle: { flexDirection: 'row', height: 54, alignItems: 'center', paddingLeft: '10%' },
    policyStyles: { paddingLeft: '10%', paddingVertical: '10%' }
})

export default MainRoutes;