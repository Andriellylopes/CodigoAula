import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

const Login = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.logo} source={require("../../assets/logo-facebook.png")}></Image>
				<Text style={styles.textLogo}>Facebook</Text>
			</View>
			<View style={styles.form}>
				<TextInput
					placeholder="E-mail"
					placeholderTextColor="#A19FA1"
					style={styles.Input}>
				</TextInput>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#A19FA1"
					style={styles.Input}>
				</TextInput>
				<View style={styles.button}>
					<Text style={styles.textButton}>Log-In</Text>
				</View>
				<Text style={styles.signUp}>Sign-Up for FaceBook</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#395185",
		alignItems: 'center',
		height: '100%'
	},

	header: {
		height: 100,
		marginTop: 180,
		justifyContent: 'space-evenly',
		flexDirection: 'row'
	},

	background: {
		backgroundColor: '#395185'
	},

	textLogo: {
		color: '#fff',
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: 50,
		marginLeft: 10
	},
	logo: {
		height: 40,
		padding: 30,
		width: 60
	},
	Input: {
		paddingLeft: 15,
		marginVertical: 20,
		width: '80%',
		backgroundColor: '#fff',
		height: 38,
		
	},

	button: {
		backgroundColor: '#213873',
		width: '80%',
		height: 48,
		paddingVertical: 5
	},

	form: {
		width: '90%',
		alignItems: 'center',
		justifyContent: 'center',

	},

	textButton: {
		color: '#fff',
		fontSize: 23,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	signUp: {
		fontSize: 16,
		marginVertical: 25,
		color: '#fff',
		textDecorationLine: 'underline'
	}
})

export default Login;