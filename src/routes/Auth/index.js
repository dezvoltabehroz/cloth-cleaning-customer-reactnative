import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { Login, ForgetPassword, NewPassword, OTP, Signup } from '../../screens';

const Stack = createStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Signup" component={Signup} options={{
                headerShown: false
            }} />
            <Stack.Screen name="OTP" component={OTP} options={{
                headerShown: false
            }} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{
                headerShown: false
            }} />
             <Stack.Screen name="NewPassword" component={NewPassword} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 16,
        color: "#fff",
    }
})

export default AuthRoutes;