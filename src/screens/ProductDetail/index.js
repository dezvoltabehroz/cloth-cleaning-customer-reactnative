import React, { Component } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, Dimensions, ScrollView, Platform } from 'react-native';
import { Icon } from '../../components';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Fraq from '../../assets/svg/fraq.svg';
const screenWidth = Dimensions.get('window').width;
import { connect } from 'react-redux';
import { cartActions } from '../../redux/actions/cart';
import { bindActionCreators } from "redux";
import Modal from 'react-native-modal';
import { ActivityIndicator } from 'react-native';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: "",
            quantity: "",
            serivceType: "",
            description: "",
            loading: true,
            AddToCart: true,
        }
    }
    componentWillMount = () => {

    }
    componentDidMount = () => {
        if (this.props.cart.cart.length != 0) {
            this.props.cart.cart.map((item, index) => {
                if (item.id == this.props.route.params.product.id) {
                    this.setState({
                        id: this.props.route.params.product.id,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        serivceType: item.productcategory.name,
                        description: item.description,
                        loading: false,
                        AddToCart: false,
                    })
                }
            })
        }
        else {
            this.setState({
                id: this.props.route.params.product.id,
                name: this.props.route.params.product.name,
                price: this.props.route.params.product.price,
                quantity: this.props.route.params.product.quantity,
                serivceType: this.props.route.params.product.productcategory.name,
                description: this.props.route.params.product.description,
                loading: false,
                AddToCart: true,
            })
        }


    }

    handleAddQuantity = async () => {
        this.setState({ loading: true })
        let cartArray = [...this.props.cart.cart];
        cartArray.map((element, i) => {
            if (element.id == this.props.route.params.product.id) {
                cartArray[i] = { ...cartArray[i], quantity: (parseInt(element.quantity) + 1) };
            }
        })
        await this.props.cartActions.setCart(cartArray);
        setTimeout(() => {
            this.componentDidMount();
        }, 3000);
    }

    handleMinusQuantity = async () => {
        this.setState({ loading: true })
        let cartArray = [...this.props.cart.cart];
        cartArray.map((element, i) => {
            if (element.id == this.props.route.params.product.id) {
                if (element.quantity == '1') {
                    cartArray = cartArray.filter(data => data.id != element.id)
                }
                else {
                    cartArray[i] = { ...cartArray[i], quantity: element.quantity == "1" ? element.quantity : (parseInt(element.quantity) - 1) };
                }
            }
        })
        await this.props.cartActions.setCart(cartArray);
        this.setState({ AddToCart: true })
        setTimeout(() => {
            this.componentDidMount();
        }, 3000);
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
        const { name, price, quantity, description, serivceType, AddToCart } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                    <View style={styles.upperContainer}>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image resizeMode="contain" source={{ uri: `https://dhobiuncle.pk/${this.props.route.params.product.thumbnail}` }} style={{ height: 126, width: 120 }} />
                        {/* <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonStyle} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Checkout', { list: this.props.route.params.list })}><Text style={styles.checkoutTextStyle}>Checkout</Text></TouchableOpacity>
                        </LinearGradient> */}
                    </View>
                    <View style={styles.lowerContainer}>
                        <Text style={styles.headingTitleStyle}>
                            {name}
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
                        {
                            AddToCart ?
                                <TouchableOpacity onPress={async () => {
                                    let array = [];
                                    let dataItem = { ...this.props.route.params.product, check: '1' }
                                    if (this.props.cart.cart == null || this.props.cart.cart.length == 0) {
                                        array.push(dataItem)
                                    }
                                    else {
                                        array = [...this.props.cart.cart];
                                        array.map((element) => {
                                            if (element.id == dataItem.id) {
                                            }
                                            else {
                                                if (array.some(data => data.id === dataItem.id)) {
                                                } else {
                                                    array.push(dataItem)
                                                }
                                            }
                                        })
                                    }
                                    await this.props.cartActions.setCart(array);
                                    this.setState({ AddToCart: false })

                                }}>
                                    <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={{
                                        justifyContent: 'center',
                                        elevation: 2,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.20,
                                        shadowRadius: 1.41,
                                        marginTop: 10,
                                        alignItems: 'center',
                                        height: 25,
                                        width: 105,
                                        borderRadius: 20,
                                    }}>
                                        <Text style={{ fontSize: 11, color: 'white', textAlign: 'center', fontFamily: 'Roboto-Regular' }}>ADD TO CART</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                :
                                <View style={styles.itemQuantityButtonContainer}>
                                    <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleMinusQuantity()}>
                                        <Icon.Feather name='minus' size={10} color={'#fff'} />
                                    </TouchableOpacity>
                                    <Text style={{ color: '#0DA7DF' }}>{quantity}</Text>
                                    <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleAddQuantity()}>
                                        <Icon.Feather name='plus' size={10} color={'#fff'} />
                                    </TouchableOpacity>
                                </View>}
                        <View style={{ marginTop: '2.5%' }}>
                            <Text style={styles.headingTitleStyle}>Service </Text>
                            <View style={styles.lineStyle}></View>
                            <View style={{ marginTop: '2%' }}>
                                <Text style={styles.listTextStyle}>
                                    {serivceType}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: '2.5%' }}>
                            <Text style={styles.headingTitleStyle}>Description </Text>
                            <View style={styles.lineStyle}></View>
                            <View style={{ marginTop: '1.5%' }}>
                                <Text style={styles.listTextStyle}>
                                    {description}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Modal isVisible={this.state.loading}>
                    <View>
                        <ActivityIndicator size={60} color='#0DA7DF' />
                    </View>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)