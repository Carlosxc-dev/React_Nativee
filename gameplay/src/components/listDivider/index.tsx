import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

type props ={
  isCentered ?: boolean
}

export function ListDivider({isCentered}:props) {
  return (
        <View 
          style={[
            styles.conteiner,
            isCentered ? {marginVertical: 12, } :  {marginTop: 2, marginBottom: 31}
        ]}/>
  )
}