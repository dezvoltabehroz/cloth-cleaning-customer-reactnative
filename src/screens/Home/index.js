import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, ImageBackground, FlatList, Platform } from 'react-native';
import { Input } from 'react-native-elements';
import { HomeServices } from '../../services';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            loading: true,
            data: [
                {
                    imgurl: require('../../assets/images/iron.png'),
                    title: 'Iron Only'
                },
                {
                    imgurl: require('../../assets/images/laundry.png'),
                    title: 'Dry Clean'
                },
                {
                    imgurl: require('../../assets/images/washing-machine.png'),
                    title: 'Linen & Bedsheet'
                },
                {
                    imgurl: require('../../assets/images/folding-clothes.png'),
                    title: 'Wash & Iron'
                },
                {
                    imgurl: require('../../assets/images/basket.png'),
                    title: 'Wash & Fold'
                },
            ],
            list: [
                {
                    imageUrl: require('../../assets/images/fraq.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    imageUrl: require('../../assets/images/h-shirt.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    imageUrl: require('../../assets/images/t-shirt.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    imageUrl: require('../../assets/images/bedsheet.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    imageUrl: require('../../assets/images/pent.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    imageUrl: require('../../assets/images/skert.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    imageUrl: require('../../assets/images/bag.png'),
                    title: 'Lorem Ipsum Dolor',
                    price: 50,
                    quantity: '1',
                },
                {
                    imageUrl: require('../../assets/images/jnamaz.png'),
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

    _renderItems = (item) => {
        return (
            <>
                <View style={{ height: 95, width: 105, }}>
                    <View onPress={() => { }} style={{
                        borderColor: "#EEE",
                        borderWidth: 0.3,
                        borderRadius: 10,
                        elevation: 1,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.18,
                        shadowRadius: 1.00,
                        height: 60,
                        width: 105,
                        justifyContent: 'center',
                        marginTop: '10%',
                        marginBottom: '1%',
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
                            <Image source={item.imgurl} resizeMode="contain" style={{ height: 50, width: 50 }} />
                        </View>
                    </View>
                    <View style={{ marginTop: '5%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#B5B5B5' }}>{item.title}</Text>
                    </View>
                </View>

            </>
        )
    }

    _renderListItems = (item, index) => {
        return (
            <>
                <View onPress={() => { }} style={{
                    borderRadius: 10,
                    elevation: 1,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.00, marginBottom: '1%',
                    borderColor: "#EEE",
                    borderWidth: 0.3,
                }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{
                            elevation: 1,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.18,
                            shadowRadius: 1.00, padding: '10%',
                            borderColor: "#EEE",
                            borderWidth: 0.3,
                            borderRadius: 10
                        }}>
                            <Image source={item.imageUrl} resizeMode="contain" style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ marginTop: '5%', marginHorizontal: '5%', }}>
                            <Text style={{ fontWeight: 'bold', marginVertical: '5%' }}>{item.title}</Text>
                            <Text style={{ fontSize: 12, color: '#7A7A7A' }}>Rs. {item.price}</Text>
                            <View style={{ flexDirection: 'row', marginVertical: '5%' }}>
                                <TouchableOpacity onPress={() => this.handleAddToCart(item, index)}>
                                    <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={{ padding: '10%', borderRadius: 20, }}>
                                        <Text style={{ fontSize: 12, color: 'white', textAlign: 'center' }}>ADD TO CART</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>
            </>
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
                <View style={{ flex: 0.44 }}>
                    <ImageBackground resizeMode="cover" source={require('../../assets/images/header.png')} style={styles.headerImageStyle}>
                        <View style={{ paddingHorizontal: '2.5%', marginTop: '5%' }}>
                            <Input placeholder='Search laundry by name....'
                                round={true}
                                onChangeText={text => this.func_searchFilter(text)}
                                value={this.state.value}
                                autoCorrect={false}
                                leftIcon={{ type: 'feather', name: 'search', size: 20, color: '#7A7A7A' }}
                                inputStyle={{ fontSize: 12, marginLeft: '2%' }}
                                leftIconContainerStyle={{ padding: 0, borderRightWidth: 0.5, height: 20, borderColor: '#7A7A7A' }}
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
                                renderItem={({ item }) => this._renderItems(item)}
                                keyExtractor={item => item} />
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 0.6, }}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '5%', }}>
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