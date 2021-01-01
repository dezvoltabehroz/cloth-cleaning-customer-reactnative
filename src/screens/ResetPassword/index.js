import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Icon } from '../../components';
import styles from './style';
import Modal from 'react-native-modal';
import { Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
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
                    <View style={styles.cardContainer}>
                        <View style={styles.content}>
                            <View style={{ marginTop: '5%' }}>
                                <Input label="Email address" value={email}
                                    labelStyle={{ fontSize: 10, color: email ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                    inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                    containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                    inputContainerStyle={{ height: 30 }}
                                    placeholder="" />
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Input label="New password" value={password}
                                    labelStyle={{ fontSize: 10, color: password ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                    inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                    containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                    inputContainerStyle={{ height: 30 }}
                                    placeholder="*********" />
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Input label="Confirm password"
                                    value={confirmPassword}
                                    labelStyle={{ fontSize: 10, color: confirmPassword ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                    inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                    containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                    inputContainerStyle={{ height: 30 }}
                                    placeholder="*********" />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                                <TouchableOpacity style={{ alignSelf: 'flex-end', }} onPress={() => this.props.navigation.goBack()}>
                                    <LinearGradient colors={['#FFF', '#FFF']} style={styles.clearButtonContainer}>
                                        <Text style={styles.clearTextStyle}>{'Cancel'}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <View style={{ width: 5 }}></View>
                                <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => Alert.alert('Success', 'Password Change Successfully', [
                                    {
                                        text: "Cancel",
                                        onPress: () => this.props.navigation.goBack(),
                                        style: "cancel"
                                    },
                                    { text: "OK", onPress: () => this.props.navigation.goBack() }
                                ])}>
                                    <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                        <Text style={styles.checkButtonTextStyle}>{'Reset'}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </>
        )
    }
}