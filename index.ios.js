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
  Image,
  Dimensions
} from 'react-native';

import Calendar from './components/Calendar'
import Swiper from 'react-native-swiper';

vw = (percentageWidth) => {
    return Dimensions.get('window').width * (percentageWidth / 100);
}

vh = (percentageHeight) => {
    return Dimensions.get('window').height * (percentageHeight / 100);
}

export default class HookerReactNative extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/background.png')} style={styles.imageContainer}>
        <Swiper showsButtons={true}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
            activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            >
              <View style={styles.innerLayout}>
                <Calendar/>
              </View>
              <View style={styles.innerLayout}>
                <Calendar/>
              </View>
              <View style={styles.innerLayout}>
                <Calendar/>
              </View>
           </Swiper>
        </Image>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  innerLayout: {
    paddingTop: 64,
    width: this.vw(80),
    alignSelf:'center',
  },
  buttonText: {
    color:'black',
    fontSize:32
  }
});

AppRegistry.registerComponent('HookerReactNative', () => HookerReactNative);
