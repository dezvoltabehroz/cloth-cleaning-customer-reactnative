import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { OrdersServices } from '../../services';
import styles from './style';
import { connect } from 'react-redux';
import moment from 'moment'
import { ActivityIndicator } from 'react-native';
import { RefreshControl } from 'react-native';
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ordersList: [],
            loading: true
        }
    }

    componentDidMount = () => {
        this.setState({ loading: true })
        let userData = {
            id: this.props.user.userData.id,
            token: this.props.user.userData.token
        }
        OrdersServices.getCustomerOrders(userData)
            .then((res) => {
                this.setState({ ordersList: res.data.result.rows, loading: false })
            })
            .catch((err) => {
                console.log(err)
                this.setState({ ordersList: [], loading: false })
            })
    }

    _renderListSeparator = () => {
        return (
            <View style={styles.listSeperatorStyle}></View>
        )
    }

    _renderItems = (item, index) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('OrdersDetail', { order_id: item.id })} style={{
                borderRadius: 10,
                elevation: 2,
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                marginBottom: '1%',
                borderColor: "#EEE",
                borderWidth: 0.3,
                paddingHorizontal: '5%',
                paddingVertical: 5
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.listTextStyle}>{moment(item.createdAt).format('ll')}</Text>
                    <Text style={[styles.listTextStyle, { textTransform: "capitalize" }]}>{item.orderStatus}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.listColorTextStyle}>Order number:</Text>
                    <Text style={styles.listColorTextStyle}>{item.id ? `#${item.id}` : ''}</Text>
                </View>
                <View style={styles.lineStyle}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={styles.listTextStyle}>Rs.{item.grandTotal}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { ordersList, loading } = this.state;
        return (
            <View style={styles.container}>
                {
                    loading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size={30} color={'#0DA7DF'} />
                        </View>
                        :
                        <>
                            {
                                ordersList.length == 0 ?
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.headingTextStyle}>No Orders found</Text>
                                    </View>
                                    :
                                    <>
                                        <View style={styles.headingConatiner}>
                                            <Text style={styles.headingTextStyle}>Past Orders</Text>
                                        </View>
                                        <View style={styles.listContainer}>
                                            <FlatList
                                                refreshControl={
                                                    <RefreshControl
                                                        refreshing={this.state.loading}
                                                        onRefresh={() => this.componentDidMount()}
                                                        tintColor={'#0DA7DF'}
                                                        colors={['#0DA7DF']}
                                                    />
                                                }
                                                data={ordersList}
                                                contentContainerStyle={{ paddingBottom: 80 }}
                                                showsVerticalScrollIndicator={false}
                                                ItemSeparatorComponent={this._renderListSeparator}
                                                renderItem={({ item, index }) => this._renderItems(item, index)} />
                                        </View>
                                    </>
                            }
                        </>
                }

            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {}
    };
};


export default connect(mapStateToProps)(Orders)