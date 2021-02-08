import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, ImageBackground, FlatList, Platform } from 'react-native';
import { Input } from 'react-native-elements';
import { HomeServices } from '../../services';
import styles from './style';
import { Icon } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Laundry from '../../assets/svg/laundry.svg';
import Basket from '../../assets/svg/basket.svg';
import Iron from '../../assets/svg/iron.svg';
import Machine from '../../assets/svg/washing-machine.svg';
import Fold from '../../assets/svg/folding-clothes.svg';
import Fraq from '../../assets/svg/fraq.svg';
import TShirt from '../../assets/svg/t-shirt.svg';
import Bedsheet from '../../assets/svg/bedsheet.svg';
import Shirt from '../../assets/svg/shirt.svg';
import Pent from '../../assets/svg/pent.svg';
import Skert from '../../assets/svg/skert.svg';
import HandBag from '../../assets/svg/handbag.svg';
import JNamaz from '../../assets/svg/jnamaz.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { authActions } from '../../redux/actions/auth';
import { cartActions } from '../../redux/actions/cart';
import { ActivityIndicator } from 'react-native';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            loading: true,
            index: 0,
            data: [],
            showQuantity: false,
            productIndex: '',
            list: [],
            categoryLoading: true,
            productLoading: true

        }
        this.arrayHolder = this.state.list;
    }

    // ============== func_componentDidMount - Function Will get initial data from server ==============
    componentDidMount = async () => {
        let data = await AsyncStorage.getItem('TOKEN');
        let token = JSON.parse(data);
        if (token) {
            HomeServices.getCategories()
                .then((response) => {
                    this.setState({ data: response.data.result, categoryLoading: false })
                    this.getProductsCategory(response.data.result[0].id)
                })
                .catch((err) => { console.log(err) })

        }
    }

    getProductsCategory = (id) => {
        HomeServices.getProductsforCustomer(id)
            .then((res) => {
                let data = [...res.data.result.rows];
                let array = [];
                data.forEach(element => {
                    if (element.category_id == id) {
                        let item = { ...element, quantity: '1', check: '0' }
                        array.push(item);
                    }
                });
                this.setState({ list: array, productLoading: false });
                this.arrayHolder = array;
            })
    }

    // ============== func_searchFilter - Function Will allow user to Search jobs ==============
    func_searchFilter = (text) => {
        this.setState({ value: text });
        const newData = this.arrayHolder.filter(item => {
            const itemData = `${item.name.toUpperCase()} ${item.name.toUpperCase()} ${item.name.toUpperCase()} `;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        if (newData.length != 0) {
            this.setState({ list: newData });
        }

    }

    handleAddToCart = () => {
        this.props.navigation.navigate('Cart')
    }

    _renderItems = (item, index) => {
        return (
            <>
                <TouchableOpacity onPress={() => { this.getProductsCategory(item.id); this.setState({ index: index }) }} style={{ height: null, width: 105, }}>
                    {/* <View style={{
                        borderColor: index == this.state.index ? '#EAF7FB' : "#EEE",
                        borderWidth: 0.3,
                        borderRadius: 10,
                        elevation: 2,
                        shadowColor: index == this.state.index ? '#EAF7FB' : "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,
                        height: 60,
                        width: 105,
                        backgroundColor: index == this.state.index ? '#EAF7FB' : 'white',
                        justifyContent: 'center',
                        marginTop: '10%',
                        marginBottom: '1%',
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
                            {item.name == 'Dry cleaning' ?
                                <Laundry />
                                : item.name == 'Iron only' ?
                                    <Iron />
                                    : item.name == 'Bedsheet & Blankets' ?
                                        <Machine />
                                        : item.name == 'Wash & Iron' ?
                                            <Fold />
                                            :
                                            <Basket />}
                        </View>
                    </View> */}
                    <View style={{
                        borderColor: index == this.state.index ? '#EAF7FB' : "#EEE",
                        borderWidth: 0.3,
                        borderRadius: 10,
                        elevation: 2,
                        shadowColor: index == this.state.index ? '#EAF7FB' : "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,
                        height: 60,
                        width: 105,
                        alignItems: 'center',
                        backgroundColor: index == this.state.index ? '#EAF7FB' : 'white',
                        justifyContent: 'center',
                        marginTop: '10%',
                        marginBottom: '1%',
                    }}>
                        <Image source={{ uri: `https://dhobiuncle.pk/${item.image}` }} style={{ height: 60, width: 100, justifyContent: 'center', backgroundColor: index == this.state.index ? '#EAF7FB' : 'white', }} />
                    </View>
                    <View style={{ marginTop: '5%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: index == this.state.index ? '#0DA7DF' : '#B5B5B5', fontFamily: 'Roboto-Medium' }}>{item.name}</Text>
                    </View>
                </TouchableOpacity>

            </>
        )
    }

    handleAddQuantity = (item, index) => {
        let array = [...this.state.list];
        let cartArray = [...this.props.cart.cart];
        if (cartArray != null)
            cartArray.map((element, i) => {
                if (element.id == item.id) {
                    cartArray[i] = { ...cartArray[i], quantity: (parseInt(element.quantity) + 1) };
                }
            })
        this.props.cartActions.setCart(cartArray);
        array[index] = { ...array[index], quantity: (parseInt(item.quantity) + 1) };
        this.setState({ list: array })
        // this.handleTotalPrice(array)
    }

    handleMinusQuantity = (item, index) => {
        let array = [...this.state.list];
        let cartArray = [...this.props.cart.cart];
        if (cartArray != null)
            cartArray.map((element, i) => {
                if (element.id == item.id) {
                    if (element.quantity == '1') {
                        cartArray = cartArray.filter(data => data.id != element.id)
                        array[index] = { ...array[index], check: '0' };
                    }
                    else {
                        cartArray[i] = { ...cartArray[i], quantity: element.quantity == "1" ? element.quantity : (parseInt(element.quantity) - 1) };
                    }
                }
            })
        this.props.cartActions.setCart(cartArray);
        array[index] = { ...array[index], quantity: item.quantity == '1' ? item.quantity : (parseInt(item.quantity) - 1) };
        this.setState({ list: array });
        // this.handleTotalPrice(array)
    }

    _renderListItems = (item, index) => {
        let quantity;
        let check;
        if (this.props.cart.cart != null)
            this.props.cart.cart.map(element => {
                if (element.id == item.id) {
                    quantity = element.quantity
                    check = element.check
                }
            })
        return (
            <TouchableOpacity onPress={() => this.props.navigation.push('ProductDetail', { product: item })} style={{
                borderRadius: 10,
                elevation: 2,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                borderColor: "#EEEEEE",
                borderWidth: 0.5,
                // marginBottom: '1%',

            }}>
                <View style={{ flexDirection: 'row', margin: 0, backgroundColor: 'white', borderRadius: 10 }}>
                    <View style={{
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        alignItems: 'center',
                        height: 96,
                        width: 122,
                        borderColor: "#EEEEEE",
                        borderWidth: 1,
                        borderRadius: 9
                    }}>
                        <Image resizeMode="contain" source={{ uri: `https://dhobiuncle.pk/${item.thumbnail}` }} style={{
                            height: 96,
                            width: 122,
                        }} />
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
                    </View>
                    <View style={{ marginHorizontal: '5%', flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, height: 18 }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: '#7A7A7A', fontFamily: 'Roboto-Regular', height: 16 }}>Rs. {item.price}</Text>
                        {check == '1' ?
                            <View style={{
                                flexDirection: 'row', marginLeft: -5,
                                alignSelf: 'flex-start',
                                justifyContent: 'space-around',
                                marginTop: 10,
                                alignItems: 'center',
                                height: 25,
                                width: 80,
                                borderRadius: 20,
                            }}>
                                <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleMinusQuantity(item, index)}>
                                    <Icon.Feather name='minus' size={10} color={'#fff'} />
                                </TouchableOpacity>
                                <Text style={{ color: '#0DA7DF', fontFamily: 'Roboto-Regular', fontSize: 11 }}>{quantity ? quantity : item.quantity}</Text>
                                <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleAddQuantity(item, index)}>
                                    <Icon.Feather name='plus' size={10} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            :
                            <TouchableOpacity onPress={async () => {
                                let array = [];
                                let listArray = [...this.state.list];
                                let objIndex = this.state.list.findIndex(data => data.id == item.id);
                                listArray[index] = { ...listArray[index], check: '1' };
                                let dataItem = { ...item, check: '1' }
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
                                this.setState({ list: listArray })
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
                            </TouchableOpacity>}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _renderSeparator = () => {
        return (
            <View style={styles.seperatorStyle}></View>
        )
    }
    _renderListSeparator = () => {
        return (
            <View style={styles.listSeperatorStyle}></View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }} >
                <View style={styles.headerImageStyle}>
                    <View style={{ paddingHorizontal: '2.5%', marginTop: '5%' }}>
                        <Input placeholder='Search laundry by name....'
                            round={true}
                            onChangeText={text => this.func_searchFilter(text)}
                            value={this.state.value}
                            autoCorrect={false}
                            leftIcon={{ type: 'feather', name: 'search', size: 20, color: '#7A7A7A' }}
                            inputStyle={{ fontFamily: 'Nunito-Regular', fontSize: 14, marginLeft: '2%', }}
                            leftIconContainerStyle={{ padding: 0, borderRightWidth: 0.5, height: 20, backgroundColor: 'white', borderColor: '#7A7A7A' }}
                            rightIconContainerStyle={{ paddingRight: 10 }}
                            containerStyle={styles.containerStyle}
                            inputContainerStyle={styles.inputContainerStyle} />

                    </View>
                    <View style={styles.upperListContainer}>
                        <Text style={styles.headingStyle}>Choose Services</Text>
                        {this.state.categoryLoading ?
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: 90 }}>
                                <ActivityIndicator size={30} color={'#0DA7DF'} />
                            </View>
                            :
                            <FlatList
                                data={this.state.data}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                ItemSeparatorComponent={this._renderSeparator}
                                renderItem={({ item, index }) => this._renderItems(item, index)}
                                keyExtractor={item => item} />}
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 70 }}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '2.5%', }}>
                        <View style={styles.lowerListContainer}>

                            {
                                this.state.productLoading ?
                                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 90 }}>
                                        <ActivityIndicator size={30} color={'#0DA7DF'} />
                                    </View>
                                    :
                                    this.state.list.length == 0 ?
                                        <View style={{ justifyContent: 'center', marginTop: '20%' }}>
                                            <Text style={{ textAlign: "center", fontFamily: 'Roboto-Bold' }}>No product found</Text>
                                        </View>
                                        :
                                        <FlatList
                                            data={this.state.list}
                                            showsVerticalScrollIndicator={false}
                                            ItemSeparatorComponent={this._renderListSeparator}
                                            renderItem={({ item, index }) => this._renderListItems(item, index)}
                                            keyExtractor={item => item} />
                            }
                        </View>
                    </ScrollView>
                </View>
            </View >
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
        authActions: bindActionCreators(authActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)