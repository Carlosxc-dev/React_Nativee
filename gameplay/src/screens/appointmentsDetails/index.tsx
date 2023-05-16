import React from 'react'
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { Background } from '../../components/background'
import Header from '../../components/header'

import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from "@expo/vector-icons"
import { theme } from '../../global/styles/theme'

import BannerImg from "../../assets/banner.png"
import { styles } from './style';
import { ListHeader } from '../../components/listHeader';
import { Members } from '../../components/member';
import { ListDivider } from '../../components/listDivider';
import { ButtonIcon } from '../../components/buttonIcon/index';


export default function AppointmentDetails() {

    const menbers = [
        {
            id: "1",
            username: 'rodrigo',
            avatar_url: 'https://github.com/Carlosxc-dev.png',
            status: 'online' 
        },
        {
            id: "2",
            username: 'rodrigo',
            avatar_url: 'https://github.com/Carlosxc-dev.png',
            status: 'online' 
        }
    ]

    return (

        <Background>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>

                    <Text style={styles.title}>
                        Lendarios
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle='Total 3'
            />

            <FlatList
                data={menbers}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Members data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title='Entrar na partida'/>
            </View>
        </Background >


    );
}
