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
        const { email, name, phone, password, confirmPassword } = this.state;
        return (

            <>
                <View style={styles.container}>
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
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={() => this.setState({ changePassword: true })} style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.headingTitleStyle}>Change Password</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Icon.Entypo name="chevron-right" color={'#7A7A7A'} size={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal isVisible={this.state.changePassword}  >
                    <View style={styles.content}>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <TouchableOpacity onPress={() => this.setState({ changePassword: false })} style={styles.iconContainer}>
                                <Icon.Ionicons name='close-outline' size={15} color={'#7A7A7A'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Input label="Email address" value={email}
                                labelStyle={{ fontSize: 12, color: email ? '#0DA7DF' : '#374B5C' }}
                                inputStyle={{ fontSize: 12, }}
                                inputContainerStyle={{ height: 30 }}
                                placeholder="" />
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Input label="New password" value={password}
                                labelStyle={{ fontSize: 12, color: password ? '#0DA7DF' : '#374B5C' }}
                                inputStyle={{ fontSize: 12, }}
                                inputContainerStyle={{ height: 30 }}
                                placeholder="*********" />
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Input label="Confirm password"
                                value={confirmPassword}
                                labelStyle={{ fontSize: 12, color: confirmPassword ? '#0DA7DF' : '#374B5C' }}
                                inputStyle={{ fontSize: 12, }}
                                inputContainerStyle={{ height: 30 }}
                                placeholder="*********" />
                        </View>

                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => this.setState({ changePassword: false })}>
                            <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                <Text style={styles.checkButtonTextStyle}>{'Reset'}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.updateContactInfo}>
                    <View style={styles.content}>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <TouchableOpacity onPress={() => this.setState({ updateContactInfo: false })} style={styles.iconContainer}>
                                <Icon.Ionicons name='close-outline' size={15} color={'#7A7A7A'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Input label="Name" value={name}
                                labelStyle={{ fontSize: 12, color: name ? '#0DA7DF' : '#374B5C' }}
                                inputStyle={{ fontSize: 12, }}
                                onChangeText={(name) => this.setState({ name })}
                                inputContainerStyle={{ height: 30 }}
                                placeholder="" />
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Input label="Email address" value={email}
                                labelStyle={{ fontSize: 12, color: email ? '#0DA7DF' : '#374B5C' }}
                                inputStyle={{ fontSize: 12, }}
                                inputContainerStyle={{ height: 30 }}
                                onChangeText={(email) => this.setState({ email })}
                                placeholder="Enter email address"

                            />
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Input label="Mobile Number" value={phone}
                                labelStyle={{ fontSize: 12, color: phone ? '#0DA7DF' : '#374B5C' }}
                                inputStyle={{ fontSize: 12, }}
                                inputContainerStyle={{ height: 30 }}
                                onChangeText={(phone) => this.setState({ phone })}
                                placeholder="Enter phone number" />
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => this.setState({ updateContactInfo: false })}>
                            <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                <Text style={styles.checkButtonTextStyle}>{'Update'}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </>
        )
    }
}