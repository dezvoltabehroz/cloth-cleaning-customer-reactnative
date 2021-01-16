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
import PhoneInput from 'react-native-phone-input';
import CountryPicker, { FlagButton } from 'react-native-country-picker-modal';
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
            buttonLoading: false,
            isVisible: false,
            disabled: true
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

    handleUpdate = async () => {
        this.setState({ buttonLoading: true })
        const { name, phone, city, address } = this.state;
        let userData = {
            id: this.props.user.userData.id,
            fullName: name,
            city: city,
            phone: phone,
            address: address,
            token: this.props.user.userToken,
            phoneVerification: true
        }
        console.log(userData)
        if (this.props.user.userData.phone != phone) {
            await this.props.authActions.phoneVerificationCode(userData, this.props.navigation.replace);
        }
        else {
            AuthServices.updateUserProfile(userData)
                .then(async (response) => {
                    console.log(response.data)
                    await this.props.authActions.getUserProfile(userData, null)
                    this.setState({ updateContactInfo: false, buttonLoading: false }, () => setTimeout(() => {
                        this.componentDidMount()
                    }, 5000))
                })
                .catch((err) => console.log(err))
        }
    }

    onSelect = (country) => {
        this.setState({
            countryCode: country.cca2,
            phone: "+" + country.callingCode[0],
            country: country,
            isVisible: false
        })
    };
    selectCountry(country) {
        console.log(country)
        this.phoneRef.selectCountry(country.cca2);
        this.setState({ phone: "+" + country.callingCode, countryCode: country.cca2 })

    }

    _flagButton = () => {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => this.setState({ isVisible: !this.state.isVisible })} >
                <View style={{}}>
                    <FlagButton
                        onOpen={() => this.setState({ isVisible: !this.state.isVisible })}
                        onClose={() => this.setState({ isVisible: !this.state.isVisible })}
                        placeholder={""}
                        withEmoji={false}
                        withFlagButton={false}
                        countryCode={this.state.countryCode}
                        containerButtonStyle={{ height: 0 }}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    disabled = () => {
        console.log("false")
        const { phone, name, city, address } = this.state;
        if (this.isNameValid(name) && this.isPhoneValid(phone) && address.length && city.length) {
            this.setState({ disabled: false })
        } else {
            this.setState({ disabled: true })
        }
    }

    isPhoneValid = (phone) => {
        return /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(phone)
    }

    isNameValid(name) {
        return /^[A-Za-z\s]{1,}[A-Za-z\s]{0,}$/.test(name)
    }


    render() {
        const { email, name, phone, password, disabled, updateContactInfo, city, address, loading, buttonLoading } = this.state;
        return (

            <>
                <KeyboardAwareScrollView>

                    <View style={{ marginTop: updateContactInfo ? '10%' : '5%' }}>
                        {
                            updateContactInfo ?
                                <View style={[styles.cardContainer]}>

                                    <View style={{}}>
                                        <Input label="Name" value={name}
                                            labelStyle={{ fontSize: 10, color: name ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                            inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                            onChangeText={(name) => this.setState({ name })}
                                            onBlur={() => this.disabled()}
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
                                        <Text style={{ fontSize: 10, color: phone ? '#0DA7DF' : '#374B5C', fontWeight: 'bold', fontFamily: 'Roboto-Bold', marginBottom: 10 }}>Mobile Number</Text>

                                        <View style={{ height: 30, justifyContent: 'center', paddingHorizontal: "2.5%", borderRadius: 5, borderBottomWidth: 1, borderColor: '#7A7A7A' }}>
                                            <PhoneInput
                                                ref={c => (this.phoneRef = c)}
                                                onPressFlag={() => this.setState({ isVisible: true })}
                                                autoFormat={true}
                                                allowZeroAfterCountryCode={false}
                                                textStyle={{
                                                    marginTop: 2,
                                                    lineHeight: 20,
                                                    fontFamily: 'Nunito-Regular',
                                                    fontSize: 14,
                                                    color: 'grey',
                                                }}
                                                returnKeyType="next"
                                                blur={console.log('Hello')}
                                                onChangePhoneNumber={(phone) => this.setState({ phone }, () => this.disabled())}
                                                value={phone}
                                                textProps={{
                                                    placeholder: 'Phone Number *',
                                                    placeholderTextColor: "grey",
                                                }}
                                            />
                                            <View >
                                                <CountryPicker
                                                    countryCodes={['PK']}
                                                    theme={styles.themeText}
                                                    withFilter={true}
                                                    visible={this.state.isVisible}
                                                    onSelect={(country) => this.onSelect(country)}
                                                    withAlphaFilter={true}
                                                    withCountryNameButton={true}
                                                    renderFlagButton={this._flagButton}
                                                >
                                                    <View />
                                                </CountryPicker>
                                            </View>
                                        </View>
                                    </View>
                                    {
                                        phone.length && !this.isPhoneValid(phone) ? <Text style={[styles.errorText]}>Phone is invalid </Text> : null
                                    }
                                    <View style={{ marginTop: '10%' }}>
                                        <Input label="Address" value={address}
                                            labelStyle={{ fontSize: 10, color: phone ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                            inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                            inputContainerStyle={{ height: 30 }}
                                            onBlur={() => this.disabled()}
                                            containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                                            onChangeText={(address) => this.setState({ address })}
                                            placeholder="Enter address" />
                                    </View>
                                    <View style={{ marginTop: '5%' }}>
                                        <Input label="City" value={city}
                                            labelStyle={{ fontSize: 10, color: phone ? '#0DA7DF' : '#374B5C', fontFamily: 'Roboto-Regular' }}
                                            inputStyle={{ fontSize: 12, fontFamily: 'Roboto-Medium' }}
                                            inputContainerStyle={{ height: 30 }}
                                            onBlur={() => this.disabled()}
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
                                        <TouchableOpacity disabled={disabled} style={{ justifyContent: 'center' }} onPress={() => this.handleUpdate()}>
                                            <LinearGradient colors={disabled ? ['#e2e2e2', '#e2e2e2'] : ['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
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