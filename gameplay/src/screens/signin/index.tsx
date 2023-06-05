import React from "react";
import{ Text,
	 	View,
		Image,
		Alert,
		ActivityIndicator
	} from "react-native";

import {ButtonIcon} from "../../components/buttonIcon/index"
import Img from "../../../assets/IllustrationImg.png";
import { styles } from "./styles";
import { Background } from '../../components/background';

import { useAuth } from '../../hooks/auth';
import { theme } from "../../global/styles/theme";

export function SignIn() {


	const {loading, signIn} = useAuth();
	

	async function handleSignIn() {
		try {
			await signIn()
		} catch (error) {
			Alert.alert(`${error}`)
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
					
					{
						loading ? <ActivityIndicator color={theme.colors.primary}/> : 
						<ButtonIcon 
						title="Entrar com discord"
						onPress={handleSignIn}
					/>}
				</View>
			</View>
		</Background >
	);
}
