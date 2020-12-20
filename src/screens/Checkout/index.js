import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { Icon, Tabs, Pickup } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient'

const screenHeight = Dimensions.get('window').height;
export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,

        }
    }

    componentDidMount = () => {

    }


    render() {
        const { activeTab } = this.state;
        console.log(activeTab)
        return (
            <>
                <ImageBackground source={require('../../assets/images/header.png')} style={styles.headerImageStyle}>
                    <View style={styles.upperListContainer}>
                        <View style={styles.tabContainer}>
                            <Tabs active={activeTab} tabs={['Account', 'Pick up', 'Payment']} />
                        </View>
                    </View>
                </ImageBackground>
                {
                    activeTab == 0 ?
                        <Pickup />
                        :
                        null
                }
                 {
                    activeTab == 1 ?
                        <Pickup />
                        :
                        null
                }
                 {
                    activeTab == 2 ?
                        <Pickup />
                        :
                        null
                }

                <View onPress={() => { }} style={{ borderRadius: 10, elevation: 1, marginBottom: '5%', marginHorizontal: '5%' }}>
                    <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                        <TouchableOpacity onPress={() => this.setState({ activeTab: activeTab + 1 })}>
                            <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                <Text style={styles.checkButtonTextStyle}>Checkout</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.checkoutInnerContainer}>
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
                                <Text style={styles.checkoutTextStyle}>Rs.{'00'}</Text>
                            </View>
                        </View>
                        <View style={styles.lineStyle}></View>
                        <View style={styles.checkoutItemStyle}>
                            <View>
                                <Text style={styles.totalTextStyle}>Total</Text>
                            </View>
                            <View>
                                <Text style={styles.totalPriceTextStyle}>Rs. {this.state.totalPrice + 0}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}