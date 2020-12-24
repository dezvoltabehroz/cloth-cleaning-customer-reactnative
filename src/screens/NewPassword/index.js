import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { Button, Input, ClearButton } from '../../components';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { AuthServices } from '../../services';
import Logo from '../../assets/svg/logo.svg';

export default class NewPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: ''
        };
    }

    // ============== func_HandleSetNewPassword - Function Will allow user to update his/her password ==============
    func_HandleSetNewPassword = () => {
        this.props.navigation.replace('Login')
    }


    render() {
        const { password, confirmPassword } = this.state;
        return (
            <>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground resizeMode="cover" style={styles.backgroundStyle} source={require('../../assets/images/verification.png')}>
                        <View style={{ marginTop: '15%', }}>
                            <View style={styles.innerImageContainer}>
                                <Logo />
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Text style={styles.headingTextStyle}>Enter New Password to Acess Your Account</Text>
                            </View>
                            <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                                <Input
                                    secureTextEntry={true}
                                    placeholder="New Password"
                                    value={password}
                                    onChangeText={(text) => this.setState({ password: text })}
                                />
                            </View>
                            <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                                <Input
                                    secureTextEntry={true}
                                    placeholder="Confirm New Password"
                                    value={confirmPassword}
                                    onChangeText={(text) => this.setState({ confirmPassword: text })}
                                />
                                {password != confirmPassword ?
                                    <Text style={[styles.errorText, { marginVertical: '2%' }]}>Password Mismatch</Text> : null}
                            </View>

                        </View>
                        <View style={{ marginHorizontal: '25%', marginTop: '5%' }}>
                            <Button disabled={password && confirmPassword && password == confirmPassword ? false : true} title='Confirm' onPress={() => this.func_HandleSetNewPassword()} />
                        </View>
                    </ImageBackground>
                </KeyboardAwareScrollView>
            </>
        );
    }
}