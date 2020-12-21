import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Home } from '../../screens';
import { Button, Icon } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar, withBadge, Icon as Icons } from 'react-native-elements';
import HomeRoutes from '../Home';
const Drawer = createDrawerNavigator();
const BadgedIcon = withBadge(1)(Icons);
function MainRoutes() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Home" >
            <Drawer.Screen name="Home" component={HomeRoutes} />
        </Drawer.Navigator>
    );
}

function CustomDrawerContent({ navigation }) {
    return (
        <>
            <View style={{ flex: 1 }} >


                <LinearGradient colors={['#27C2FA', '#27C2FA', '#0DA7DF']} style={{ flex: 0.3 }}>
                    <View style={styles.upperContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Avatar size={50} rounded={true} source={{ uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" }} />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: '5%' }}>
                                <Text style={{ color: "white", marginLeft: "10%", fontWeight: 'bold', fontSize: 16 }} >John Doe</Text>
                                <Text style={{ color: "white", marginLeft: "10%" }} >San Francisco, CA</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={{ flex: 0.7, paddingTop: '10%' }}>
                    <TouchableOpacity style={styles.itemStyle}>
                        <Icon.SimpleLineIcons name="handbag" size={20} color="#0092C7" />
                        <Text style={{ color: "#0092C7", marginLeft: "10%" }} >Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemStyle}>
                        <Icon.Feather name="user" size={20} color="#0092C7" />
                        <Text style={{ color: "#0092C7", marginLeft: "10%" }} >Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress style={styles.itemStyle}>
                        <Icon.AntDesign name="questioncircleo" size={20} color="#0092C7" />
                        <Text style={{ color: "#0092C7", marginLeft: "10%" }} >About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.replace('Auth')} style={styles.itemStyle}>
                        <View style={{ transform: [{ rotate: '180deg' }] }}>
                            <Icon.AntDesign name="logout" size={20} color="#0092C7" />
                        </View>
                        <Text style={{ color: "#0092C7", marginLeft: "10%" }} >Logout</Text>
                    </TouchableOpacity>
                    <View style={styles.policyStyles}>
                        <Text style={{ color: "#707070" }} >Terms & conditions / policy</Text>

                    </View>

                </View>

                <View style={{ justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: '5%' }}>
                        <Icon.FontAwesome name="facebook" size={20} color="#0092C7" />
                        <Icon.FontAwesome name="instagram" size={20} color="#0092C7" />
                        <Icon.FontAwesome name="twitter" size={20} color="#0092C7" />
                    </View>
                </View>
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
        marginTop: '20%',
        marginLeft: '10%'

    },
    itemStyle: { flexDirection: 'row', height: 54, alignItems: 'center', paddingLeft: '10%' },
    policyStyles: { height: 54, paddingLeft: '10%', paddingTop: '10%' }
})

export default MainRoutes;