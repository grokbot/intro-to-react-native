import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Theme } from '../../theme';
import { Loader } from '../Loader';
import Questions from '../Questions';
import Config from "../../config/questions.json";

export default class Main extends Component {
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
    return (
			<View style={[Theme.container, Theme.main]}>
				<ScrollView style={[Theme.scrollView]}>
	      { this.state.loading ?
					<View style={[Theme.container, {padding: 40}]}>
						<Loader />
					</View>
					:
					<View style={[Theme.container, {paddingTop: 40}]}>
						<Image source={require("../../assets/strangerthings-title.jpg")} resizeMode="contain" style={[Theme.centered, {height: 250}]} />
						<View style={[Theme.content, Theme.centered]}>
							<Text style={[Theme.text, Theme.title]}>WHICH <Text style={Theme.emphasized}>STRANGER THINGS</Text> CHARACTER ARE YOU?</Text>
						</View>
						<View style={[Theme.content, Theme.centered]}>
							<TouchableHighlight
								onPress={()=>{this.props.navigator.push({
									component: Questions,
									passProps: {
										questions: Config.questions,
										results: Config.results,
										step: 1,
										value: 0}
									})
								}} 
								style={Theme.button}>
								<Text style={Theme.buttonText}>START</Text>
							</TouchableHighlight>
						</View>
					</View>
				}
				</ScrollView>
			</View>
    );
  }
}
