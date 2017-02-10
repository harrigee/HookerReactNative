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
  Dimensions,
  ListView,
  StatusBar,
} from 'react-native';

import {
  Button
} from 'react-native-elements'

import Calendar from './components/Calendar'
import CalendarList from './components/CalendarList'
import Swiper from 'react-native-swiper';

vw = (percentageWidth) => {
    return Dimensions.get('window').width * (percentageWidth / 100);
}

vh = (percentageHeight) => {
    return Dimensions.get('window').height * (percentageHeight / 100);
}

export default class HookerReactNative extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      screenName:['workshopRoom', 'meetingRoom', 'kitchen'],
      index:0,
    };
  }

  onMomentumScrollEnd = (e, state, context) => {
    this.setState({index:state.index});
  }

  _renderHeader() {
    return (
      <View style={styles.calendar}><Calendar/></View>
    )
  }

  onButtonPress = (value) => {
    console.log(value);
  };

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
    backgroundColor: 'rgba(34,53,69,1)'
  },
  screenName: {
    flex:0.07,
    paddingTop:40,
    paddingBottom:16,
    marginBottom:16,
    fontSize:40,
    textAlign:'right',
    color:'rgba(232,142,12,1)',
    fontWeight: 'bold',
    backgroundColor:'rgba(255,255,255,0.1)',
  },
  calendar: {
    flex:1.1,
    paddingLeft:64,
    paddingRight:64,
    marginBottom:16,
    alignSelf:'center',
  },
  buttonText: {
    fontSize:48,
    color:'white',
  },
  rowButtons: {
    left: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  listView: {
    marginTop:-8,
    marginBottom:128,
  },
});

AppRegistry.registerComponent('HookerReactNative', () => HookerReactNative);
