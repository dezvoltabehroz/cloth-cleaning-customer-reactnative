import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Icon, Tabs, Pickup, Payment } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
const screenHeight = Dimensions.get('window').height;
export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            totalPrice: 350,
            discount: false,
            delivery: 50,
            orderList: []
        }
    }

    componentDidMount = () => {
        const { list } = this.props.route.params;
        this.setState({ orderList: list })
    }


    render() {
        const { activeTab, discount, delivery } = this.state;

        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: activeTab == 0 ? 0.15 : 0.225 }}>
                        <ImageBackground source={require('../../assets/images/header.png')} style={styles.headerImageStyle}>
                            <View style={styles.upperListContainer}>
                                <View style={styles.tabContainer}>
                                    <Tabs active={activeTab} tabs={['Account', 'Pick up', 'Payment']} />
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ flex: 0.9 }}>
                        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '10%' }}>
                            {
                                activeTab == 0 ?

                                    <Pickup />
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
                                            <Image source={require('../../assets/images/tick.png')} style={{ height: 120, width: 136 }} />
                                        </View>
                                        <Text style={{ color: '#374B5C', fontWeight: 'bold' }}>THANK YOU</Text>
                                        <View style={{ marginTop: '2.5%' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Order Number:</Text>
                                                <Text style={{ color: '#374B5C', fontWeight: 'bold', fontSize: 12 }}>  #00000456</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: '2.5%' }}>
                                            <Text style={{ color: '#7A7A7A', textAlign: 'center', fontSize: 12 }}>Oder details will be send to your email address</Text>
                                            <Text style={{ color: '#374B5C', textAlign: 'center', fontSize: 12 }}>JohnDoe@example.com</Text>
                                        </View>
                                    </View>
                                    :
                                    null
                            }
                        </KeyboardAwareScrollView>
                    </View>

                </View>
                {
                    activeTab == 0 || activeTab == 1 ?
                        <View onPress={() => { }} style={{
                            borderRadius: 10, elevation: 1, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            borderColor: "#EEE",
                            borderWidth: 0.3,
                            shadowOpacity: 0.18,
                            shadowRadius: 1.00,
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
                                                    <Text style={{ color: '#7A7A7A', fontSize: 12, marginLeft: '5%' }}>Use coupon to get discount</Text>
                                                </View>
                                                <View style={{ justifyContent: 'center' }}>
                                                    <Text style={styles.totalPriceTextStyle}>Choose</Text>
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
                                                    <Text style={styles.checkoutTextStyle}>Delivery Charges</Text>
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
                                                        <Text style={styles.checkoutTextStyle}>Rs.{'50'}</Text>
                                                    </View>
                                                </View>
                                                :
                                                null}
                                            <View style={styles.lineStyle}></View>
                                        </>
                                }
                                <View style={styles.checkoutItemStyle}>
                                    <View>
                                        <Text style={styles.totalTextStyle}>Total</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.totalPriceTextStyle}>Rs. {activeTab == 0 ? this.state.totalPrice : this.state.totalPrice + delivery}</Text>
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
                }
            </>
        )
    }
}