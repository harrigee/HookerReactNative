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

import * as firebase from 'firebase';
import CalendarList from './components/CalendarList'
import Swiper from 'react-native-swiper';
import Moment from 'moment';

vw = (percentageWidth) => {
    return Dimensions.get('window').width * (percentageWidth / 100);
}

vh = (percentageHeight) => {
    return Dimensions.get('window').height * (percentageHeight / 100);
}

export default class HookerReactNative extends Component {

  constructor() {
    super();
    this.state = {
      screenName:['workshopRoom', 'meetingRoom', 'kitchen'],
      index:0,
    };
  }

  onMomentumScrollEnd = (e, state, context) => {
    this.setState({index:state.index});
  }

  getTimeSlots = () => {
    return [
        {'from': Moment(), 'to': Moment().add(1, 'hours'), 'available': true},
        {'from': Moment().add(2, 'hours'), 'to': Moment().add(3, 'hours'), 'available': false},
        {'from': Moment().add(4, 'hours'), 'to': Moment().add(5, 'hours'), 'available': true},
        {'from': Moment().add(6, 'hours'), 'to': Moment().add(7, 'hours'), 'available': false},
        {'from': Moment().add(8, 'hours'), 'to': Moment().add(9, 'hours'), 'available': true},
        {'from': Moment().add(10, 'hours'), 'to': Moment().add(11, 'hours'), 'available': false},
        {'from': Moment().add(12, 'hours'), 'to': Moment().add(13, 'hours'), 'available': true},
    ]
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
              {this.state.screenName.map((item, index) => {
                return(
                  <CalendarList key={index} screenName={item} timeslots={this.getTimeSlots()}/>
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
