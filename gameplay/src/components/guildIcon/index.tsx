import React from 'react'
import {Image} from 'react-native'
import { styles } from './style'

export function GuildIcon() {

    const uri = "https://img.icons8.com/color/512/discord-new-logo.png"

    return(
       
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode='cover'
        />
      
    )
}