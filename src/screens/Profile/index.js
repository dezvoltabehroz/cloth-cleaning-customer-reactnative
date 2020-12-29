import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '../../components';
import styles from './style';
import Modal from 'react-native-modal';
import { Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
export default class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "johndoe@gmail.com",
            name: 'John Doe',
            phone: '+123456789',
            changePassword: false,
            updateContactInfo: false,
            password: "",
            confirmPassword: ""
        }
    }

    render() {
        const { email, name, phone, password, confirmPassword, updateContactInfo } = this.state;
        return (

            <>
                <View style={{ marginTop: updateContactInfo ? '10%' : '5%' }}>
                    {
                        updateContactInfo ?
                            <View style={[styles.cardContainer]}>

                                <View style={{}}>
                                    <Input label="Name" value={name}
                                        labelStyle={{ fontSize: 10, color: email ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                        inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                        onChangeText={(name) => this.setState({ name })}
                                        inputContainerStyle={{ height: 30 }}
                                        placeholder="" />
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Input label="Email address" value={email}
                                        labelStyle={{ fontSize: 10, color: email ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                        inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                        inputContainerStyle={{ height: 30 }}
                                        onChangeText={(email) => this.setState({ email })}
                                        placeholder="Enter email address"

                                    />
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Input label="Mobile Number" value={phone}
                                        labelStyle={{ fontSize: 10, color: email ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                        inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                        inputContainerStyle={{ height: 30 }}
                                        onChangeText={(phone) => this.setState({ phone })}
                                        placeholder="Enter phone number" />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                                    <TouchableOpacity style={{ alignSelf: 'flex-end', }} onPress={() => this.setState({ updateContactInfo: false })}>
                                        <LinearGradient colors={['#FFF', '#FFF']} style={styles.clearButtonContainer}>
                                            <Text style={styles.clearTextStyle}>{'Cancel'}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <View style={{ width: 15 }}></View>
                                    <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => this.setState({ updateContactInfo: false })}>
                                        <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                            <Text style={styles.checkButtonTextStyle}>{'Update'}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            <View style={styles.cardContainer}>
                                <View style={styles.itemQuantityContainer}>
                                    <View>
                                        <Text style={styles.headingTitleStyle}>Contact Info</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.setState({ updateContactInfo: true })}>
                                        <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.lineStyle}></View>
                                <Text style={styles.listTextStyle}>{name}</Text>
                                <Text style={styles.listTextStyle}>{email}</Text>
                                <Text style={styles.listTextStyle}>{phone}</Text>
                            </View>
                    }

                </View>

            </>
        )
    }
}