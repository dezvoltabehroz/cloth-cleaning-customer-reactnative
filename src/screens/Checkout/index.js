import React, { Component } from 'react';
import { View, Text, ImageBackground, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Icon, Tabs, Pickup, Payment, Input } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Modal from 'react-native-modal';
const screenHeight = Dimensions.get('window').height;
import ThankYou from '../../assets/svg/thankyou.svg';
export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            totalPrice: 350,
            discount: false,
            delivery: 50,
            code: '',
            orderList: [],
            discountValue: 50,
            discountModal: false,
            keyboardState: false
        }
    }


    componentWillMount() {
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
        const { list, } = this.props.route.params;
        this.setState({ orderList: list })
    }


    render() {
        const { activeTab, discount, delivery, code, discountValue, keyboardState } = this.state;

        return (
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

                                    <Pickup navigation={this.props.navigation} route={this.props.route.params} />
                                    :
                                    null
                            }
                            {
                                activeTab == 1 ?
                                    <Payment orderList={this.state.orderList} />
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
                                                <Text style={{ color: '#374B5C', fontWeight: 'bold', fontSize: 12, fontFamily: 'Roboto-Medium' }}>  #00000456</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: '2.5%' }}>
                                            <Text style={{ color: '#7A7A7A', textAlign: 'center', fontSize: 12, fontFamily: 'Roboto-Regular' }}>Oder details will be send to your email address</Text>
                                            <Text style={{ color: '#374B5C', textAlign: 'center', fontSize: 12, fontFamily: 'Roboto-Medium' }}>JohnDoe@example.com</Text>
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
                                    borderRadius: 10, elevation: 3,
                                    backgroundColor: 'white',
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.22,
                                    shadowRadius: 2.22,
                                    borderColor: "#EEE",
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    marginBottom: '5%',
                                    marginHorizontal: '5%'
                                }}>
                                    <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                                        <TouchableOpacity onPress={() => this.setState({ activeTab: activeTab + 1 })}>
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
                                                    <View style={styles.checkoutItemStyle}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <View style={{ backgroundColor: '#0DA7DF', alignItems: 'center', justifyContent: 'center', height: 20, width: 20, borderRadius: 10 }}>
                                                                <Icon.Feather name="percent" size={15} color="white" />
                                                            </View>
                                                            <Text style={{ color: '#7A7A7A', fontSize: 12, marginLeft: '5%', fontFamily: 'Roboto-Light' }}>{discount ? 'Get 10 discount' : 'Use coupon to get discount'}</Text>
                                                        </View>
                                                        <View style={{ justifyContent: 'center' }}>
                                                            {
                                                                discount ?
                                                                    <Icon.AntDesign name='checkcircle' color='#0DA7DF' size={15} />
                                                                    :
                                                                    <Text onPress={() => this.setState({ discountModal: true })} style={styles.totalPriceTextStyle}>Choose</Text>
                                                            }

                                                        </View>
                                                    </View>
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
                                                            <Text style={styles.checkoutTextStyle}>Rs.{delivery}</Text>
                                                        </View>
                                                    </View>
                                                    {discount ?
                                                        <View style={styles.checkoutItemStyle}>
                                                            <View>
                                                                <Text style={styles.checkoutTextStyle}>Discount</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={styles.discountTextStyle}>Rs.{'50'}</Text>
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
                                                <Text style={styles.totalPriceTextStyle}>Rs. {activeTab == 0 ? this.state.totalPrice : discount ? this.state.totalPrice + delivery - discountValue : this.state.totalPrice + delivery}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                :
                                <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.replace('Home')}>
                                        <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                            <Text style={styles.checkButtonTextStyle}>{'Continue'}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            :
                            null
                    }
                </View>
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
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => this.setState({ discount: true, discountModal: false })}>
                            <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                <Text style={styles.checkButtonTextStyle}>{'Apply'}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </>
        )
    }
}