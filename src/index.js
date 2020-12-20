import React, { Component } from 'react';
import { StatusBar, Linking, Platform, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './routes'

import { Provider } from "react-redux";
import createStore from "./redux/CreateStore";
const store = createStore();


export default function App() {
    React.useEffect(() => {
        LogBox.ignoreAllLogs(true)
    });
    return (
        <>
            <Provider store={store}>
                <NavigationContainer>
                    <SafeAreaProvider>
                        <AppRoutes />
                    </SafeAreaProvider>
                </NavigationContainer>
            </Provider>
        </>
    );
}


