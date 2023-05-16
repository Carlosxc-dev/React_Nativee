import React from 'react'
import { View, FlatList } from 'react-native';
import { styles } from './style'
import { Guild, GuildProps } from '../../components/guild';
import { ListDivider } from '../../components/listDivider';

type props ={
    handleGuildsSelect: (guild: GuildProps) => void
}

export default function Guilds({handleGuildsSelect}:props) {

    const guild =[
        {
            id: '1',
            name: 'Lendarios',
            icon:  'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'galera do game ',
            icon:  'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Lendarios',
            icon:  'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'galera do game ',
            icon:  'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Lendarios',
            icon:  'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'galera do game ',
            icon:  'image.png',
            owner: true
        }
    ]
    
    return (
        <View style={styles.conteiner}>
            <FlatList
                data={guild}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <Guild 
                    data={item}
                    onPress = {() => handleGuildsSelect(item)}
                />                
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 68, paddingTop:104}}
                ListHeaderComponent={()=> <ListDivider isCentered/>}
                ItemSeparatorComponent={()=><ListDivider isCentered/>}
                style={styles.guilds}
            />
        </View>
  )
}
