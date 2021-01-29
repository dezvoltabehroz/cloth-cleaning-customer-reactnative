import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
import ProgressCircle from 'react-native-progress-circle'
import { Icon } from '../../components';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient'
import StarRating from 'react-native-star-rating';
import { Input } from 'react-native-elements'
const screenWidth = Dimensions.get('window').width;
import moment from 'moment'
import { OrdersServices } from '../../services';
import { connect } from 'react-redux';
import { RefreshControl } from 'react-native';

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id: 7,
            title: 'Lorem Ipsum Dolor',
            price: 50,
            quantity: 1,
            date: '8 Dec 2020',
            orderNumber: '#00000456',
            address: '',
            totalPrice: "",
            discount: "",
            grandTotal: "",
            shipping: "",
            status: "",
            serivceType: '',
            review: '',
            starCount: 0,
            ratingModal: false,
            rated: false,
            description: '',
            orders: []
        }
    }
    componentDidMount = () => {
        this.setState({ loading: true })
        let userData = {
            id: this.props.user.userData.id,
            token: this.props.user.userData.token,
            order_id: this.props.route.params.order_id
        }
        OrdersServices.getOrderDetails(userData)
            .then((res) => {
                console.log(res.data.result)
                this.setState({
                    address: res.data.result.deliveryAddress,
                    status: res.data.result.orderStatus,
                    totalPrice: res.data.result.totalPrice,
                    grandTotal: res.data.result.grandTotal,
                    orders: res.data.result.orderedproduct,
                    orderNumber: res.data.result.id ? res.data.result.id : "",
                    date: res.data.result.deliveryTime ? res.data.result.deliveryTime : "",
                    loading: false
                })
            })
            .catch((err) => console.log(err))
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }


    render() {
        const { title, price, quantity, loading, grandTotal, review, rated, starCount, ratingModal, serivceType, status, orderNumber, address, date, orders, discount, totalPrice } = this.state;
        return (
            <>
                {
                    loading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size={30} color={'#0DA7DF'} />
                        </View>
                        :
                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                            <ScrollView refreshControl={
                                <RefreshControl
                                    refreshing={this.state.loading}
                                    onRefresh={() => this.componentDidMount()}
                                    tintColor={'#0DA7DF'}
                                    colors={['#0DA7DF']}
                                />
                            } contentContainerStyle={{ paddingBottom: 80 }}>
                                <View style={styles.upperContainer}>
                                </View>
                                <View style={styles.imageContainer}>
                                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                                        <ProgressCircle
                                            percent={status == 'approved' ? 50 : 100}
                                            radius={50}
                                            borderWidth={10}
                                            color={status == 'pending' ? 'orange' : status == 'cancel' ? 'red' : status == 'confirm' ? '#4eb42f' : "green"}
                                            shadowColor="#E1E1E1"
                                            bgColor="#fff"
                                        >
                                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', color: "#102134", textTransform: 'capitalize' }}>{status}</Text>
                                        </ProgressCircle>
                                    </View>
                                    {
                                        status == 'Complete' ?
                                            rated ?
                                                <View style={{ marginHorizontal: '5%', paddingBottom: 3, }}>
                                                    <View style={[styles.itemQuantityContainer, { alignItems: 'center' }]}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '5%' }}>
                                                            <StarRating
                                                                disabled={true}
                                                                containerStyle={{ justifyContent: 'space-between', }}
                                                                starStyle={{ paddingHorizontal: 2.5 }}
                                                                emptyStarColor={"#B5B5B5"}
                                                                maxStars={5}
                                                                starSize={25}
                                                                rating={starCount}
                                                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                                fullStarColor={"#29B1DB"}
                                                            />
                                                            <View style={{ width: 10 }}></View>
                                                        </View>
                                                        <View>
                                                            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 12, color: '#8E9297', }}>{moment().format('DD/MM/YYYY')}</Text>
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: '#7A7A7A' }}>{review}</Text>
                                                    </View>
                                                </View>
                                                :
                                                <TouchableOpacity onPress={() => this.setState({ ratingModal: true })} style={{ marginHorizontal: '5%', borderBottomWidth: 0.3, paddingBottom: 3, marginBottom: 10, borderColor: '#7A7A7A' }}>
                                                    <View style={styles.itemQuantityContainer}>
                                                        <View>
                                                            <Text style={styles.listTextStyle}>Write a review</Text>
                                                        </View>
                                                        <View>
                                                            <Icon.MaterialIcons name="edit" color="#7A7A7A" size={12} />
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            :
                                            null
                                    }
                                </View>
                                <View style={styles.lowerContainer}>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.headingTitleStyle}>Order Details</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.totalPriceTextStyle, { fontSize: 14, fontFamily: 'Roboto-Medium', textTransform: 'capitalize' }]}>{status}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.lineStyle}></View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Your order number:</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.listTextStyle, { fontFamily: 'Roboto-Medium' }]}>#{orderNumber}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Address</Text>
                                        </View>
                                        <View style={{ width: 180 }}>
                                            <Text style={[styles.listTextStyle, { fontFamily: 'Roboto-Medium', textAlign: "right" }]}>{address}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Delivery date:</Text>
                                        </View>
                                        <View>
                                            {/* <Text style={[styles.listTextStyle, { fontFamily: 'Roboto-Medium' }]}>{date}</Text> */}
                                        </View>
                                    </View>
                                    <View style={styles.lineStyle}></View>
                                    {
                                        orders.map((item, index) => {
                                            return (
                                                <>
                                                    <View style={styles.itemQuantityContainer}>
                                                        <View>
                                                            <Text style={styles.headingTitleStyle}>{item.productorder.name}</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={styles.headingTitleStyle}>Rs.{item.unitPrice * item.quantity}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.itemQuantityContainer}>
                                                        <View>
                                                            <Text style={styles.listTextStyle}>Rs. {item.unitPrice} X {item.quantity}</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={[styles.listTextStyle, { fontFamily: 'Roboto-Medium' }]}>{item.productorder.name}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.lineStyle}></View>
                                                </>
                                            )
                                        })
                                    }
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Total</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listTextStyle}>Rs.{totalPrice}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Shipping</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listTextStyle}>Rs.{grandTotal - totalPrice}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={styles.listTextStyle}>Discount</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.listTextStyle, { color: '#A50808' }]}>Rs.{'00'}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.lineStyle}></View>
                                    <View style={styles.itemQuantityContainer}>
                                        <View>
                                            <Text style={[styles.headingTitleStyle, { color: '#707070' }]}>Total</Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.headingTitleStyle, { color: '#707070' }]}>Rs.{grandTotal}</Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                            <Modal isVisible={ratingModal}>
                                <View style={[styles.cardContainer]}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <Text style={styles.headingText}>Rating</Text>
                                        <TouchableOpacity onPress={() => this.setState({ ratingModal: false })} style={styles.iconContainer}>
                                            <Icon.Ionicons name='close-outline' size={15} color={'#7A7A7A'} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.lineStyle}></View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '5%' }}>
                                        <StarRating
                                            disabled={false}
                                            containerStyle={{ justifyContent: 'space-between', }}
                                            starStyle={{ paddingHorizontal: 5 }}
                                            emptyStarColor={"#B5B5B5"}
                                            maxStars={5}
                                            starSize={25}
                                            rating={starCount}
                                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                                            fullStarColor={"#29B1DB"}
                                        />
                                        <View style={{ width: 10 }}></View>
                                    </View>
                                    <View>
                                        <Text style={styles.headingText}>Anything else?</Text>
                                        <Input value={review}
                                            multiline={true}
                                            inputStyle={styles.inputStyle}
                                            inputContainerStyle={styles.inputContainerStyle}
                                            containerStyle={styles.containerStyle}
                                            onChangeText={(review) => this.setState({ review })}
                                            placeholder="Help others to lorem ipsum dolor" />
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: '10%' }}>
                                        <TouchableOpacity disabled={starCount != 0 || review != '' ? false : true} style={{ alignSelf: 'flex-end' }} onPress={() => {
                                            this.setState({ ratingModal: false, rated: true })
                                        }}>
                                            <LinearGradient colors={starCount != 0 || review != '' ? ['#0DA7DF', '#27C2FA'] : ['#F2F2F2', '#F2F2F2']} style={styles.saveButtonContainer}>
                                                <Text style={[styles.checkButtonTextStyle, { color: starCount != 0 || review != '' ? 'white' : 'gray' }]}>{'Save'}</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                }
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {}
    };
};


export default connect(mapStateToProps)(OrderDetail)