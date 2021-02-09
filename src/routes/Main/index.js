import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar, withBadge, Icon as Icons } from 'react-native-elements';
import HomeRoutes from '../Home';
import User from '../../assets/svg/user.svg';
import Bag from '../../assets/svg/bag.svg';
import Question from '../../assets/svg/question.svg';
import Logout from '../../assets/svg/logout.svg';
import { authActions } from '../../redux/actions/auth';
import { useDispatch, connect } from 'react-redux';
import { Linking } from 'react-native';

const Drawer = createDrawerNavigator();
const BadgedIcon = withBadge(1)(Icons);
function MainRoutes(props) {
    return (
        <Drawer.Navigator drawerContent={(data) => <CustomDrawerContent props={props} {...data} />} initialRouteName="Home" >
            <Drawer.Screen name="Home" component={HomeRoutes} options={{
                swipeEnabled: false
            }} />
        </Drawer.Navigator>
    );
}

function CustomDrawerContent({ navigation, props }) {
    const dispatch = useDispatch();
    let title = props?.user?.userData?.fullName.split(' ');
    console.log(title.length)
    return (
        <>
            <View style={{ flex: 1 }} >
                <LinearGradient colors={['#27C2FA', '#27C2FA', '#0DA7DF']} style={styles.upperContainer}>
                    <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.upperContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: '10%', alignItems: 'center' }}>
                            <View>
                                <Avatar containerStyle={{ backgroundColor: 'white' }} size={50} title={title ? title.length == 1 ? title[0][0] : title[0][0] + title.length > 1 ? title[1][0] : "" : ""} titleStyle={{ color: '#0092C7', fontSize: 16 }} rounded={true} />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: '5%' }}>
                                <Text style={{ color: "white", marginLeft: "10%", fontFamily: 'Roboto-Bold', }} >{props?.user?.userData?.fullName}</Text>
                                <Text style={{ color: "white", marginLeft: "10%", fontFamily: 'Roboto-Regular', fontSize: 10 }} >{props?.user?.userData?.city}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={{ flex: 0.7, paddingTop: '10%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Orders')} style={styles.itemStyle}>
                        <Bag height={16} width={16} />
                        <Text style={{ color: "#0092C7", marginLeft: "10%", fontFamily: 'Roboto-Regular', fontSize: 12 }}>Orders History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.itemStyle}>
                        <User height={16} width={16} />
                        <Text style={{ color: "#0092C7", marginLeft: "10%", fontFamily: 'Roboto-Regular', fontSize: 12 }} >Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.itemStyle}>
                        <Question height={16} width={16} />
                        <Text style={{ color: "#0092C7", marginLeft: "10%", fontFamily: 'Roboto-Regular', fontSize: 12 }} >About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(authActions.removeUser(navigation.replace))} style={styles.itemStyle}>
                        <Logout height={16} width={16} />
                        <Text style={{ color: "#0092C7", marginLeft: "10%", fontFamily: 'Roboto-Regular', fontSize: 12 }} >Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("Terms and condition will be furnished soon")} style={styles.policyStyles}>
                        <Text style={{ color: "#707070", fontFamily: 'Roboto-Regular', fontSize: 12 }} >Terms & conditions / policy</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: '10%', height: 54, width: 150, justifyContent: 'space-between', }}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/dhobiuncle.pk')}>
                        <Icon.FontAwesome name="facebook" size={20} color="#707070" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/dhobiuncle.pk/")}>
                        <Icon.FontAwesome name="instagram" size={20} color="#707070" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/dhobiuncle")}>
                        <Icon.FontAwesome name="twitter" size={20} color="#707070" />
                    </TouchableOpacity>
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
        flex: 0.3,
        justifyContent: 'center',
    },
    itemStyle: { flexDirection: 'row', height: 54, alignItems: 'center', paddingLeft: '10%' },
    policyStyles: { paddingLeft: '10%', paddingVertical: '10%' }
});

const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {}
    };
};

export default connect(mapStateToProps)(MainRoutes);