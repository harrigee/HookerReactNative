import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Icon } from 'react-native-elements'

class BookRoom extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{backgroundColor: 'rgba(34,53,69,1)', flex:1}}>
       <View style={{marginTop: 28, alignSelf:'flex-end', right:8}}>
         <Icon
           reverse
           name='times'
           type='font-awesome'
           color='rgba(232,142,12,1)'
           onPress={() => this.props.onModalPress()} />
       </View>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
});

export default BookRoom;
