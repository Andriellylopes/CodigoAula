import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';

const LinkItem = (props: any) => {
	return (
	<Text style={stylesLink.text}>{props.name}</Text>
	);
}
const stylesLink=StyleSheet.create({
	text: {
	marginTop: 10,
	color: '#4A4A4C',
	fontSize: 13.71,
	}
});

const LinksImportantes = () => {
	return (
		<View style={stylesLinkImportantes.container}>
		<LinkItem name="Home"/>
		<LinkItem name="Videos"/>
		<LinkItem name="Photos"/>
		<LinkItem name="Post"/>
		<LinkItem name="Community"/>
		</View>
	);
};
const stylesLinkImportantes = StyleSheet.create({
	container: {
	flexDirection: "row",
	justifyContent: "space-between",
	paddingHorizontal: 40,
	paddingVertical: 10,
	borderBottomColor: "red",
	borderBottomWidth: 1,
	}
});

const Home = () => {
	return (
	<View style={styles.container}>
		<View style={styles.header}>
			<Image source={require("../../assets/arrow-left.png")}></Image>

			<View style={styles.inputTextView}>
				<Image source={require("../../assets/ei_search.png")}></Image>

				<TextInput
					placeholder="Search"
					placeholderTextColor="#F5FFFF"
					style={styles.textInput}>
				</TextInput>
			</View>
			<Image source={require("../../assets/share.png")}
			></Image>
		</View>
		<LinksImportantes />
		<StatusBar style="auto" />
	</View>
	)
};

const styles=StyleSheet.create({
	container: {
		flex: 1,
	},

	header:{
		paddingHorizontal: 30,
		minHeight: 93,
		flexDirection: "row",
		paddingTop: 40,
		backgroundColor: "#4369B0",
		justifyContent: "space-between",
	},

	inputTextView: {
		flex: 1,
		backgroundColor: "#2C4877",
		height: 40,
		marginHorizontal: 10,
		alignItems: "center",
		borderRadius: 28,
		paddingLeft: 10,
		flexDirection: "row"
	},

	textInput: {
		color: "#F5FFFF",
		flex: 1,
		paddingRight: 10,
	},
});

export default Home;