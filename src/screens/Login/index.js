import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, Text, View, Alert, Platform } from 'react-native';
import { Button, Input, ClearButton } from '../../components';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { AuthServices } from '../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../assets/svg/logo.svg';
import Google from '../../assets/svg/google.svg';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // ============== func_HandleLogin - Function Will allow user to get login ==============
    func_HandleLogin = () => {
        this.setState({ loading: true });
        this.props.navigation.replace('Main');
        // let userData = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // AuthServices.userLogin(userData)
        //     .then(async (response) => {
        //         await AsyncStorage.setItem('USER_TOKEN', JSON.stringify(response.data.login_token));
        //         this.props.navigation.replace('Main');
        //         this.setState({ loading: false });
        //     })
        //     .catch((error) => {
        //         if (error.message == 'Request failed with status code 401') {
        //             Alert.alert("Attension", "Invalid Credentials");
        //             this.setState({ loading: false });
        //         }
        //     })
    }

    // ============== func_HandleSignUp - Function Will allow user to register himself ==============
    func_HandleSignUp = () => {

    }

    // ============== func_HandleResetPassword - Function Will allow user to reset his/her password ==============
    func_HandleResetPassword = () => {

    }

    render() {
        const { email, password, loading } = this.state;
        return (
            <View>
                <ImageBackground resizeMode="cover" style={styles.backgroundStyle} source={require('../../assets/images/login.jpg')}>
                    <View style={{ flex: 0.95, }}>
                        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.innerImageContainer}>
                                <Logo />
                            </View>
                            <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                                <Input
                                    placeholder="Phone Number / Email"
                                    value={email}
                                    onChangeText={(email) => this.setState({ email: email })}
                                />
                            </View>
                            <View style={{ marginHorizontal: '5%' }}>
                                <Input
                                    placeholder="Password"
                                    value={password}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password: password }, () => console.log(password))}
                                />
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')} style={{ marginHorizontal: '7%', alignItems: 'flex-end' }} >
                                <Text style={{ fontFamily: 'Nunito-Regular' }} >Forget Password?</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', marginTop: '5%' }}>
                                <Button loading={loading} title='Login' onPress={() => this.func_HandleLogin()} />
                            </View>
                            <View style={{ alignItems: 'center', marginTop: '5%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: 'red', height: 44, width: 180 }}>
                                    <Google />
                                    <Text style={{ marginLeft: '10%', fontFamily: 'Nunito-Regular', fontSize: 16 }}>Google</Text>
                                </View>
                            </View>

                        </ KeyboardAwareScrollView>

                        <View style={{ flexDirection: 'row', marginBottom: '5%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#707070', opacity: 0.7, fontFamily: 'Nunito-Regular' }}>Don't have an account?</Text>
                            <Text onPress={() => this.props.navigation.navigate('Signup')} style={{ marginLeft: '5%', fontFamily: 'Nunito-SemiBold', fontSize: 15 }}>Signup</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>

        );
    }
}