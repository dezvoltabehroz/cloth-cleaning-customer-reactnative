import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Geocoder from 'react-native-geocoder';
import { connect } from 'react-redux';
import { cartActions } from '../../redux/actions/cart';
import { bindActionCreators } from "redux";
class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {},
            loading: true
        }
    }

    componentDidMount = () => {

        this.setState({ region: this.props.cart.region, loading: false })

    }

    handleDragFuntion = (e) => {
        console.log(e.nativeEvent.coordinate)
        this.setState({
            region: {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }
        })
        Geocoder.geocodePosition({
            lat: e.nativeEvent.coordinate.latitude,
            lng: e.nativeEvent.coordinate.longitude,
        }).then((res) => {
            let userData = {
                region: {
                    latitude: this.state.region.latitude,
                    longitude: this.state.region.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                },
                address: res[0].formattedAddress
            }
            this.props.cartActions.setRegion(userData)
        })
            .catch(error => alert(error));

    }


    render() {
        const { loading, region } = this.state
        return (
            <View style={{ flex: 1 }}>
                {
                    loading ?
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator color='#0DA7DF' size={60} />
                        </View>
                        :
                        <>
                            <MapView
                                provider={PROVIDER_GOOGLE}
                                style={{ flex: 1 }}
                                region={this.props.cart.region}>
                                <Marker.Animated
                                    ref={marker => {
                                        this.marker = marker;
                                    }}
                                    onDragEnd={(e) => this.handleDragFuntion(e)}
                                    draggable
                                    opacity={0.5}
                                    style={{ width: 20, height: 20 }}
                                    coordinate={new AnimatedRegion({
                                        latitude: parseFloat(this.props.cart.region.latitude),
                                        longitude: parseFloat(this.props.cart.region.longitude),
                                        latitudeDelta: 0.005,
                                        longitudeDelta: 0.005,
                                    })}
                                ></Marker.Animated>
                            </MapView>
                            <TouchableOpacity style={{ position: 'absolute', top: '90%', alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Search')}>
                                <LinearGradient colors={['#0DA7DF', '#27C2FA']} style={styles.checkoutButtonContainer}>
                                    <Text style={styles.checkButtonTextStyle}>{'Search'}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </>}
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer || {},
        cart: state.cartReducer || {}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartActions: bindActionCreators(cartActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)