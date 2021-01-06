import React, { Component } from 'react';
import { StatusBar, Linking, Platform, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './routes'
import { MenuProvider } from 'react-native-popup-menu';
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
                <MenuProvider>
                    <NavigationContainer>
                        <SafeAreaProvider>
                            <StatusBar backgroundColor="#0DA7DF" />
                            <AppRoutes />
                        </SafeAreaProvider>
                    </NavigationContainer>
                </MenuProvider>
            </Provider>
        </>
    );
}


