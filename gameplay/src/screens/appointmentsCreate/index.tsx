import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { Background } from '../../components/background'
import Header from '../../components/header'

import { styles } from './style';
import { theme } from '../../global/styles/theme'
import { CategorySelect } from '../../components/categorySelect/index';
import { SmallInput } from '../../components/smallinput';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { TextArea } from '../../components/textArea/index';
import { Button } from '../../components/button/index';
import ModalView from '../../components/modalView';
import Guilds from '../guilds';
import { GuildProps } from '../../components/guild';
import { GuildIcon } from '../../components/guildIcon';



export default function AppointmentCreate() {
    const [category, setCategory] = useState('')
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    function handleOpenGuilds() {
        setOpenGuildsModal(true)
    }
    function handleCloseGuilds() {
        setOpenGuildsModal(false)
    }

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId)
    }

    function handleGuildsSelect(guildSelect: GuildProps) {
        setGuild(guildSelect)
        setOpenGuildsModal(false)
    }


    return (
        <KeyboardAvoidingView
            style={styles.conteiner}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Background>
                <ScrollView>
                    <Header
                        title='Agendar partida'
                    />
                    <Text style={
                        [styles.label,
                        { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
                    >
                        Categoria
                    </Text>
                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>

                                {
                                    guild.icon ? <GuildIcon /> : <View style={styles.image} />
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : "Selecione um servidor"}
                                    </Text>
                                </View>

                                <Feather
                                    name='chevron-right'
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View >
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Dia e mês
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>

                            <View >
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Hora e minuto
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>

                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caracterLimite}>
                                Max 100 caracteres
                            </Text>

                        </View>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />

                        <View style={styles.footer}>
                            <Button title='Agendar' />
                        </View>

                    </View>
                </ScrollView>
            </Background >

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildsSelect={handleGuildsSelect} />
            </ModalView>
        </KeyboardAvoidingView>

    );
}
