import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {

        const userToken = await AsyncStorage.getItem('USER');
        if (userToken) {
            this.props.navigation.replace('Main');
        } else {
            this.props.navigation.replace('Auth');
        }
        // this.props.navigation.replace(userToken ? 'Customer' : 'Auth');
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={60} color={''} />
            </View>
        );
    }
}

export default AuthLoadingScreen;
