import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, Text, View, Alert, Platform } from 'react-native';
import { Button, Input, ClearButton } from '../../components';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { AuthServices } from '../../services';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import Logo from '../../assets/svg/logo.svg';
import Google from '../../assets/svg/google.svg';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            email: "",
            password: "",
        };
    }

    // ============== func_HandleLogin - Function Will allow user to get login ==============
    func_HandleLogin = async () => {
        const { replace } = this.props.navigation;
        const { email, password, submit } = this.state;
        if (email && password && submit) {
            let userData = {
                email: this.state.email,
                password: this.state.password
            }
            await this.props.authActions.userLogin(userData, replace);
        }
        else {
            this.setState({ submit: true })
        }

    }

    isEmailValid(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }

    // ============== func_HandleSignUp - Function Will allow user to register himself ==============
    func_HandleSignUp = () => {

    }

    // ============== func_HandleResetPassword - Function Will allow user to reset his/her password ==============
    func_HandleResetPassword = () => {

    }

    render() {
        const { email, password, loading, submit } = this.state;
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
                                    onFocus={() => this.setState({ submit: true })}
                                    onChangeText={(email) => this.setState({ email: email })}

                                />
                                {
                                    submit && !email ? <Text style={[styles.errorText]}>Please fill this field</Text> : null
                                }
                                {
                                    submit && email.length && !this.isEmailValid(email) ? <Text style={[styles.errorText]}>Email is invalid</Text> : null
                                }
                            </View>
                            <View style={{ marginHorizontal: '5%' }}>
                                <Input
                                    placeholder="Password"
                                    value={password}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password })}
                                />
                                {
                                    submit && !password ? <Text style={[styles.errorText]}>Please fill this field</Text> : null
                                }
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')} style={{ marginHorizontal: '7%', alignItems: 'flex-end' }} >
                                <Text style={{ fontFamily: 'Nunito-Regular' }} >Forget Password?</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', marginTop: '5%' }}>
                                <Button loading={this.props.user.loading} title='Login' onPress={() => this.func_HandleLogin()} />
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
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)