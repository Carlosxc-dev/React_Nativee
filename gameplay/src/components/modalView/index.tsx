import React, { ReactNode } from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../background/index';
import { styles } from './style';

type props = ModalProps & {
    children: ReactNode,
    closeModal: () => void
}

export default function ModalView({ children, closeModal, ...rest }: props) {
    return (
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal} >
                <View style={styles.overlay}>
                    <View style={styles.conteiner}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
