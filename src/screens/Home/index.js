import AsyncStorage from '@react-native-async-storage/async-storage';
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

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            loading: true,
            index: 0,
            data: [
                {
                    title: 'Iron Only'
                },
                {
                    title: 'Dry Clean'
                },
                {
                    title: 'Linen & Bedsheet'
                },
                {
                    title: 'Wash & Iron'
                },
                {
                    title: 'Wash & Fold'
                },
            ],
            showQuantity: false,
            list: [
                {
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
            ]

        }
    }

    // ============== func_componentDidMount - Function Will get initial data from server ==============
    componentDidMount = () => {
        // let data = await AsyncStorage.getItem('USER_TOKEN');
        // let token = JSON.parse(data)
        // HomeServices.myInvitations(token)
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((err) => { console.log(err) })
    }

    // ============== func_searchFilter - Function Will allow user to Search jobs ==============
    func_searchFilter = (text) => {
        this.setState({ value: text });
    }

    handleAddToCart = () => {
        this.props.navigation.navigate('Cart')
    }

    _renderItems = (item, index) => {
        return (
            <>
                <TouchableOpacity onPress={() => { this.setState({ index: index }) }} style={{ height: 95, width: 105, }}>
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
                        backgroundColor: index == this.state.index ? '#EAF7FB' : 'white',
                        justifyContent: 'center',
                        marginTop: '10%',
                        marginBottom: '1%',
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
                            {item.title == 'Dry Clean' ?
                                <Laundry />
                                : item.title == 'Iron Only' ?
                                    <Iron />
                                    : item.title == 'Linen & Bedsheet' ?
                                        <Machine />
                                        : item.title == 'Wash & Iron' ?
                                            <Fold />
                                            :
                                            <Basket />}
                        </View>
                    </View>
                    <View style={{ marginTop: '5%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: index == this.state.index ? '#0DA7DF' : '#B5B5B5', fontFamily: 'Roboto-Medium' }}>{item.title}</Text>
                    </View>
                </TouchableOpacity>

            </>
        )
    }

    handleAddQuantity = (item, index) => {
        let array = [...this.state.list];
        array[index] = { ...array[index], quantity: (parseInt(item.quantity) + 1) };
        this.setState({ list: array })
        // this.handleTotalPrice(array)
    }

    handleMinusQuantity = (item, index) => {
        let array = [...this.state.list];
        array[index] = { ...array[index], quantity: item.quantity == '1' ? item.quantity : (parseInt(item.quantity) - 1) };
        this.setState({ list: array });
        // this.handleTotalPrice(array)
    }

    _renderListItems = (item, index) => {
        const { showQuantity } = this.state;
        return (


            <View style={{
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
                        {
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
                        }
                    </View>
                    <View style={{ marginHorizontal: '5%', flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 13, height: 18 }}>{item.title}</Text>
                        <Text style={{ fontSize: 12, color: '#7A7A7A', fontFamily: 'Roboto-Regular', height: 16 }}>Rs. {item.price}</Text>
                        {showQuantity ?
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
                                <Text style={{ color: '#0DA7DF', fontFamily: 'Roboto-Regular', fontSize: 11 }}>{item.quantity}</Text>
                                <TouchableOpacity style={styles.quantityButtonStyle} onPress={() => this.handleAddQuantity(item, index)}>
                                    <Icon.Feather name='plus' size={10} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            :
                            <TouchableOpacity onPress={() => this.setState({ showQuantity: true })}>
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
            </View>
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
            <View style={{ flex: 1, backgroundColor: 'white' }}>
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
                        <FlatList
                            data={this.state.data}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            ItemSeparatorComponent={this._renderSeparator}
                            renderItem={({ item, index }) => this._renderItems(item, index)}
                            keyExtractor={item => item} />
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 62 }}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '0.5%', }}>
                        <View style={styles.lowerListContainer}>
                            <FlatList
                                data={this.state.list}
                                showsVerticalScrollIndicator={false}
                                ItemSeparatorComponent={this._renderListSeparator}
                                renderItem={({ item, index }) => this._renderListItems(item, index)}
                                keyExtractor={item => item} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }

}