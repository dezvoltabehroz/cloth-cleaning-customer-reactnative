import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from '..';
import styles from './style'
import MapView from 'react-native-maps';
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
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: '15%', }}>
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

                        </View>
                    </View>
                </View>
            </>
        )
    }
}