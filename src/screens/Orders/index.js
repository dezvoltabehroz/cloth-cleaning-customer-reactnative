import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

export default class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ordersList: [
                {
                    date: '8 Dec 2020',
                    status: 'Complete',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Pending',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Complete',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Pending',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Complete',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Pending',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Complete',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Complete',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Complete',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Complete',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
                {
                    date: '8 Dec 2020',
                    status: 'Complete',
                    orderNumber: '#00000456',
                    totalPrice: '50'
                },
            ]
        }
    }

    _renderListSeparator = () => {
        return (
            <View style={styles.listSeperatorStyle}></View>
        )
    }

    _renderItems = (item, index) => {
        return (
            <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('OrdersDetail')} style={{
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
                paddingHorizontal: '5%',
                paddingVertical: '5%'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.listTextStyle}>{item.date}</Text>
                    <Text style={styles.listTextStyle}>{item.status}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.listColorTextStyle}>Order number:</Text>
                    <Text style={styles.listColorTextStyle}>{item.orderNumber}</Text>
                </View>
                <View style={styles.lineStyle}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={styles.listTextStyle}>Rs.{item.totalPrice}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { ordersList } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.headingConatiner}>
                    <Text style={styles.headingTextStyle}>Past Orders</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={ordersList}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={this._renderListSeparator}
                        renderItem={({ item, index }) => this._renderItems(item, index)} />
                </View>
            </View>
        )
    }
}