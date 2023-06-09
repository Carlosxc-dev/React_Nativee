import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'
import { GuildIcon } from '../guildIcon'
import { categories } from '../../utils/categories'
import PlayerSvg from '../../assets/player.svg'
import { theme } from '../../global/styles/theme'
import CalendarSvg from '../../assets/calendar.svg'
import { GuildProps } from '../guild'
import { LinearGradient } from 'expo-linear-gradient'


export type AppointmentProps = {
    id: string,
    guild: GuildProps,
    category: string,
    date: string,
    description: string
}

type Props = RectButtonProps & {
    data: AppointmentProps,
}

export function Appointment({ data, ...rest }: Props) {
    const [category] = categories.filter((item) => item.id === data.category)
    const { owner } = data.guild
    const { primary, on, secondary50, secondary70 } = theme.colors
    return (
        <RectButton {...rest}>
            <View style={styles.conteiner}>
                <LinearGradient
                    style={styles.guildIconconteiner}
                    colors={[secondary50, secondary70]}
                >
                    <GuildIcon />
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={owner ? primary : on} />

                            <Text
                                style={[
                                    styles.player,
                                    { color: owner ? primary : on }
                                ]}
                            >
                                {owner ? "anfitriao" : "visitante"}
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        </RectButton>
    )
}