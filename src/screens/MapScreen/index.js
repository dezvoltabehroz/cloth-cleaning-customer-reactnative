import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

export default class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {},
            loading: true
        }
    }

    componentDidMount = () => {
        const { region } = this.props.route.params;
        console.log("region:", region)

    }

    render() {
        const { loading } = this.state
        const { region } = this.props.route.params;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ flex: 1 }}
                    region={region}>
                    <Marker.Animated
                        opacity={0.5}
                        style={{ width: 20, height: 20 }}
                        coordinate={new AnimatedRegion({
                            latitude: parseFloat(region.latitude),
                            longitude: parseFloat(region.longitude),
                            latitudeDelta: region.latitudeDelta,
                            longitudeDelta: region.longitudeDelta,
                        })}
                    ></Marker.Animated>
                </MapView>
                <TouchableOpacity style={{ position: 'absolute', top: '90%', alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Search')}>
                    <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                        <Text style={styles.checkButtonTextStyle}>{'Search'}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}