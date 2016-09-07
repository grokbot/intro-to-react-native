import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Theme, Color } from "../../theme";

export class Loader extends Component {
	render() {
		return (
			<ActivityIndicator size={45} style={[Theme.loader, Theme.centered]} color={Color.red} />
		)
	}
}
