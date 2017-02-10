import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  StatusBar,
  Modal,
  TouchableHighlight
} from 'react-native';

class BookRoom extends Component {

  constructor(props) {
    super(props);
  }
  render() {
      return (
        <View style={{backgroundColor: 'rgba(34,53,69,1)', flex:1}}>
         <View style={{marginTop: 64}}>
           <TouchableHighlight onPress={() => {
             this.props.onModalPress();
           }}>
             <Text>Hide Modal</Text>
           </TouchableHighlight>
         </View>
        </View>
      );
    }
}

const styles =  StyleSheet.create({

});

export default BookRoom;
