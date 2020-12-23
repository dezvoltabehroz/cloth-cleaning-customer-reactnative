import React, { Component } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, Dimensions, ScrollView, Platform } from 'react-native';
import { Icon } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../components/Input/style';

const screenWidth = Dimensions.get('window').width;

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id: 7,
            imageUrl: require('../../assets/images/google_icon.png'),
            title: 'Lorem Ipsum Dolor',
            price: 50,
            quantity: 1,
            date: '8 Dec 2020',
            orderNumber: '#00000456',
            address: 'Park Rd, Islamabad, Islamabad Capital',
            totalPrice: 300,
            discount: 50,
            shipping: 50,
            status: 'Complete',
            serivceType: 'Iron Only',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate...'
        }
    }
    componentDidMount = () => {
        // this.handleTotalPrice(this.state.list)
    }



    render() {
        const { title, price, quantity, description, serivceType, status, orderNumber, address, date, shipping, discount, totalPrice } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                    <View style={styles.upperContainer}>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/images/fraq.png')} style={styles.imageStyle} />
                    </View>
                    <View style={styles.lowerContainer}>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.headingTitleStyle}>Order Details</Text>
                            </View>
                            <View>
                                <Text style={[styles.totalPriceTextStyle, { fontSize: 16, fontWeight: 'bold' }]}>{status}</Text>
                            </View>
                        </View>
                        <View style={styles.lineStyle}></View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.listTextStyle}>Your order number:</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>{orderNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.listTextStyle}>Address</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>{address}</Text>
                            </View>
                        </View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.listTextStyle}>Delivery date:</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>{date}</Text>
                            </View>
                        </View>
                        <View style={styles.lineStyle}></View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.headingTitleStyle}>{title}</Text>
                            </View>
                            <View>
                                <Text style={styles.headingTitleStyle}>Rs.{price}</Text>
                            </View>
                        </View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.listTextStyle}>Rs. {price} X {quantity}</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>{serivceType}</Text>
                            </View>
                        </View>
                        <View style={styles.lineStyle}></View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.listTextStyle}>Total</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>Rs.{totalPrice}</Text>
                            </View>
                        </View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.listTextStyle}>Shipping</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>Rs.{shipping}</Text>
                            </View>
                        </View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.listTextStyle}>Discount</Text>
                            </View>
                            <View>
                                <Text style={[styles.listTextStyle, { color: '#A50808' }]}>Rs.{discount}</Text>
                            </View>
                        </View>
                        <View style={styles.lineStyle}></View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={[styles.headingTitleStyle, { color: '#707070' }]}>Total</Text>
                            </View>
                            <View>
                                <Text style={[styles.headingTitleStyle, { color: '#707070' }]}>Rs.{totalPrice - discount + shipping}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}