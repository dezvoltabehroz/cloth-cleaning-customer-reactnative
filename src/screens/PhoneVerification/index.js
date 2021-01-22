import React, { Component } from 'react';
import { Image, ImageBackground, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, Input, ClearButton } from '../../components';
import styles from './style';
import CodeInput from 'react-native-confirmation-code-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { AuthServices } from '../../services';
import Logo from '../../assets/svg/logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';

class PhoneVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    // ============== func_HandleSubmitVerificationCode - Function Will allow user to verify the code to reset his/her password ==============
    func_HandleSubmitVerificationCode = () => {
        const { userData, phoneAuthSnapshot } = this.props.route.params;
        let data = {
            ...userData,
            code: phoneAuthSnapshot.code,
            phoneAuthSnapshotId: phoneAuthSnapshot.verificationId
        }
        this.props.authActions.phoneVerifyCode(data, this.props.navigation.goBack())
    }

    // ============== func_HandleResendCode - Function Will allow user to resend code to reset his/her email again ==============
    func_HandleResendCode = () => {
        const { userData } = this.props.route.params;
        this.props.authActions.phoneVerificationCode(userData)
    }

    render() {
        const { value } = this.state;
        const { userData } = this.props.route.params;
        return (
            <View>
                <ImageBackground resizeMode="cover" style={styles.backgroundStyle} source={require('../../assets/images/verification.png')}>
                    <View style={{ flex: 0.95 }}>
                        <View style={{ flex: 0.8, marginTop: '15%', }}>
                            <View style={styles.innerImageContainer}>
                                <Logo />
                            </View>
                            <View style={{ marginTop: '5%', }}>
                                <Text style={styles.headingTextStyle}>{userData.name} Verification code send to your phone number </Text>
                                <Text style={styles.headingTextStyle1}>{userData.phone}</Text>
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
                            <View style={{ alignItems: 'center', marginTop: '5%' }}>
                                <Button disabled={value != '' ? false : true} loading={this.props.user.loading} title='Verify' onPress={this.func_HandleSubmitVerificationCode} />
                            </View>
                            <TouchableOpacity onPress={this.func_HandleResendCode} style={{ alignItems: 'center', marginTop: '5%' }} >
                                <Text style={{ color: '#707070', fontFamily: 'Roboto-Regular', }}>Resend Code</Text>
                            </TouchableOpacity>
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
        authActions: bindActionCreators(authActions, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PhoneVerification)