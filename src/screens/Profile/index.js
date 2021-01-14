import React, { Component } from 'react';
import { View, Text, TouchableOpacity, PixelRatio } from 'react-native';
import { Icon } from '../../components';
import styles from './style';
import Modal from 'react-native-modal';
import { Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { AuthServices } from '../../services';
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "johndoe@gmail.com",
            name: 'John Doe',
            phone: '+123456789',
            changePassword: false,
            updateContactInfo: false,
            password: "",
            confirmPassword: "",
            address: "",
            city: "",
            loading: true,
            buttonLoading: false
        }
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                name: this.props.user.userData.fullName,
                phone: this.props.user.userData.phone,
                email: this.props.user.userData.email,
                city: this.props.user.userData.city,
                address: this.props.user.userData.address,
                loading: false
            })
        }, 3000);
    }

    handleUpdate = () => {
        this.setState({ buttonLoading: true })
        const { name, phone, city, address } = this.state;
        let userData = {
            id: this.props.user.userData.id,
            fullName: name,
            city: city,
            address: address,
            token: this.props.user.userToken
        }
        AuthServices.updateUserProfile(userData)
            .then(async (response) => {
                console.log(response.data)
                await this.props.authActions.getUserProfile(userData, null)
                this.setState({ updateContactInfo: false, buttonLoading: false }, () =>
                    this.componentDidMount())
            })
            .catch((err) => console.log(err))
    }

    render() {
        const { email, name, phone, password, confirmPassword, updateContactInfo, city, address, loading, buttonLoading } = this.state;
        return (

            <>
                <KeyboardAwareScrollView>

                    <View style={{ marginTop: updateContactInfo ? '10%' : '5%' }}>
                        {
                            updateContactInfo ?
                                <View style={[styles.cardContainer]}>

                                    <View style={{}}>
                                        <Input label="Name" value={name}
                                            labelStyle={{ fontSize: 10, color: email ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                            inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                            onChangeText={(name) => this.setState({ name })}
                                            containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                            inputContainerStyle={{ height: 30 }}
                                            placeholder="" />
                                    </View>
                                    <View style={{ marginTop: '5%' }}>
                                        <Input label="Email address" value={email}
                                            disabled={true}
                                            labelStyle={{ fontSize: 10, color: email ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                            inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                            inputContainerStyle={{ height: 30, marginHorizontal: 0 }}
                                            containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                            onChangeText={(email) => this.setState({ email })}
                                            placeholder="Enter email address"

                                        />
                                    </View>
                                    <View style={{ marginTop: '5%' }}>
                                        <Input label="Mobile Number" value={phone}
                                            labelStyle={{ fontSize: 10, color: phone ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                            inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                            inputContainerStyle={{ height: 30 }}
                                            containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                            onChangeText={(phone) => this.setState({ phone })}
                                            placeholder="Enter phone number" />
                                    </View>
                                    <View style={{ marginTop: '5%' }}>
                                        <Input label="Address" value={address}
                                            labelStyle={{ fontSize: 10, color: phone ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                            inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                            inputContainerStyle={{ height: 30 }}
                                            containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                            onChangeText={(address) => this.setState({ address })}
                                            placeholder="Enter address" />
                                    </View>
                                    <View style={{ marginTop: '5%' }}>
                                        <Input label="City" value={city}
                                            labelStyle={{ fontSize: 10, color: phone ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                            inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                            inputContainerStyle={{ height: 30 }}
                                            containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                            onChangeText={(city) => this.setState({ city })}
                                            placeholder="Enter city" />
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                                        <TouchableOpacity onPress={() => this.setState({
                                            updateContactInfo: false,
                                            name: this.props.user.userData.fullName,
                                            phone: this.props.user.userData.phone,
                                            email: this.props.user.userData.email,
                                            city: this.props.user.userData.city,
                                            address: this.props.user.userData.address
                                        })}>
                                            <LinearGradient colors={['#FFF', '#FFF']} style={styles.clearButtonContainer}>
                                                <Text style={styles.clearTextStyle}>{'Cancel'}</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <View style={{ width: 5 }}></View>
                                        <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => this.handleUpdate()}>
                                            <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                                {
                                                    buttonLoading ?
                                                        <ActivityIndicator size={20} color="#FFF" />
                                                        :
                                                        <Text style={styles.checkButtonTextStyle}>{'Update'}</Text>
                                                }
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
                                    {
                                        loading ?
                                            <View style={{ justifyContent: 'center', marginTop: '5%' }}>
                                                <ActivityIndicator size={30} color="#0DA7DF" />
                                            </View>
                                            :
                                            <>
                                                <Text style={styles.listTextStyle}>{name}</Text>
                                                <Text style={styles.listTextStyle}>{email}</Text>
                                                <Text style={styles.listTextStyle}>{phone}</Text>
                                            </>
                                    }

                                </View>
                        }

                    </View>
                </KeyboardAwareScrollView>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {}
    };
};
const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)