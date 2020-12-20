import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
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
        AuthServices.getCodeForResetPass(this.state.email)
            .then((response) => {
                console.log(response.data);
                this.props.navigation.replace('VerifyCode', { token: response.data.login_token, email: this.state.email })

            })
            .catch((err) => console.log(err))
    }


    render() {
        const { email } = this.state;
        return (
            <>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        {/* <ImageBackground resizeMode="cover" style={styles.backgroundImageStyle} source={require('../../assets/images/border.png')}>
                            <View style={styles.innerImageContainer}>
                                <Image resizeMode="contain" style={styles.innerImageStyle} source={require('../../assets/images/resetInnerImage.png')} />
                            </View>
                            <View style={[{ justifyContent: 'center', alignItems: 'center', bottom: '65%' }]}>
                                <Image resizeMode="cover" style={{ height: 50, width: 60 }} source={require('../../assets/images/envelope.png')} />
                            </View>
                        </ImageBackground> */}
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
                        <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                            <Button title='CONFIRM' onPress={() => this.func_HandleResetPassword()} />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
              
            </>
        );
    }
}