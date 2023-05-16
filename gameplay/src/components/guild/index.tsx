import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { View, Text } from 'react-native'
import { styles } from './style'
import { GuildIcon } from '../guildIcon'
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme'

export type GuildProps = {
    id: string,
    name: string,
    icon: string | null,
    owner: boolean
}

type props = TouchableOpacityProps & {
    data: GuildProps
}

export function Guild({ data, ...rest }: props) {
    return (
        <TouchableOpacity
            style={styles.conteiner}
            activeOpacity={.7}
            {...rest}
        >
            <GuildIcon />

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>

                    <Text style={styles.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>
            
            <Feather
                name='chevron-right'
                color={theme.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    )
}
