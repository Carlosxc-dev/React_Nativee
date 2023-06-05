import React from 'react';
import { StatusBar, LogBox} from 'react-native';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from './src/hooks/auth'

LogBox.ignoreLogs(["You are not currently signed in to Expo on your development machine. As a result, the redirect URL for AuthSession will be https://auth.expo.io/@anonymous/gameplay-99e7890c-a20d-4e42-a1e6-9a811be4a330. If you are using an OAuth provider that requires adding redirect URLs to an allow list, we recommend that you do not add this URL -- instead, you should sign in to Expo to acquire a unique redirect URL. Additionally, if you do decide to publish this app using Expo, you will need to register an account to do it."])

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