/**
 * Modified Starter React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, View } from 'react-native';
 import { Theme } from './src/theme';
 import Main from './src/components/Main';

 class App extends Component {
   render() {
     return (
       <View style={[Theme.container, Theme.main]}>
         <Main />
       </View>
     );
   }
 }

AppRegistry.registerComponent('App', () => App);
