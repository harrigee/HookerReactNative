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
  ListView
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

  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      screenName:['workshopRoom', 'meetingRoom', 'kitchen'],
      index:0,
      dataSource: ds.cloneWithRows([
              'available from 00: to 08:00',
              'not available from 08:00 to 09:00',
              'available from 09:00 to 11:00',
              'not available from 11:00 to 12:00',
              'available from 12:00 to 14:00',
              'not available from 14:00 to 18:00',
              'available from 18:00 to 00:00',
      ])
    };
  }

  onMomentumScrollEnd = (e, state, context) => {
    this.setState({index:state.index});
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/background.png')} style={styles.imageContainer}>
          <Swiper showsButtons={true}
            dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4}} />}
              nextButton={<Text style={styles.buttonText}>›</Text>}
              prevButton={<Text style={styles.buttonText}>‹</Text>}
              onMomentumScrollEnd ={this.onMomentumScrollEnd}
              style={styles.swiper}
              >
              <View style={styles.innerLayout}>
                <Text style={styles.screenName}>#{this.state.screenName[0]}</Text>
                <View style={styles.calendar}>
                  <Calendar/>
                </View>
                <ListView style={styles.listView} dataSource={this.state.dataSource} renderRow={(rowData) =>
                  <View>
                    <Text style={styles.listText}>{rowData}</Text>
                  </View>}/>
                <View style={styles.footerView}></View>
              </View>
              <View style={styles.innerLayout}>
                <Text style={styles.screenName}>#{this.state.screenName[1]}</Text>
                <View style={styles.calendar}>
                  <Calendar/>
                </View>
                <ListView style={styles.listView} dataSource={this.state.dataSource} renderRow={(rowData) =>
                  <View>
                    <Text style={styles.listText}>{rowData}</Text>
                  </View>}/>
                <View style={styles.footerView}></View>
              </View>
              <View style={styles.innerLayout}>
                <Text style={styles.screenName}>#{this.state.screenName[2]}</Text>
                <View style={styles.calendar}>
                  <Calendar/>
                </View>
                <ListView style={styles.listView} dataSource={this.state.dataSource} renderRow={(rowData) =>
                  <View>
                    <Text style={styles.listText}>{rowData}</Text>
                  </View>}/>
                <View style={styles.footerView}></View>
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
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  calendar: {
    flex:1.1,
    paddingLeft:64,
    paddingRight:64,
    alignSelf:'center',
  },
  innerLayout: {
    flex:1,
  },
  listView: {
    flex:0.1,
    marginTop:64,
    alignSelf:'center'
  },
  footerView: {
    flex:0.3,
  },
  listText: {
    fontSize:18,
    padding:4,
  },
  buttonText: {
    color:'black',
    fontSize:48
  },
  screenName: {
    flex:0.23,
    paddingTop:48,
    marginBottom:32,
    fontSize:40,
    textAlign:'right',
    color:'rgba(232,142,12,1)',
    fontWeight: 'bold',
    backgroundColor:'rgba(255,255,255,0.2)',
  }
});

AppRegistry.registerComponent('HookerReactNative', () => HookerReactNative);
