import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import { styles } from './style';

import { Profile } from '../../components/profile';
import { ButtonAdd } from '../../components/buttonAdd';
import { CategorySelect } from '../../components/categorySelect';
import { ListHeader } from '../../components/listHeader';
import { Appointment } from '../../components/appointment';
import { ListDivider } from '../../components/listDivider';
import { Background } from '../../components/background';

import { useNavigation } from '@react-navigation/native';


export function Home() {

    const [category, setCategory] = useState('')
    const navegation = useNavigation()

    const appoiments = [
        {
            id: "1",
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: false
            },
            category: "1",
            date: '22/06 as 20:00h',
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        },
        {
            id: "2",
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: "1",
            date: '22/06 as 20:00h',
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        },
        {
            id: "3",
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: false
            },
            category: "1",
            date: '22/06 as 20:00h',
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        },
        {
            id: "4",
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: "1",
            date: '22/06 as 20:00h',
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        },
        {
            id: "5",
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: "1",
            date: '22/06 as 20:00h',
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        },
        {
            id: "6",
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: "1",
            date: '22/06 as 20:00h',
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        },
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentsDetails() {
        navegation.navigate("AppointmentDetails")
    }
    function handleAppointmentCreate() {
        navegation.navigate("AppointmentCreate")
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />


            <ListHeader
                title='Partidas agendadas'
                subtitle='Total 6'
            />


            <FlatList
                data={appoiments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment
                        data={item}
                        onPress={handleAppointmentsDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{paddingBottom: 69}}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />

        </Background>
    );
}