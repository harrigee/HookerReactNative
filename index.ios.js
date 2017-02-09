/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Calendar from './components/Calendar'

export default class HookerReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/background.png')} style={styles.imageContainer}>
        <View style={styles.innerLayout}>
          <Calendar/>
        </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },
  innerLayout: {
    top:64,
    zIndex:1
  },
});

AppRegistry.registerComponent('HookerReactNative', () => HookerReactNative);
