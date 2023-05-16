import React from 'react'
import { View } from 'react-native'
import { Avatar } from '../avatar/index';
import { Text } from 'react-native';
import { styles } from './style';
import { theme } from '../../global/styles/theme';

type memberProps = {
    id: string,
    username: string,
    avatar_url: string,
    status: string
}

type Props = {
    data: memberProps;
}


export function Members({data}: Props) {

    const isOnline = data.status === 'online'
    const {on , primary} = theme.colors

    return (

        <View style={styles.conteiner}>
            <Avatar urlImage={data.avatar_url} />

            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>

                <View style={styles.status}>

                    <View  
                        style={[
                            styles.bulletStatus,

                            {
                                backgroundColor: isOnline ? on : primary
                            }
                        ]}
                    />

                

                    <Text style={styles.namestatus}>
                        {isOnline ? 'disponivel' : 'ocupado'}
                    </Text>
                </View>
            </View>


        </View>

    )
}
