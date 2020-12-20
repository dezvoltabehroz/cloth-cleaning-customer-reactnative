import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { Button, Input, ClearButton } from '../../components';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { AuthServices } from '../../services';

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
        const { token } = this.props.route.params;
        AuthServices.updatePassword(token, this.state.password)
            .then((response) => {
                this.props.navigation.replace('Login')
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        const { password, confirmPassword } = this.state;
        return (
            <>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        {/* <ImageBackground resizeMode="cover" style={styles.backgroundImageStyle} source={require('../../assets/images/border.png')}>
                            <View style={styles.innerImageContainer}>
                                <Image resizeMode="contain" style={styles.innerImageStyle} source={require('../../assets/images/otp.png')} />
                            </View>
                        </ImageBackground> */}
                        <View style={{ marginTop: '20%' }}>
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
                        <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                            <Button disabled={password && confirmPassword && password == confirmPassword ? false : true} title='CONFIRM' onPress={() => this.func_HandleSetNewPassword()} />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
              
            </>
        );
    }
}