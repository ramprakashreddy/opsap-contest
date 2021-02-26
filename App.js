//Project By Ram Prakash Reddy
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Navigation from './src/navigation/Navigator';
import { loadAsync } from 'expo-font';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }
  async componentDidMount() {
    await loadAsync({
      "NeueHaasDisplay-Light": require("./assets/fonts/NeueHaasDisplay-Light.ttf"),
      "NeueHaasDisplay-Medium": require("./assets/fonts/NeueHaasDisplay-Mediu.ttf"),
      "NeueHaasDisplay-Bold": require("./assets/fonts/NeueHaasDisplay-Bold.ttf"),
    })
    this.setState({
      fontLoaded: true
    })
  }

  render() {
    if (this.state.fontLoaded)
      return (
        <Navigation />
      );
    else return (
      <View>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}
