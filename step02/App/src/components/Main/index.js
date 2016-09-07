import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Theme } from '../../theme';
import { Loader } from '../Loader';

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
		}, 6000)
	}

  render() {
    return (
			// Enter the Hipster-Ipsum --> http://hipsum.co/
			<ScrollView style={[Theme.scrollView]}>
      { this.state.loading ?
				<View style={[Theme.container, {padding: 40}]}>
					<Loader />
				</View>
				:
				<View style={[Theme.container, {padding: 40}]}>
					<View style={{paddingBottom: 20}}>
					<Text>Pug thundercats ethical gastropub. Chambray mlkshk seitan PBR&B salvia ethical. Chicharrones beard microdosing offal, celiac yr blue bottle kitsch. Vinyl skateboard messenger bag kinfolk. Neutra small batch banjo, letterpress photo booth lumbersexual lo-fi narwhal flexitarian kombucha ugh scenester four dollar toast cred. 3 wolf moon meditation sustainable drinking vinegar kitsch food truck, blog tilde etsy photo booth. Leggings pop-up waistcoat cronut offal cray letterpress four loko, semiotics trust fund etsy.</Text>
					</View>
					<View style={{paddingBottom: 20}}>
					<Text>
					Banh mi drinking vinegar paleo you probably haven't heard of them, portland occupy leggings beard bushwick. Farm-to-table salvia humblebrag fixie bespoke mumblecore marfa cray tousled. Microdosing synth hammock, master cleanse kale chips meggings cred gochujang trust fund swag leggings tacos iPhone. Chartreuse tousled try-hard tote bag. Squid umami gentrify selfies crucifix tumblr. Dreamcatcher crucifix keytar, roof party ugh keffiyeh trust fund cray tofu echo park iPhone etsy mixtape plaid beard. Gluten-free pickled literally, pitchfork chillwave butcher fashion axe polaroid cardigan fixie lo-fi offal actually scenester kale chips.</Text>
					</View>
					<View style={{paddingBottom: 20}}>
					<Text>
					Mlkshk celiac ethical pinterest, chicharrones austin typewriter four dollar toast tacos waistcoat hashtag occupy pour-over trust fund tote bag. Hammock distillery skateboard readymade, pabst chicharrones synth butcher godard asymmetrical bicycle rights +1 brunch. Gluten-free tumblr four dollar toast, chia offal biodiesel poutine fap pug chartreuse yuccie ethical post-ironic. Yuccie man braid try-hard gastropub, deep v waistcoat venmo cliche meditation iPhone salvia health goth. Photo booth biodiesel tattooed, sriracha pickled post-ironic forage williamsburg venmo pitchfork whatever aesthetic. Selfies wayfarers crucifix, street art chartreuse church-key occupy typewriter. Hammock locavore messenger bag, try-hard banh mi tattooed readymade.</Text>
					</View>
				</View>
			}
			</ScrollView>
    );
  }
}
