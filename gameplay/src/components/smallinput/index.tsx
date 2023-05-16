import React from 'react'
import {styles} from './style'
import {TextInput, TextInputProps} from 'react-native'



export function SmallInput({...rest} : TextInputProps) {
    return (
        <TextInput  
            style={styles.conteiner}
            keyboardType='numeric'
            {...rest}
        />
  )
}
