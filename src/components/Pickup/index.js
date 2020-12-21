import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Icon } from '..';
import styles from './style'
import MapView from 'react-native-maps';
import Input from '../Input';
const screenHeight = Dimensions.get('window').height;

export default class Pickup extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <View style={{ flex: 1, marginTop: '12%', }}>
                    <ScrollView contentContainerStyle={{ paddingBottom: '10%' }}>


                        <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>Your Address</Text>
                                    </View>
                                    <View>
                                        <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%', borderRadius: 10, overflow: 'hidden' }}>
                                    <MapView
                                        style={{ height: screenHeight * 0.2 }}
                                        initialRegion={{
                                            latitude: 32.1877,
                                            longitude: 74.1945,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                    />
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                                    <View style={{ flex: 0.5, flexDirection: 'column', marginTop: '2%' }}>
                                        <Text style={{ color: '#7A7A7A' }}>Park Rd,Islamabad,Islamaabad Catiptal....</Text>
                                    </View>
                                    <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View>
                                                <Icon.AntDesign name="checkcircle" color={'#0DA7DF'} size={20} />
                                            </View>
                                            <View style={{ marginLeft: '10%' }}>
                                                <Text style={{ color: '#7A7A7A' }}>Delivery Address</Text>
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
                                        <Text>Name</Text>
                                    </View>
                                    <View>
                                        <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={{ color: '#7A7A7A' }}>Lorem ipsum dolor</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>Phone number</Text>
                                    </View>
                                    <View>
                                        <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={{ color: '#7A7A7A' }}>+92 3456 8798</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>Pickup options</Text>
                                    </View>
                                    <View>
                                        <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                    <View>
                                        <Icon.AntDesign name="checkcircle" color={'#0DA7DF'} size={20} />
                                    </View>
                                    <View style={{ marginLeft: '5%' }}>
                                        <Text style={{ color: '#374B5C', fontWeight: 'bold' }}>Today</Text>
                                        <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Pickup on Noon (12pm-02pm), 8 Dec 2020</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                    <View>
                                        <Icon.MaterialCommunityIcons name="checkbox-blank-circle-outline" color={'#707070'} size={20} />
                                    </View>
                                    <View style={{ marginLeft: '5%' }}>
                                        <Text style={{ color: '#374B5C', fontWeight: 'bold' }}>Tomorrow</Text>
                                        <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Pickup on Morning (8am-10am), 9 Dec 2020</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>Delivery options</Text>
                                    </View>
                                    <View>
                                        <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                    <View>
                                        <Icon.AntDesign name="checkcircle" color={'#0DA7DF'} size={20} />
                                    </View>
                                    <View style={{ marginLeft: '5%', marginRight: '5%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ color: '#374B5C', fontWeight: 'bold' }}>Regular</Text>
                                            <Text style={{ color: '#374B5C', fontWeight: 'bold' }}>Rs.50</Text>
                                        </View>
                                        <Text style={{ color: '#7A7A7A', fontSize: 12 }}>You will receive laundry within 3 to 4 working days</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                    <View>
                                        <Icon.MaterialCommunityIcons name="checkbox-blank-circle-outline" color={'#707070'} size={20} />
                                    </View>
                                    <View style={{ marginLeft: '5%', marginRight: '5%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ color: '#374B5C', fontWeight: 'bold' }}>Express</Text>
                                            <Text style={{ color: '#374B5C', fontWeight: 'bold' }}>Rs.200</Text>
                                        </View>
                                        <Text style={{ color: '#7A7A7A', fontSize: 12 }}>You will receive laundry within 1 to 2 working days</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: '5%', }}>
                            <View style={styles.upperContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>Optional note</Text>
                                    </View>
                                    <View>
                                        <Icon.MaterialIcons name="edit" color={'#7A7A7A'} size={20} />
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%', borderRadius: 10, overflow: 'hidden' }}>
                                    <Input placeholder="Note here..." />
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}