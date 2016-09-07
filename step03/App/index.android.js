/**
 * Modified Starter React Native App: Now With Navigation!
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Navigator, BackAndroid } from 'react-native';
import Main from './src/components/Main';

// This variable is filled after <Navigator /> is initialized
var navigator;

// This handles the Android back button press to start over (and nothing else)
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.popToTop();
        return true;
    }
    return false;
});

class App extends Component {
  renderScene(route, navigator) {
    const Component = route.component;
    return (
      <Component
        navigator={navigator}
        route={route}
        {...route.passProps}
      />
    )
  }
  render() {
    return (
      <Navigator
        ref={(nav) => { navigator = nav;}}
        renderScene={this.renderScene}
        initialRoute={{
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
