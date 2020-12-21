import React, { Component } from 'react';
import { Image, ImageBackground, Platform, ScrollView, Text, View } from 'react-native';
import { Button, Input, ClearButton } from '../../components';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { AuthServices } from '../../services';

export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    // ============== func_HandleResetPassword - Function Will allow user to reset his/her password ==============
    func_HandleResetPassword = () => {
        this.props.navigation.replace('OTP', { password: true })
        // AuthServices.getCodeForResetPass(this.state.email)
        //     .then((response) => {
        //         console.log(response.data);
        //         this.props.navigation.replace('VerifyCode', { token: response.data.login_token, email: this.state.email })

        //     })
        //     .catch((err) => console.log(err))
    }


    render() {
        const { email } = this.state;
        return (
            <>
                <View style={{ flex: 0.95 }}>
                    <ImageBackground resizeMode="cover" style={styles.backgroundStyle} source={require('../../assets/images/verification.png')}>
                        <View style={{ flex: 0.95 }}>
                            <View style={{ flex: 0.8, marginTop: '15%', }}>
                                <View style={styles.innerImageContainer}>
                                    <Image resizeMode="contain" style={styles.innerImageStyle} source={require('../../assets/images/logo.png')} />
                                </View>
                                <View style={{ marginTop: '5%', }}>
                                    <Text style={styles.headingTextStyle}>Enter Email to Reset Password</Text>
                                </View>
                                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                                    <Input
                                        placeholder="Email"
                                        value={email}
                                        onChangeText={(email) => this.setState({ email: email })}
                                    />
                                </View>
                                <View style={{ marginHorizontal: '25%', marginTop: '5%' }}>
                                    <Button title='CONFIRM' onPress={() => this.func_HandleResetPassword()} />
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </>
        );
    }
}