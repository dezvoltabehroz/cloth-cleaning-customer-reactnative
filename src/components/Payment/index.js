import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native';
import { Icon } from '..';
import styles from './style'
import MapView from 'react-native-maps';
import Input from '../Input';
const screenHeight = Dimensions.get('window').height;

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cashOnDelivery: true,
            easyPaisa: false,
            jazzCash: false
        }
    }
    componentDidMount = () => {
        this.setState({ orderList: this.props.list })
    }


    _renderListItems = (item, index) => {
        return (
            <>
                <View style={styles.listContentContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemNameContainer}>
                            <View>
                                <Text style={styles.itemNameTextStyle}>{item.title}</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>Rs. {item.price} X {item.quantity}</Text>
                            </View>
                        </View>
                        <View style={styles.itemNameContainer}>
                            <View>
                                <Text style={{ color: '#000000', fontWeight: 'bold' }}>Rs. {item.price * item.quantity}</Text>
                            </View>
                            <View>
                                <Text style={styles.listTextStyle}>{item.serviceType}</Text>
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

    render() {
        const { cashOnDelivery, jazzCash, easyPaisa } = this.state;
        return (
            <>
                <View style={{ flex: 1, }}>
                    <ScrollView contentContainerStyle={{ paddingBottom: '10%' }}>
                        <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>Select payment method</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between', paddingHorizontal: '5%', backgroundColor: cashOnDelivery ? '#29B1DB' : null, borderRadius: 10, alignItems: 'center', height: 50 }}>
                                    <View>
                                        <Text style={{ color: cashOnDelivery ? 'white' : '#7A7A7A' }}>Cash on Delivery</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.setState({ cashOnDelivery: true, jazzCash: false, easyPaisa: false })}>
                                        <Icon.MaterialCommunityIcons name={cashOnDelivery ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} color={cashOnDelivery ? 'white' : '#7A7A7A'} size={20} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', backgroundColor: easyPaisa ? '#29B1DB' : null, borderRadius: 10, alignItems: 'center', height: 50 }}>
                                    <View>
                                        <Text style={{ color: easyPaisa ? 'white' : '#7A7A7A' }}>Easypaisa</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.setState({ cashOnDelivery: false, jazzCash: false, easyPaisa: true })}>
                                        <Icon.MaterialCommunityIcons name={easyPaisa ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} color={easyPaisa ? 'white' : '#7A7A7A'} size={20} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', backgroundColor: jazzCash ? '#29B1DB' : null, borderRadius: 10, alignItems: 'center', height: 50 }}>
                                    <View>
                                        <Text style={{ color: jazzCash ? 'white' : '#7A7A7A' }}>Jazz cash</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.setState({ cashOnDelivery: false, jazzCash: true, easyPaisa: false })}>
                                        <Icon.MaterialCommunityIcons name={jazzCash ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} color={jazzCash ? 'white' : '#7A7A7A'} size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {jazzCash ? <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>Jazz Cash Transaction</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={{ color: '#7A7A7A' }}>Account No</Text>
                                    <Input placeholder="0000-2233-1111-2232" />
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={{ color: '#7A7A7A' }}>Your transaction ID <Text style={{ color: '#FF0000' }}>*</Text></Text>
                                    <Input placeholder="0000-2233-0000-3455" />
                                </View>
                            </View>
                        </View> : null}
                        {easyPaisa ? <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>Easypaisa Transaction</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={{ color: '#7A7A7A' }}>Account No</Text>
                                    <Input placeholder="0000-2233-1111-2232" />
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={{ color: '#7A7A7A' }}>Your transaction ID <Text style={{ color: '#FF0000' }}>*</Text></Text>
                                    <Input placeholder="0000-2233-0000-3455" />
                                </View>
                            </View>
                        </View> : null}
                        <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{}}>
                                    <View>
                                        <Text>Order Summary</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <FlatList
                                        data={this.props.orderList}
                                        showsVerticalScrollIndicator={false}
                                        ItemSeparatorComponent={this._renderListSeparator}
                                        renderItem={({ item, index }) => this._renderListItems(item, index)}
                                        keyExtractor={item => item}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}