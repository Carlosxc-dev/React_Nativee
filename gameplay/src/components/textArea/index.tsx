import React from 'react'
import {styles} from './style'
import {TextInput, TextInputProps} from 'react-native'



export function TextArea({...rest} : TextInputProps) {
    return (
        <TextInput  
            style={styles.conteiner}
            
            {...rest}
        />
  )
}
