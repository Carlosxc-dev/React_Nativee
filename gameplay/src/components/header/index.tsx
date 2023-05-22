import React, { ReactNode } from 'react'
import { Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler'
import {Feather} from "@expo/vector-icons"
import {styles} from "./style"
import { useNavigation } from '@react-navigation/native';


type props = {
    title: string,
    action?: ReactNode
}

export default function Header({ title, action }: props) {
    const { secondary100, secondary40, heading } = theme.colors;

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <LinearGradient
            style={styles.conteiner}
            colors={[secondary100, secondary40]}
        >

            <BorderlessButton 
                // style={{width:5}} ollha seta pequena 
                onPress={handleGoBack}
            >
                <Feather 
                    name="arrow-left"
                    zise={50}
                    color={heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action ?
                <View>
                    {action}
                </View>
                :
                <View style={{width:24}}/>
            }

        </LinearGradient>
    )
}
