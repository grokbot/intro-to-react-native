import { StyleSheet } from "react-native";

export const Colors = {
	blue: 'rgba(20,50,130,1)',
	red: 'rgba(130, 50, 50, 1)',
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
		backgroundColor: Colors.gray,
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
	}
});
