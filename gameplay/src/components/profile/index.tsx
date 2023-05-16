import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import { Avatar } from '../avatar'

export function Profile() {
    return(
        <View style={styles.conteiner}>

            <Avatar urlImage='https://github.com/Carlosxc-dev.png'/>
            
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Rodrigo
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitoria
                </Text>
            </View>

        </View>
    )
}