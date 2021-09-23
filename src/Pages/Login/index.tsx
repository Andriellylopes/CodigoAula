import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';
type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>;
const Login = () => {
	const navigation = useNavigation<LoginProps>();
	function irParaHome() {
		navigation.navigate('Home');
	}
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.logoFacebook} source={require("../../assets/logo-facebook.png")}></Image>
				<Text style={styles.title}>Facebook</Text>
			</View>
			<View style={styles.formulario}>
				<TextInput
					placeholder="E-mail ou Usuário"
					placeholderTextColor="#A19FA1"
					style={styles.InputLogin}>
				</TextInput>
				<TextInput
					placeholder="Senha"
					placeholderTextColor="#A19FA1"
					style={styles.InputLogin}>
				</TextInput>
				<View style={styles.buttonOnLogin}>
					<TouchableOpacity style={styles.buttonOnLogin} onPress={irParaHome}>
						<Text style={styles.buttonOnHome}>Log-In</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.signUp}>Sign-Up for Facebook</Text>
			</View>
		</View>
	);
}
export default Login;