import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, Text, View, Alert } from 'react-native';
import { Button, Input, ClearButton } from '../../components';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { AuthServices } from '../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // ============== func_HandleSignUp - Function Will allow user to register himself ==============
    func_HandleSignUp = () => {
        this.setState({ loading: true });
        // let userData = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // AuthServices.userLogin(userData)
        //     .then(async (response) => {
        //         await AsyncStorage.setItem('USER_TOKEN', JSON.stringify(response.data.login_token));
        this.props.navigation.replace('Auth', { screen: 'OTP' });
        //         this.setState({ loading: false });
        //     })
        //     .catch((error) => {
        //         if (error.message == 'Request failed with status code 401') {
        //             Alert.alert("Attension", "Invalid Credentials");
        //             this.setState({ loading: false });
        //         }
        //     })
    }

    // ============== func_HandleResetPassword - Function Will allow user to reset his/her password ==============
    func_HandleResetPassword = () => {

    }

    render() {
        const { name, phonenumber, email, password, confirmPassword, loading } = this.state;
        return (
            <View>
                <ImageBackground resizeMode="cover" style={styles.backgroundStyle} source={require('../../assets/images/login.jpg')}>
                    <View style={{ flex: 0.95, }}>
                        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.innerImageContainer}>
                                <Image resizeMode="contain" style={styles.innerImageStyle} source={require('../../assets/images/logo.png')} />
                            </View>

                            <View style={{ marginHorizontal: '5%', marginTop: '10%' }}>
                                <Input
                                    placeholder="Name *"
                                    value={name}
                                    onChangeText={(name) => this.setState({ name: name })}
                                />
                            </View>
                            <View style={{ marginHorizontal: '5%', }}>
                                <Input
                                    placeholder="Phone Number *"
                                    value={phonenumber}
                                    onChangeText={(phonenumber) => this.setState({ phonenumber: phonenumber })}
                                />
                            </View>
                            <View style={{ marginHorizontal: '5%', }}>
                                <Input
                                    placeholder="Email *"
                                    value={email}
                                    onChangeText={(email) => this.setState({ email: email })}
                                />
                            </View>
                            <View style={{ marginHorizontal: '5%', }}>
                                <Input
                                    placeholder="Password *"
                                    value={password}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password: password })}
                                />
                            </View>
                            <View style={{ marginHorizontal: '5%' }}>
                                <Input
                                    placeholder="Confirm password *"
                                    value={confirmPassword}
                                    secureTextEntry={true}
                                    onChangeText={(confirmPassword) => this.setState({ confirmPassword: confirmPassword })}
                                />
                            </View>
                            {/* <TouchableOpacity onPress={() => this.props.navigation.replace('ForgetPassword')} style={{ marginHorizontal: '7%', alignItems: 'flex-end' }} >
                        <Text style={{ color: '' }} >
                            Forget Password?
                        </Text>
                    </TouchableOpacity> */}
                            <View style={{ marginHorizontal: '25%', marginTop: '5%' }}>
                                <Button loading={loading} title='Signup' onPress={() => this.func_HandleSignUp()} />
                            </View>
                        </ KeyboardAwareScrollView>
                        <View style={{ flexDirection: 'row', marginBottom: '5%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#707070', opacity: 0.7 }}>Already have an account?</Text>
                            <Text onPress={() => this.props.navigation.replace('Auth')} style={{ marginLeft: '5%', fontWeight: 'bold' }}>Login</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}