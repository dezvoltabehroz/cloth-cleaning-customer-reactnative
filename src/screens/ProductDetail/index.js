import React, { Component } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, Dimensions, ScrollView, Platform } from 'react-native';
import { Icon } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Fraq from '../../assets/svg/fraq.svg';
const screenWidth = Dimensions.get('window').width;

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    imageUrl: require('../../assets/images/google_icon.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    id: 2,
                    imageUrl: require('../../assets/images/google_icon.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    id: 3,
                    imageUrl: require('../../assets/images/google_icon.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    id: 4,
                    imageUrl: require('../../assets/images/google_icon.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    id: 5,
                    imageUrl: require('../../assets/images/google_icon.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    id: 6,
                    imageUrl: require('../../assets/images/google_icon.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },

                {
                    id: 8,
                    imageUrl: require('../../assets/images/google_icon.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
            ],
            id: 7,
            imageUrl: require('../../assets/images/google_icon.png'),
            title: 'Lorem Ipsum Dolor',
            price: 50,
            quantity: 1,
            serivceType: 'Iron Only',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate...'
        }
    }
    componentDidMount = () => {
        this.handleTotalPrice(this.state.list)
    }

    handleAddQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 })
        // let array = [...this.state.list];
        // array[index] = { ...array[index], quantity: (parseInt(item.quantity) + 1) };
        // this.setState({ list: array })
        // this.handleTotalPrice(array)
    }

    handleMinusQuantity = () => {
        this.setState({ quantity: this.state.quantity == 1 ? this.state.quantity : this.state.quantity - 1 })
        // let array = [...this.state.list];
        // array[index] = { ...array[index], quantity: item.quantity == '1' ? item.quantity : (parseInt(item.quantity) - 1) };
        // this.setState({ list: array });
        // this.handleTotalPrice(array)
    }
    handlePressDelete = async (item, index) => {
        this.setState({ list: this.state.list.filter((obj => obj.id != item.id)) });
        // await AsyncStorage.setItem('CARTITEMS', JSON.stringify(this.state.list))
        await this.props.actions.updateBagdeCount(this.state.list.length)
        if (this.state.list.length == 0) {
            // await AsyncStorage.removeItem('CARTITEMS')
        }
    }
    handleTotalPrice = (array) => {
        let totalPrice = 0;
        array.forEach((item) => {
            totalPrice = totalPrice + parseInt(item.quantity) * parseInt(item.price);
        })
        this.setState({ totalPrice: totalPrice });
    }

    render() {
        const { title, price, quantity, description, serivceType } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                    <View style={styles.upperContainer}>
                    </View>
                    <View style={styles.imageContainer}>
                        <Fraq height={146} width={140} />
                        <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonStyle} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Checkout', { list: this.props.route.params.list })}><Text style={styles.checkoutTextStyle}>Checkout</Text></TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={styles.lowerContainer}>
                        <Text style={styles.headingTitleStyle}>
                            {title}
                        </Text>
                        <View style={styles.lineStyle}></View>
                        <View style={styles.itemQuantityContainer}>
                            <View>
                                <Text style={styles.listTextStyle}>Rs. {price} X {quantity}</Text>
                            </View>
                            <View>
                                <Text style={styles.totalPriceTextStyle}>Rs. {price * quantity}</Text>
                            </View>
                        </View>
                        <View style={styles.itemQuantityButtonContainer}>
                            <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleMinusQuantity()}>
                                <Icon.Feather name='minus' size={20} color={'#fff'} />
                            </TouchableOpacity>
                            <Text style={{ color: '#0DA7DF' }}>{quantity}</Text>
                            <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleAddQuantity()}>
                                <Icon.Feather name='plus' size={20} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={styles.headingTitleStyle}>Service </Text>
                            <View style={styles.lineStyle}></View>
                            <View style={{ marginTop: '5%' }}>
                                <Text style={styles.listTextStyle}>
                                    {serivceType}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={styles.headingTitleStyle}>Description </Text>
                            <View style={styles.lineStyle}></View>
                            <View style={{ marginTop: '5%' }}>
                                <Text style={styles.listTextStyle}>
                                    {description}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}