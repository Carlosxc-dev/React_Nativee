import React, { ReactNode } from 'react'
import { View, Modal, ModalProps } from 'react-native';
import { Background } from '../background/index';
import { styles } from './style';

type props = ModalProps & {
    children: ReactNode
}

export default function ModalView({children, ...rest}: props) {
    return (
        <Modal
            transparent
            animationType='slide'
            {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.conteiner}>
                    <Background> 
                        <View style={styles.bar}/>
                        {children}
                    </Background>
                </View>
            </View>
        </Modal>
  )
}
