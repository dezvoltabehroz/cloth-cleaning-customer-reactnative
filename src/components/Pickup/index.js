import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Icon } from '..';
import styles from './style'
import MapView from 'react-native-maps';
import Input from '../Input';
const screenHeight = Dimensions.get('window').height;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux';
class Pickup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editPickUpShift: false,
            pickUpShift: 'Noon (12pm-02pm)',
            timing: '',
            time: 'Noon',
            region: {
                latitude: 32.1877,
                longitude: 74.1945,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            address: '',
            shift: [
                {
                    shiftName: 'Morning',
                    timing: '8am-10am',
                    selected: false
                },
                {
                    shiftName: 'Noon',
                    timing: '12pm-02pm',
                    selected: true
                },
                {
                    shiftName: 'Afernoon',
                    timing: '04pm-06pm',
                    selected: false
                }
            ],
            today: true,
            day: 'today',
            tommorrow: false,
            regular: true,
            express: false,
            name: "",
            phone: "",
            deliveryCharges: 50,
            note: ""
        }
    }

    componentDidMount = () => {
        const { region, address } = this.props.route;

        if (this.props.route != undefined) {
            console.log("region:", region)
            this.setState({
                name: this.props.user.userData.fullName,
                phone: this.props.user.userData.phone,
                region: region != undefined ? region : this.state.region,
                address: address != undefined ? address : this.props.user.userData.address + " " + this.props.user.userData.city
            })
            this.props.day('today');
            this.props.time('Noon');
            this.props.urgent('0');
            this.props.address(address != undefined ? address : this.props.user.userData.address + " " + this.props.user.userData.city);
            this.props.region(region != undefined ? ({ lat: region.latitude, lng: region.longitude }) : ({ lat: this.state.region.latitude, lng: this.state.region.longitude }))
        }
    }

    handleshift = (item, index) => {
        const objIndex = this.state.shift.findIndex((obj => obj == item));
        let items = [...this.state.shift];
        for (let index = 0; index < items.length; index++) {
            items[index] = { ...items[index], selected: false };
        }
        items[objIndex] = { ...items[objIndex], selected: true };
        this.setState({ shift: items, timing: `${items[objIndex].shiftName} (${items[objIndex].timing})`, time: items[objIndex].shiftName });
        this.props.time(items[objIndex].shiftName);
    }

    truncateString = (str, num) => {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    render() {
        const { name, phone, address, region, regular, express, today, tommorrow, note } = this.state;
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: '5%', }}>
                        <View style={styles.upperContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Medium', color: '#1E2123' }}>Your Address</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Map', {
                                    screen: 'Map',
                                    params: { address: address, region: region }
                                })}>
                                    <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: '5%', borderRadius: 10, overflow: 'hidden' }}>
                                <MapView
                                    style={{ height: screenHeight * 0.2 }}
                                    region={{
                                        latitude: parseFloat(this.state.region.latitude),
                                        longitude: parseFloat(this.state.region.longitude),
                                        latitudeDelta: this.state.region.latitudeDelta,
                                        longitudeDelta: this.state.region.longitudeDelta,
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View style={{ flex: 0.5, flexDirection: 'column', marginTop: '2%' }}>
                                    <Text style={{ color: '#7A7A7A', fontFamily: 'Roboto-Regular', }}>{this.truncateString(address, 28)}</Text>
                                </View>
                                <View style={{ flex: 0.5, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                        <View>
                                            <Icon.AntDesign name="checkcircle" color={'#0DA7DF'} size={20} />
                                        </View>
                                        <View style={{ marginLeft: '5%' }}>
                                            <Text style={{ color: '#7A7A7A', fontFamily: 'Roboto-Regular', fontSize: 12 }}>Delivery Address</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: '5%', }}>
                        <View style={styles.upperContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Medium', color: '#1E2123' }}>Name</Text>
                                </View>
                                <View>
                                    <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                </View>
                            </View>
                            <View style={{ marginTop: '2%' }}>
                                <Text style={{ color: '#7A7A7A', fontFamily: 'Roboto-Regular', fontSize: 12 }}>{name}</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{ marginTop: '5%', }}>
                        <View style={styles.upperContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Medium', color: '#1E2123' }}>Phone number</Text>
                                </View>
                                <View>
                                    <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                </View>
                            </View>
                            <View style={{ marginTop: '2%' }}>
                                <Text style={{ color: '#7A7A7A', fontFamily: 'Roboto-Regular', fontSize: 12 }}>{phone}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: '5%', }}>
                        <View style={styles.upperContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Medium', color: '#1E2123' }}>Pickup options</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.setState({ editPickUpShift: true })}>
                                    <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => this.setState({ today: true, tommorrow: false }, () => this.props.day('today'))} style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                <View>
                                    <Icon.MaterialCommunityIcons name={today ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} color={today ? '#0DA7DF' : '#707070'} size={20} />
                                </View>
                                <View style={{ marginLeft: '5%' }}>
                                    <Text style={{ color: '#374B5C', fontFamily: 'Roboto-Medium', fontSize: 13, }}>Today</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12, fontFamily: 'Roboto-Regular' }}>Pickup on {this.state.pickUpShift}, 8 Dec 2020</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ today: false, tommorrow: true }, this.props.day('tommorrow'))} style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                <View>
                                    <Icon.MaterialCommunityIcons name={tommorrow ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} color={tommorrow ? '#0DA7DF' : '#707070'} size={20} />
                                </View>
                                <View style={{ marginLeft: '5%' }}>
                                    <Text style={{ color: '#374B5C', fontFamily: 'Roboto-Medium', fontSize: 13, }}>Tomorrow</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12, fontFamily: 'Roboto-Regular' }}>Pickup on {this.state.pickUpShift}, 9 Dec 2020</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ marginTop: '5%', }}>
                        <View style={styles.upperContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Medium', color: '#1E2123' }}>Delivery options</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => this.setState({ regular: true, express: false }, () => this.props.urgent('0'))} style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                <View>
                                    <Icon.MaterialCommunityIcons name={regular ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} color={regular ? '#0DA7DF' : '#707070'} size={20} />
                                </View>
                                <View style={{ marginLeft: '5%', marginRight: '5%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#374B5C', fontFamily: 'Roboto-Medium', fontSize: 13 }}>Regular</Text>
                                        <Text style={{ color: '#374B5C', fontWeight: 'bold', fontSize: 13 }}>Rs.50</Text>
                                    </View>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12, fontFamily: 'Roboto-Regular' }}>You will receive laundry within 3 to 4 working days</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ regular: false, express: true }, () => () => this.props.urgent('1'))} style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                <View>
                                    <Icon.MaterialCommunityIcons name={express ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} color={express ? '#0DA7DF' : '#707070'} size={20} />
                                </View>
                                <View style={{ marginLeft: '5%', marginRight: '5%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#374B5C', fontFamily: 'Roboto-Medium', fontSize: 13 }}>Express</Text>
                                        <Text style={{ color: '#374B5C', fontWeight: 'bold', fontSize: 13 }}>Rs.200</Text>
                                    </View>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12, fontFamily: 'Roboto-Regular' }}>You will receive laundry within 1 to 2 working days</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: '5%', }}>
                        <View style={styles.upperContainer}>
                            <View style={{}}>
                                <View>
                                    <Text style={{ fontFamily: 'Roboto-Medium', color: '#1E2123' }}>Optional note</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Input value={note} placeholder="Note here..." onChangeText={(note) => this.setState({ note })} onBlur={() => this.props.note(note)} />
                            </View>

                        </View>
                    </View>
                </View>
                <Modal isVisible={this.state.editPickUpShift}>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5%' }}>
                            <Text style={styles.headingText}>Shift</Text>
                            <TouchableOpacity onPress={() => this.setState({ editPickUpShift: false })} style={styles.iconContainer}>
                                <Icon.Ionicons name='close-outline' size={15} color={'#7A7A7A'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lineStyle}></View>
                        <View style={{ marginTop: '5%' }}>
                            <View>
                                {
                                    this.state.shift.map((item, index) => {
                                        return (
                                            <TouchableOpacity onPress={() => this.handleshift(item, index)} style={{ flexDirection: 'row', marginBottom: '5%' }}>
                                                <View>
                                                    <Icon.MaterialIcons name={item.selected ? "radio-button-checked" : "radio-button-unchecked"} color={item.selected ? '#0DA7DF' : '#707070'} size={20} />
                                                </View>
                                                <View style={{ marginLeft: '5%' }}>
                                                    <Text style={{ color: "#7A7A7A", fontSize: 12, fontFamily: 'Roboto-Regular' }}>{item.shiftName} ({item.timing})</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => this.setState({ editPickUpShift: false, pickUpShift: this.state.timing, }, () => {
                            // let userData = {
                            // }
                            // this.props.data()
                        })}>
                            <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                <Text style={styles.checkButtonTextStyle}>{'Apply'}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {},
        cart: state.cartReducer || {}
    };
};


export default connect(mapStateToProps)(Pickup)