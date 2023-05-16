import React from "react";
import{ Text,
	 	View,
		Image
	} from "react-native";

import {ButtonIcon} from "../../components/buttonIcon/index"
import Img from "../../../assets/IllustrationImg.png";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/background';

export function SignIn() {

	const navigation = useNavigation();

	function handleSignIn() {
		navigation.navigate('Home');
	}

	return (
		<Background >
			<View style={styles.conteiner}>

				<Image 
					source={Img} 
					style={styles.image}
					resizeMode="stretch"
				/>
				<View style={styles.content}>
					<Text style={styles.title}>
						Conecte-se{"\n"}
						e organize suas{"\n"}
						jogatinas{"\n"}
					</Text>
					<Text style={styles.subtitle}>
						Crie grupos para jogar seus games{'\n'}
						favoritos com os amigos
					</Text>
					
					<ButtonIcon 
						title="Entrar com discord"
						onPress={handleSignIn}
					/>
				</View>
			</View>
		</Background >
	);
}
