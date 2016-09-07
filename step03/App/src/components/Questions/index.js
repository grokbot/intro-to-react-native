import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Theme } from '../../theme';
import Results from '../Results';

export default class Questions extends Component {
	renderChoices(choices, step) {
		let newStep = step + 1;
		let Component = Questions;
		let currentValue = this.props.value;
		if(newStep > Object.keys(this.props.questions).length) {
			Component = Results;
		}
		return Object.keys(choices).map((choice, i)=>{
			return (
				<View style={[Theme.content, Theme.centered]} key={i}>
					<TouchableHighlight
						onPress={()=>{
							this.props.navigator.push({
								component: Component,
								passProps: {
									questions: this.props.questions,
									results: this.props.results,
									step: newStep,
									value: currentValue + this.props.questions[step].Choices[choice]
								}
							})
						}}
						style={Theme.button}>
						<Text style={Theme.buttonText}>{choice}</Text>
					</TouchableHighlight>
				</View>
			)
		})
	}
  render() {
		let step = this.props.step;
		let questionTitle = this.props.questions[step].Question.toUpperCase();
		let choices = this.props.questions[step].Choices;
    return (
			<View style={[Theme.container, Theme.main]}>
				<View></View>
				<ScrollView style={[Theme.scrollView]}>
					<View style={[Theme.container, {paddingTop: 40}]}>
						<View style={[Theme.content, Theme.centered]}>
							<Text style={[Theme.text, Theme.title]}>{questionTitle}</Text>
						</View>
						{this.renderChoices(choices, step)}
					</View>
				</ScrollView>
			</View>
    );
  }
}
