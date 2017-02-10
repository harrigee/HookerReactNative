import React, {Component} from 'react';
import {
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

import Calendar from './Calendar'
import Swiper from 'react-native-swiper';

class CalendarList extends Component {

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

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
              {'description': 'available from 00:00 to 08:00', 'available': true},
              {'description': 'not available from 08:00 to 09:00', 'available': false},
              {'description': 'available from 09:00 to 11:00', 'available': true},
              {'description': 'not available from 11:00 to 12:00', 'available': false},
              {'description': 'available from 12:00 to 14:00', 'available': true},
              {'description': 'not available from 14:00 to 18:00', 'available': false},
              {'description': 'available from 18:00 to 00:00', 'available': true},
      ])
    };
  }

  setMoment = (date) => {
    this.setState({date});
  }

    render() {
        return (
          <View style={styles.innerLayout}>
            <Text style={styles.screenName}>#{this.props.screenName}</Text>
            <ListView renderHeader={this._renderHeader} style={styles.listView} dataSource={this.state.dataSource} renderRow={(rowData) =>
              <View style={styles.rowButtons}>
                <Button
                  icon={rowData.available ? {name: 'check-circle', color: 'rgba(40,210,150,1)', size: 24} : {name: 'remove-circle', color: 'rgba(220,40,140,1)', size: 24}}
                  backgroundColor= 'rgba(0,0,0,0)'
                  fontSize={16}
                  fontWeight={'100'}
                  onPress={()=>this.onButtonPress(rowData.description)}
                  title={rowData.description}
                  color='white'
                  accessibilityLabel="Learn more about this purple button"/>
              </View>}/>
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

export default CalendarList;
