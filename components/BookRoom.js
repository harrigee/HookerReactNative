import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { Icon, Button } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Moment from 'moment';

class BookRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFrom:false,
      from:'From ',
      to:'To ',
      isDateTimePickerVisible: false
    };
  }

  _showDateTimePickerFrom = () => this.setState({ isDateTimePickerVisible: true, isFrom: true })
  _showDateTimePickerTo = () => this.setState({ isDateTimePickerVisible: true, isFrom: false })
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = (date) => {
    if (this.state.isFrom) {
      this.setState({
        from:'From ' + Moment(date).format('HH:mm')
      });
    }
    else {
      this.setState({
        to:'To ' + Moment(date).format('HH:mm')
      });
    }

    this._hideDateTimePicker()
  }

  render() {
    return (
      <View style={{backgroundColor: 'rgba(34,53,69,0.8)', flex:1}}>
       <View style={{marginTop: 28, alignSelf:'flex-end', right:8}}>
         <Icon
           reverse
           name='times'
           type='font-awesome'
           color='rgba(232,142,12,1)'
           onPress={() => this.props.onModalPress()} />
       </View>
       <View style={styles.buttons}>

         <Button
           icon={{name: 'arrow-left', type: 'font-awesome', color: 'rgba(40,210,150,1)', size: 38}}
           backgroundColor= 'rgba(0,0,0,0)'
           fontSize={24}
           fontWeight={'100'}
           onPress={this._showDateTimePickerFrom}
           title={this.state.from}
           color='white'
           accessibilityLabel="timeslotButton"/>

         <Button
           icon={{name: 'arrow-right', type: 'font-awesome', color: 'rgba(220,40,140,1)', size: 38}}
           backgroundColor= 'rgba(0,0,0,0)'
           fontSize={24}
           fontWeight={'100'}
           onPress={this._showDateTimePickerTo}
           title={this.state.to}
           color='white'
           accessibilityLabel="timeslotButton"/>

       <DateTimePicker
         titleIOS={'Select your time'}
         mode={'time'}
         is24Hour={true}
         isVisible={this.state.isDateTimePickerVisible}
         onConfirm={this._handleDatePicked}
         onCancel={this._hideDateTimePicker}
       />
     </View>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  buttons: {
    marginTop:64,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export default BookRoom;
