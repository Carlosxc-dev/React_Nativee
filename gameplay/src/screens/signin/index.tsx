import React from "react";
import{ Text,
	 	View,
		Image,
		Alert,
	} from "react-native";

import {ButtonIcon} from "../../components/buttonIcon/index"
import Img from "../../../assets/IllustrationImg.png";
import { styles } from "./styles";
import { Background } from '../../components/background';

import { useAuth } from '../../hooks/auth';

export function SignIn() {


	const {user, signIn} = useAuth();
	

	function handleSignIn() {
		try {
			await signIn()
		} catch (error) {
			Alert.alert(error)
		}
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
