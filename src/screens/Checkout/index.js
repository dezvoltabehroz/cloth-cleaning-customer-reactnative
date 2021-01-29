import React, { Component } from 'react';
import { View, Text, ImageBackground, Keyboard, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import { Icon, Tabs, Pickup, Payment, Input } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Modal from 'react-native-modal';
const screenHeight = Dimensions.get('window').height;
import ThankYou from '../../assets/svg/thankyou.svg';
import { connect } from 'react-redux';
import { cartActions } from '../../redux/actions/cart';
import { bindActionCreators } from "redux";
import { OrdersServices } from '../../services';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
import { ActivityIndicator } from 'react-native';
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            totalPrice: this.props.route.params.totalPrice,
            discount: false,
            delivery: 50,
            code: '',
            orderList: [],
            urgent: 0,
            discountValue: null,
            discountModal: false,
            keyboardState: false,
            day: "",
            time: '',
            lat: "",
            lng: "",
            note: "",
            address: "",
            transactionId: "",
            products: [],
            region: {},
            addressLocation: "",
            location: {},
            initialLoading: true,
            percentage: null,
            discountLoading: false


        }
    }
    findCoordinates = () => {
        Geolocation.getCurrentPosition(
            position => {
                Geocoder.geocodePosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
                    .then(async (res) => {
                        let userData = {
                            region: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            },
                            address: res[0].formattedAddress,
                        }
                        await this.props.cartActions.setRegion(userData)
                        setTimeout(() => {
                            this.setState({ initialLoading: false })
                        }, 5000);
                    })
                    .catch(error => alert(error));
            },
            (error) => console.log(error)
        );
    };

    componentWillMount() {
        // this.findCoordinates();
        this.setState({ initialLoading: false })
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        this.setState({
            keyboardState: true
        });
    }

    _keyboardDidHide = () => {
        this.setState({
            keyboardState: false
        });
    }

    componentDidMount = () => {
        let array = [];
        this.props.cart.cart.map((item, index) => {
            array.push({
                quantity: parseInt(item.quantity),
                unitPrice: item.price * parseInt(item.quantity),
                product_id: item.id
            })
        });

        this.setState({ orderList: this.props.cart.cart, products: array })
    }

    handlePlaceOrder = () => {
        const { lat, lng, day, time, totalPrice, couponId, discountValue, urgent, paymentMethod, note, products, transactionId, activeTab } = this.state;
        let userData = {
            name: this.props.user.userData.fullName,
            email: this.props.user.userData.email,
            phone: this.props.user.userData.phone,
            customer_id: this.props.user.userData.id,
            lat: this.props.cart.region.latitude ? this.props.cart.region.latitude : "",
            long: this.props.cart.region.longitude ? this.props.cart.region.longitude : "",
            day: day,
            time: time,
            totalPrice: totalPrice,
            urgent: urgent,
            grandTotal: urgent == '1' ? (totalPrice + 200 - discountValue) : (totalPrice + 50 - discountValue),
            deliveryAddress: this.props.cart.address ? this.props.cart.address : "",
            city: this.props.user.userData.city,
            paymentMethod: paymentMethod,
            transactionId: transactionId,
            notes: note,
            coupon_id: couponId,
            products: products,
            token: this.props.user.userToken
        }
        console.log("userData:", userData)
        OrdersServices.placeCustomerOrder(userData)
            .then((response) => {
                console.log(response.data)
                if (response.data.success) {
                    this.setState({ activeTab: activeTab + 1, orderId: response.data.order_id })
                    let array = [];
                    this.props.cartActions.setCart(array)
                }

            })
            .catch((err) => {
                console.log(err)
                // this.props.cartActions.clear()
            })

    }

    handleCouponApply = () => {
        this.setState({ discountLoading: true })
        const { code } = this.state;
        OrdersServices.validateCoupon(code)
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        percentage: response.data.result.discount,
                        couponId: response.data.result.id,
                        discountModal: false,
                    }, () => this.discountPercentage())
                }
            })
            .catch((error) => {
                Alert.alert(
                    'Invalid Code',
                    '',
                    [
                        {
                            text: 'OK', onPress: () => this.setState({
                                discountLoading: false, discountModal: false, percentage: null,
                                couponId: null, code: ''
                            })
                        },
                    ]
                )

                console.log(error)
            })
    }

    discountPercentage = () => {
        console.log('called')
        const { percentage, totalPrice, urgent } = this.state;
        let discount = totalPrice + (urgent == '1' ? 200 : 50);
        discount = (discount * parseFloat(percentage / 100));
        this.setState({
            discountValue: discount,
            discountLoading: false,
            discount: true,

        })
    }


    render() {
        const { activeTab, discount, urgent, code, discountValue, keyboardState, initialLoading, addressLocation, location, percentage } = this.state;

        return (
            <>
                { initialLoading ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator color="#0DA7DF" size={60} />
                    </View>
                    :
                    <>
                        <View style={{ flex: 1, backgroundColor: 'white' }}>

                            <View style={styles.headerImageStyle}>
                                <View style={styles.upperListContainer}>
                                    <View style={styles.tabContainer}>
                                        <Tabs active={activeTab} tabs={['Account', 'Pick up', 'Payment']} />
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: 35 }}>
                                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '20%' }}>
                                    {
                                        activeTab == 0 ?

                                            <Pickup
                                                location={this.props.cart.region}
                                                addressLocation={this.props.cart.address}
                                                day={(day) => this.setState({ day })}
                                                time={(time) => this.setState({ time })}
                                                urgent={(urgent) => this.setState({ urgent })}
                                                note={(note) => this.setState({ note })}
                                                navigation={this.props.navigation} route={this.props.route.params} />
                                            :
                                            null
                                    }
                                    {
                                        activeTab == 1 ?
                                            <Payment

                                                paymentMethod={(paymentMethod) => this.setState({ paymentMethod })}
                                                transactionId={(transactionId) => this.setState({ transactionId })}
                                                orderList={this.state.orderList} />
                                            :
                                            null
                                    }
                                    {
                                        activeTab == 2 ?
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                                                <View style={{ marginTop: '20%' }}>
                                                    <ThankYou />
                                                </View>
                                                <Text style={{ marginTop: '5%', color: '#374B5C', fontFamily: 'Roboto-Bold' }}>THANK YOU!</Text>
                                                <View style={{ marginTop: '2.5%' }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ color: '#7A7A7A', fontSize: 12, fontFamily: 'Roboto-Regular' }}>Order Number:</Text>
                                                        <Text style={{ color: '#374B5C', fontWeight: 'bold', fontSize: 12, fontFamily: 'Roboto-Medium' }}>  #{this.state.orderId}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ marginTop: '2.5%' }}>
                                                    <Text style={{ color: '#7A7A7A', textAlign: 'center', fontSize: 12, fontFamily: 'Roboto-Regular' }}>Oder details will be send to your email address</Text>
                                                    {/* <Text style={{ color: '#374B5C', textAlign: 'center', fontSize: 12, fontFamily: 'Roboto-Medium' }}>JohnDoe@example.com</Text> */}
                                                </View>
                                            </View>
                                            :
                                            null
                                    }
                                </KeyboardAwareScrollView>
                            </View>

                        </View>
                        <View style={{ backgroundColor: 'white' }}>
                            {
                                !keyboardState ?

                                    activeTab == 0 || activeTab == 1 ?
                                        <View onPress={() => { }} style={{
                                            borderRadius: 10,
                                            elevation: 2,
                                            backgroundColor: 'white',
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            shadowOpacity: 0.20,
                                            shadowRadius: 1.41,
                                            borderColor: "#EEE",
                                            backgroundColor: 'white',
                                            borderWidth: 1,
                                            marginBottom: '5%',
                                            marginHorizontal: '5%'
                                        }}>
                                            <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                                                <TouchableOpacity onPress={async () => {
                                                    if (activeTab == 1) {
                                                        await this.handlePlaceOrder()
                                                    }
                                                    else {
                                                        this.setState({ activeTab: activeTab + 1 })
                                                    }
                                                }}>
                                                    <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                                        <Text style={styles.checkButtonTextStyle}>{activeTab == 0 ? 'Continue' : 'Place order'}</Text>
                                                    </LinearGradient>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.checkoutInnerContainer}>

                                                {
                                                    activeTab == 0 ?
                                                        null
                                                        :
                                                        <>
                                                            <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={[styles.checkoutItemStyle, { alignItems: 'center', paddingHorizontal: '2.5%', borderRadius: 10, height: 40 }]}>
                                                                <View style={{ flexDirection: 'row', }}>
                                                                    <View style={{ backgroundColor: '#0DA7DF', alignItems: 'center', justifyContent: 'center', height: 20, width: 20, borderRadius: 10 }}>
                                                                        <Icon.Feather name="percent" size={15} color="white" />
                                                                    </View>
                                                                    <Text style={{ color: 'white', fontSize: 12, marginLeft: '5%', fontFamily: 'Roboto-Medium' }}>{discount ? `Get ${percentage} discount` : 'Use coupon to get discount'}</Text>
                                                                </View>
                                                                <View style={{ justifyContent: 'center' }}>
                                                                    {
                                                                        discount ?
                                                                            <Icon.AntDesign name='checkcircle' color='white' size={15} />
                                                                            :
                                                                            <Text onPress={() => this.setState({ discountModal: true })} style={[styles.totalPriceTextStyle, { color: 'white' }]}>Choose</Text>
                                                                    }
                                                                </View>
                                                            </LinearGradient>
                                                            <View style={styles.checkoutItemStyle}>
                                                                <View>
                                                                    <Text style={styles.checkoutTextStyle}>Total</Text>
                                                                </View>
                                                                <View>
                                                                    <Text style={styles.checkoutTextStyle}>Rs.{this.state.totalPrice}</Text>
                                                                </View>
                                                            </View>
                                                            <View style={styles.checkoutItemStyle}>
                                                                <View>
                                                                    {
                                                                        discount ?
                                                                            <Text style={styles.checkoutTextStyle}>Shipping</Text>
                                                                            :
                                                                            <Text style={styles.checkoutTextStyle}>Delivery Charges</Text>
                                                                    }
                                                                </View>
                                                                <View>
                                                                    <Text style={styles.checkoutTextStyle}>Rs.{urgent == '1' ? '200' : '50'}</Text>
                                                                </View>
                                                            </View>
                                                            {discount ?
                                                                <View style={styles.checkoutItemStyle}>
                                                                    <View>
                                                                        <Text style={styles.checkoutTextStyle}>Discount</Text>
                                                                    </View>
                                                                    <View>
                                                                        <Text style={styles.discountTextStyle}>Rs.{discountValue}</Text>
                                                                    </View>
                                                                </View>
                                                                :
                                                                null}
                                                            <View style={styles.lineStyle}></View>
                                                        </>
                                                }
                                                <View style={[styles.checkoutItemStyle, { bottom: activeTab == 0 ? '3%' : 0 }]}>
                                                    <View>
                                                        <Text style={styles.totalTextStyle}>Total</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.totalPriceTextStyle}>Rs. {activeTab == 0 ? this.state.totalPrice : discount ? (this.state.totalPrice - discountValue) + (urgent == '0' ? 50 : 200) : this.state.totalPrice + (urgent == '0' ? 50 : 200)}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        :
                                        <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                                            <TouchableOpacity onPress={() => this.props.navigation.replace('Main', { screen: 'Home' })}>
                                                <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                                    <Text style={styles.checkButtonTextStyle}>{'Continue'}</Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        </View>
                                    :
                                    null
                            }
                        </View>
                    </>}
                <Modal isVisible={this.state.discountModal}  >
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5%' }}>
                            <Text style={styles.headingText}>Discount Code</Text>
                            <TouchableOpacity onPress={() => this.setState({ discountModal: false })} style={styles.iconContainer}>
                                <Icon.Ionicons name='close-outline' size={15} color={'#7A7A7A'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lineStyle}></View>
                        <View style={{ marginTop: '5%' }}>
                            <Input placeholder="Discount code" value={code} onChangeText={(code) => this.setState({ code })} />
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => {

                            this.handleCouponApply()
                            this.setState({ discountModal: false })
                        }}>
                            <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                <Text style={styles.checkButtonTextStyle}>{'Apply'}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={this.state.discountLoading}  >
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={40} color="#0DA7DF" />
                    </View>
                </Modal>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {},
        cart: state.cartReducer || {}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartActions: bindActionCreators(cartActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)