import React, { Component } from 'react';
import { FlatList, View, Image, Text, TouchableOpacity, Dimensions, ScrollView, Alert } from 'react-native';
import { Icon } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Fraq from '../../assets/svg/fraq.svg';
import TShirt from '../../assets/svg/t-shirt.svg';
import Bedsheet from '../../assets/svg/bedsheet.svg';
import Shirt from '../../assets/svg/shirt.svg';
import Pent from '../../assets/svg/pent.svg';
import Skert from '../../assets/svg/skert.svg';
import HandBag from '../../assets/svg/handbag.svg';
import JNamaz from '../../assets/svg/jnamaz.svg';
import { connect } from 'react-redux';
import { cartActions } from '../../redux/actions/cart';
import { bindActionCreators } from "redux";
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
import { Linking } from 'react-native';
const screenWidth = Dimensions.get('window').width;

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 2,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 3,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 4,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 5,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 6,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
                {
                    id: 7,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"

                },
                {
                    id: 8,
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                    serviceType: "Iron only"
                },
            ]
        }
    }
    componentDidMount = () => {
        this.findCoordinates()
        this.handleTotalPrice(this.props.cart.cart)
    }

    handleAddQuantity = (item, index) => {
        let array = [...this.props.cart.cart];
        array[index] = { ...array[index], quantity: (parseInt(item.quantity) + 1) };
        this.props.cartActions.setCart(array);
        this.setState({ list: array })
        this.handleTotalPrice(array)
    }

    handleMinusQuantity = (item, index) => {
        let array = [...this.props.cart.cart];
        array.map((element, i) => {
            if (element.id == item.id) {
                if (element.quantity == '1') {
                    array = array.filter(data => data.id != element.id)
                }
                else {
                    array[index] = { ...array[index], quantity: (parseInt(element.quantity) - 1) };
                }
            }
        })
        this.props.cartActions.setCart(array);
        this.handleTotalPrice(array)
    }

    handlePressDelete = async (item, index) => {
        let array = [...this.props.cart.cart];
        array = array.filter((obj => obj.id != item.id))
        await this.props.cartActions.setCart(array);
        // await AsyncStorage.setItem('CARTITEMS', JSON.stringify(this.state.list))
        // await this.props.actions.updateBagdeCount(this.state.list.length)
        // if (this.state.list.length == 0) {
        //     // await AsyncStorage.removeItem('CARTITEMS')
        // }
    }


    _renderListItems = (item, index) => {
        return (
            <>
                <View style={styles.listContentContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail', { product: item })} style={styles.imageContainer}>
                            {/* {
                                index == 0 ?
                                    <Fraq />
                                    : index == 1 ?
                                        <TShirt />
                                        : index == 2 ?
                                            <Shirt />
                                            : index == 3 ?
                                                <Bedsheet />
                                                : index == 4 ?
                                                    <Pent />
                                                    : index == 5 ?
                                                        <Skert />
                                                        : index == 6 ?
                                                            <HandBag />
                                                            : <JNamaz />
                            } */}
                            <Image source={{ uri: `https://dhobiuncle.pk/${item.thumbnail}` }} style={{
                                height: 96,
                                width: 122,
                            }} resizeMode="contain" />
                        </TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemNameContainer}>
                                <View>
                                    <Text style={styles.itemNameTextStyle}>{item.name}</Text>
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
                                    <Icon.Feather name='minus' size={10} color={'#fff'} />
                                </TouchableOpacity>
                                <Text style={{ color: '#0DA7DF', fontFamily: 'Roboto-Regular', fontSize: 11 }}>{item.quantity}</Text>
                                <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleAddQuantity(item, index)}>
                                    <Icon.Feather name='plus' size={10} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
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
            (error) => {
                console.log(error)
            }
        );
    };

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
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {
                    this.props.cart.cart.length == 0 ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto-Medium' }}>Cart is Empty</Text>
                        </View>
                        :
                        <>
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
                                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                                    {/* <Text style={{ fontSize: 16, fontFamily: 'Roboto-Medium' }}>Iron Only</Text> */}
                                </View>
                                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                                    <FlatList
                                        data={this.props.cart.cart}
                                        showsVerticalScrollIndicator={false}
                                        ItemSeparatorComponent={this._renderListSeparator}
                                        renderItem={({ item, index }) => this._renderListItems(item, index)}
                                        keyExtractor={item => item} />
                                </View>
                            </ScrollView>
                            <View>
                                <View style={{
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    elevation: 2,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.20,
                                    shadowRadius: 1.41,
                                    borderColor: "#EEE",
                                    borderWidth: 1,
                                    marginBottom: '5%',
                                    marginHorizontal: '5%'
                                }}>
                                    <View style={{ flexDirection: 'row', bottom: '5%', justifyContent: 'center', alignItems: 'center', }}>
                                        <TouchableOpacity onPress={() => {
                                            if (this.props.cart.region != null) { this.props.navigation.navigate('Checkout', { totalPrice: this.state.totalPrice }) } else {

                                                Alert.alert("", "Please enable your location from device settings", [{
                                                    "text": "Ok",
                                                    onPress: () => {
                                                        Linking.openSettings();
                                                        this.props.navigation.goBack();
                                                    }
                                                }])

                                            }
                                        }}>
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
                                            <View style={{ marginBottom: '2.5%' }}>
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
                        </>}
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)