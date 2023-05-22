import React from 'react';
import { StatusBar } from 'react-native';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from './src/components/hooks/auth'

import { Background } from './src/components/background';
import { Routes } from './src/routes/index'

export default function SingIn() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_500Medium,
        Rajdhani_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <Background>
            <StatusBar
                barStyle='light-content'
                backgroundColor="transparent"
                translucent={true}
            />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </Background>
    )
}