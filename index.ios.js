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
  Dimensions,
  StatusBar,
} from 'react-native';

import {
  Button
} from 'react-native-elements'

import APIService from './API/APIService'
import * as firebase from 'firebase';
import CalendarList from './components/CalendarList'
import Swiper from 'react-native-swiper';

vw = (percentageWidth) => {
    return Dimensions.get('window').width * (percentageWidth / 100);
}

vh = (percentageHeight) => {
    return Dimensions.get('window').height * (percentageHeight / 100);
}

export default class HookerReactNative extends Component {

  apiService = new APIService();

  constructor() {
    super();
    this.state = {
      screenNames:[],
      index:0,
    };
  }

  componentDidMount() {
    var saveThis = this;
    this.apiService.getRoomList()
    .then(function(response) {
        saveThis.setState({
            screenNames: response,
        });
    });
  }

  onMomentumScrollEnd = (e, state, context) => {
    this.setState({index:state.index});
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
          <Swiper showsButtons={true}
            dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
              nextButton={<Text style={styles.buttonText}>›</Text>}
              prevButton={<Text style={styles.buttonText}>‹</Text>}
              onMomentumScrollEnd ={this.onMomentumScrollEnd}
              style={styles.swiper}
              >
              {this.state.screenNames.map((item, index) => {
                return(
                  <CalendarList key={index} screenName={item}/>
                )
              })}
           </Swiper>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'rgba(34,53,69,1)'
  },
  buttonText: {
    fontSize:48,
    color:'white',
  }
});

AppRegistry.registerComponent('HookerReactNative', () => HookerReactNative);
