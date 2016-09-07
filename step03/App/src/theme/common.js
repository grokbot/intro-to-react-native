import { StyleSheet } from "react-native";

export const Colors = {
	red: 'rgba(253, 49, 40, 1)',
	white: '#ffffff',
	yellow: '#fff366',
	black: '#000000',
	gray: 'rgba(110, 110, 110, 1)', // NOTE THE TRAILING COMMA!
};

export const BaseTheme = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'stretch',
		flexDirection: 'column',
		flexWrap: 'wrap',
	},
	main: {
		backgroundColor: Colors.black
	},
	scrollView: {
		flex: 1,
		alignSelf: 'stretch',
	},
	loader: {
		backgroundColor: Colors.black
	},
	centered: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	content: {
		padding: 20
	},
	text: {
		fontSize: 16,
		color: Colors.white
	},
	title: {
		fontSize: 24,
		color: Colors.red,
		fontFamily: 'Times New Roman',
		textAlign: 'center'
	},
	emphasized: {
		fontWeight: 'bold',
		fontStyle: 'italic'
	},
	button: {
		borderColor: Colors.red,
		borderWidth: 2,
		borderRadius: 3,
		padding: 10
	},
	buttonText: {
		fontSize: 18,
		color: Colors.red
	}
});
