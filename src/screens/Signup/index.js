import React, { Component } from 'react';
import { Image, ImageBackground, Text, View, } from 'react-native';
import { Button, Input, } from '../../components';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Logo from '../../assets/svg/logo.svg';
import { AuthServices } from '../../services';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phonenumber: '',
            email: '',
            password: '',
            confirmPassword: '',
        };

    }

    // ============== func_HandleSignUp - Function Will allow user to register himself ==============
    func_HandleSignUp = () => {
        let userData = {
            full_name: this.state.name,
            email: this.state.email,
            phone: this.state.phonenumber,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        const { replace } = this.props.navigation
        this.props.authActions.sendVerificationCode(userData, replace)
    }

    // ============== func_HandleResetPassword - Function Will allow user to reset his/her password ==============
    func_HandleResetPassword = () => {

    }

    render() {
        const { name, phonenumber, email, password, confirmPassword, loading } = this.state;
        return (

            <ImageBackground resizeMode="cover" style={styles.backgroundStyle} source={require('../../assets/images/signup.jpg')}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.innerImageContainer}>
                        <Logo />
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
                            keyboardType={'phone-pad'}
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
                        {password != confirmPassword ?
                            <Text style={[styles.errorText, { marginVertical: '2%' }]}>Password Mismatch</Text> : null}
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: '5%' }}>
                        <Button loading={this.props.user.loading} disabled={email && name && password && confirmPassword && phonenumber ? false : true} title='Signup' onPress={() => this.func_HandleSignUp()} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: '5%', justifyContent: 'center' }}>
                        <Text style={{ color: '#707070', opacity: 0.7, fontFamily: 'Nunito-Regular', }}>Already have an account?</Text>
                        <Text onPress={() => this.props.navigation.replace('Auth')} style={{ marginLeft: '5%', fontFamily: 'Nunito-SemiBold', }}>Login</Text>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
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
export default connect(mapStateToProps, mapDispatchToProps)(Signup)