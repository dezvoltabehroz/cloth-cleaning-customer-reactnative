import React, { Component } from 'react';
import { Image, ImageBackground, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, Input, ClearButton } from '../../components';
import styles from './style';
import CodeInput from 'react-native-confirmation-code-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { AuthServices } from '../../services';
export default class OTP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    // ============== func_HandleSubmitVerificationCode - Function Will allow user to verify the code to reset his/her password ==============
    func_HandleSubmitVerificationCode = () => {
        // const { token } = this.props.route.params;
        // if (this.state.value == token) {
        this.props.navigation.replace('Auth')
        // }
    }

    // ============== func_HandleResendCode - Function Will allow user to resend code to reset his/her email again ==============
    func_HandleResendCode = () => {
        // AuthServices.getCodeForResetPass(email)
        //     .then((response) => {
        //         console.log(response.data);
        //          this.props.navigation.replace('VerifyCode', { token: response.data.login_token })
        //     })
        //     .catch((err) => console.log(err))
    }

    render() {
        const { value } = this.state;
        return (
            <View style={{ paddingTop: Platform.OS === 'ios' ? 20 : 0, }}>
                <ImageBackground resizeMode="cover" style={styles.backgroundStyle} source={require('../../assets/images/verification.png')}>
                    <View style={{ flex: 0.95 }}>
                        <View style={{ flex: 0.8, marginTop: '15%', }}>
                            <View style={styles.innerImageContainer}>
                                <Image resizeMode="contain" style={styles.innerImageStyle} source={require('../../assets/images/logo.png')} />
                            </View>
                            <View style={{ marginTop: '5%', }}>
                                <Text style={styles.headingTextStyle}>Lorem Verification code send to your email</Text>
                                <Text style={styles.headingTextStyle1}>jo****@gmail.com</Text>
                            </View>
                            <View style={styles.codeContainer}>
                                <CodeInput
                                    codeLength={6}
                                    autoFocus={false}
                                    ref="codeInputRef1"
                                    cellBorderWidth={1}
                                    activeColor={'lightgray'}
                                    inactiveColor={'lightgray'}
                                    keyboardType='numeric'
                                    className="border-box"
                                    inputPosition='center'
                                    value={value}
                                    size={40}
                                    placeholder={"*"}
                                    onFulfill={(isValid) => this.setState({ value: isValid })}
                                    onCodeChange={(code) => this.setState({ value: code })}
                                    codeInputStyle={[styles.codeInput]} />
                            </View>
                        </View>
                        <View style={{ flex: 0.8, justifyContent: 'flex-end', marginBottom: '5%' }} >
                            <View style={{ marginHorizontal: '25%', marginTop: '5%' }}>
                                <Button disabled={value != '' ? false : true} loading={this.state.loading} title='Verify' onPress={this.func_HandleSubmitVerificationCode} />
                            </View>
                            <TouchableOpacity onPress={this.func_HandleResendCode} style={{ alignItems: 'center', marginTop: '5%' }} >
                                <Text style={{ color: '#707070' }}>Resend Code</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}