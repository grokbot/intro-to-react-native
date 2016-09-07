import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Theme } from '../../theme';
import { Loader } from '../Loader';

export default class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		setTimeout(()=>{
			this.setState({loading: false});
		}, 2000);
	}

  render() {
		let finalValue = this.props.value;
		let results = this.props.results;
		let character = "";
		for(var name in results) {
			if(results[name] <= finalValue) {
				character = name;
			}
		}
		//TODO: Maybe return an image of the character?
    return (
			<View style={[Theme.container, Theme.main]}>
				<ScrollView style={[Theme.scrollView]}>
	      { this.state.loading ?
					<View style={[Theme.container, {padding: 40}]}>
						<Loader />
					</View>
					:
					<View style={[Theme.container, {paddingTop: 40}]}>
						<View style={[Theme.content, Theme.centered]}>
							<Text style={[Theme.text, Theme.title]}>YOU ARE: <Text style={Theme.emphasized}>{character}</Text></Text>
						</View>

						<View style={[Theme.content, Theme.centered]}>
							<TouchableHighlight onPress={()=>{this.props.navigator.popToTop()}} style={Theme.button}>
								<Text style={Theme.buttonText}>START OVER</Text>
							</TouchableHighlight>
						</View>
					</View>
				}
				</ScrollView>
			</View>
    );
  }
}
