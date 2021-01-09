import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Icon } from '../../components';
import styles from './style';
import Modal from 'react-native-modal';
import { Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { AuthServices } from '../../services';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "johndoe@gmail.com",
            password: "",
            confirmPassword: ""
        }
    }

    render() {
        const { email, name, phone, password, confirmPassword } = this.state;
        return (

            <>
                <View style={styles.container}>
                    <KeyboardAwareScrollView>

                        <View style={styles.cardContainer}>
                            <View style={styles.content}>
                                <View style={{ marginTop: '5%' }}>
                                    <Input label="Email address" value={email} disabled={true}
                                        labelStyle={{ fontSize: 10, color: email ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                        inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                        containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                        inputContainerStyle={{ height: 30 }}
                                        placeholder="" />
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Input label="New password" value={password}
                                        secureTextEntry={true}
                                        onChangeText={(password) => this.setState({ password })}
                                        labelStyle={{ fontSize: 10, color: password ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                        inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                        containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                        inputContainerStyle={{ height: 30 }}
                                        placeholder="*********" />
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Input label="Confirm New Password"
                                        value={confirmPassword}
                                        secureTextEntry={true}
                                        onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                                        labelStyle={{ fontSize: 10, color: confirmPassword ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                        inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                        containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                        inputContainerStyle={{ height: 30 }}
                                        placeholder="*********" />
                                    {password != confirmPassword ?
                                        <Text style={[styles.errorText, { marginVertical: '2%' }]}>Password Mismatch</Text> : null}
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                                    <TouchableOpacity style={{ alignSelf: 'flex-end', }} onPress={() => this.props.navigation.goBack()}>
                                        <LinearGradient colors={['#FFF', '#FFF']} style={styles.clearButtonContainer}>
                                            <Text style={styles.clearTextStyle}>{'Cancel'}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <View style={{ width: 5 }}></View>
                                    <TouchableOpacity disabled={password != '' && confirmPassword != '' ? false : true} style={{ alignSelf: 'flex-end' }} onPress={() => Alert.alert('Success', 'Password Change Successfully', [
                                        {
                                            text: "OK", onPress: () => {
                                                let userData = {
                                                    id: this.props.user.userData.id,
                                                    password: this.state.password,
                                                }
                                                AuthServices.updatePassword(userData)
                                                    .then((res) => {
                                                        console.log(res.data)
                                                        this.props.navigation.goBack()
                                                    })
                                                    .catch((err) => console.log(err))
                                            },
                                        }
                                    ])}>
                                        <LinearGradient colors={password != '' && confirmPassword != '' && password == confirmPassword ? ['#0DA7DF', '#27C2FA'] : ['#f2f2f2', '#e2e2e2']} style={styles.checkoutButtonContainer}>
                                            <Text style={styles.checkButtonTextStyle}>{'Reset'}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </>
        )
    }
}