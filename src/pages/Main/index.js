import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class Main extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Template Básico com:</Text>
        <Text>React Navigation</Text>
        <Text>React Native Gesture Handler</Text>
        <Text>React Native Vector Icons</Text>
        <Text>Styled Components</Text>
        <Text>Axios</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  }
});

