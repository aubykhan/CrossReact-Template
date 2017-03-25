/**
 * Sample cross-platform home screen.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Cross-platform React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit ./libs/home.js. This project gives you a quick start for cross-platform app development using React Native.
        </Text>
        <Text style={styles.instructions_secondary}>
          For iOS, use Cmd+D to open developer menu. For Android, use Cmd+M.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: '#F5FCFF',
    padding: 16
  },
  welcome: {
    marginBottom: 16,
    fontSize: 20,
    textAlign: 'left',
    color: "rgb(189,16,224)"
  },
  instructions: {
    textAlign: 'left',
    color: "rgb(0,0,0)",
    marginBottom: 5,
  },
  instructions_secondary: {
    textAlign: 'left',
    color: "rgb(0,122,255)",
    marginBottom: 5,
  },

});

export { Home };