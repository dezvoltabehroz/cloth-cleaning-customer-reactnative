import React, { Component } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Icon } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../components/Input/style';

const screenWidth = Dimensions.get('window').width;

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    imageUrl: require('../../assets/images/fraq.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 2,
                    imageUrl: require('../../assets/images/h-shirt.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 3,
                    imageUrl: require('../../assets/images/t-shirt.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 4,
                    imageUrl: require('../../assets/images/bedsheet.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 5,
                    imageUrl: require('../../assets/images/pent.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 6,
                    imageUrl: require('../../assets/images/skert.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 7,
                    imageUrl: require('../../assets/images/bag.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"

                },
                {
                    id: 8,
                    imageUrl: require('../../assets/images/jnamaz.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
            ]
        }
    }
    componentDidMount = () => {
        this.handleTotalPrice(this.state.list)
    }

    handleAddQuantity = (item, index) => {
        let array = [...this.state.list];
        array[index] = { ...array[index], quantity: (parseInt(item.quantity) + 1) };
        this.setState({ list: array })
        this.handleTotalPrice(array)
    }

    handleMinusQuantity = (item, index) => {
        let array = [...this.state.list];
        array[index] = { ...array[index], quantity: item.quantity == '1' ? item.quantity : (parseInt(item.quantity) - 1) };
        this.setState({ list: array });
        this.handleTotalPrice(array)
    }
    handlePressDelete = async (item, index) => {
        this.setState({ list: this.state.list.filter((obj => obj.id != item.id)) });
        // await AsyncStorage.setItem('CARTITEMS', JSON.stringify(this.state.list))
        await this.props.actions.updateBagdeCount(this.state.list.length)
        if (this.state.list.length == 0) {
            // await AsyncStorage.removeItem('CARTITEMS')
        }
    }


    _renderListItems = (item, index) => {
        return (
            <>
                <View style={styles.listContentContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')} style={styles.imageContainer}>
                            <Image source={item.imageUrl} resizeMode="contain" style={{ height: 40, width: 70 }} />
                        </TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemNameContainer}>
                                <View>
                                    <Text style={styles.itemNameTextStyle}>{item.title}</Text>
                                </View>
                                <TouchableOpacity style={styles.crossButtonStyle} onPress={() => this.handlePressDelete(item, index)}>
                                    <Icon.AntDesign name='close' size={10} color={'#000'} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemQuantityContainer}>
                                <View>
                                    <Text style={styles.listTextStyle}>Rs. {item.price} X {item.quantity}</Text>
                                </View>
                                <View>
                                    <Text style={styles.listTextStyle}>Rs. {item.price * item.quantity}</Text>
                                </View>
                            </View>
                            <View style={styles.itemQuantityButtonContainer}>
                                <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleMinusQuantity(item, index)}>
                                    <Icon.Feather name='minus' size={20} color={'#fff'} />
                                </TouchableOpacity>
                                <Text style={{ color: '#0DA7DF' }}>{item.quantity}</Text>
                                <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleAddQuantity(item, index)}>
                                    <Icon.Feather name='plus' size={20} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    _renderListSeparator = () => {
        return (
            <View style={styles.listSeperatorStyle}></View>
        )
    }

    handleTotalPrice = (array) => {
        let totalPrice = 0;

        array.forEach((item) => {
            totalPrice = totalPrice + parseInt(item.quantity) * parseInt(item.price);
        })

        this.setState({ totalPrice: totalPrice });

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
                    <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                        <Text style={{ fontSize: 16 }}>Iron Only</Text>
                    </View>
                    <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                        <FlatList
                            data={this.state.list}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={this._renderListSeparator}
                            renderItem={({ item, index }) => this._renderListItems(item, index)}
                            keyExtractor={item => item} />
                    </View>
                </ScrollView>
                <View>

                    <View onPress={() => { }} style={{
                        borderRadius: 10, elevation: 1, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        }, shadowOpacity: 0.18,
                        shadowRadius: 1.00, marginBottom: '5%', marginHorizontal: '5%'
                    }}>
                        <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Checkout', { list: this.state.list })}>
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
                </View>
            </View>
        )
    }
}