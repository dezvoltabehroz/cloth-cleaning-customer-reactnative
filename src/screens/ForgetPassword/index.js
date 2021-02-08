import React, { Component } from 'react';
import { Image, ImageBackground, Platform, ScrollView, Text, View } from 'react-native';
import { Button, Input, ClearButton } from '../../components';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { AuthServices } from '../../services';
import Logo from '../../assets/svg/logo.svg';
import { connect } from 'react-redux';
class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', loading: false, submit: false
        };
    }

    // ============== func_HandleResetPassword - Function Will allow user to reset his/her password ==============
    func_HandleResetPassword = async () => {
        await this.setState({ submit: true })
        const { email, submit } = this.state;
        if (submit && this.isEmailValid(email)) {
            this.setState({ loading: true })
            AuthServices.resetpasswordmail(email)
                .then((response) => {
                    if (response.data.success) {
                        this.props.navigation.replace('OTP', { email: email, password: true })
                    }

                })
                .catch((err) => console.log(err))
        }

    }

    isEmailValid(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }

    render() {
        const { email, submit, loading } = this.state;
        return (
            <>
                <View style={{ flex: 0.95 }}>
                    <ImageBackground resizeMode="cover" style={styles.backgroundStyle} source={require('../../assets/images/verification.png')}>
                        <View style={{ flex: 0.95 }}>
                            <View style={{ flex: 0.8, marginTop: '15%', }}>
                                <View style={styles.innerImageContainer}>
                                    <Logo />
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
                                    {
                                        submit && !email ? <Text style={[styles.errorText]}>Please fill this field</Text> : null
                                    }
                                    {
                                        submit && email.length && !this.isEmailValid(email) ? <Text style={[styles.errorText]}>Email is invalid</Text> : null
                                    }
                                </View>
                                <View style={{ alignItems: 'center', marginTop: '5%' }}>
                                    <Button loading={loading} title='Confirm' onPress={() => this.func_HandleResetPassword()} />
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {}
    };
};


export default connect(mapStateToProps)(ForgetPassword)