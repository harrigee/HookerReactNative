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
      from:'From ' + this.props.data.from.format('HH:mm'),
      to:'To ' + this.props.data.to.format('HH:mm'),
      isDateTimePickerVisible: false
    };
  }

  showDateTimePickerFrom = () => this.setState({ isDateTimePickerVisible: true, isFrom: true })
  showDateTimePickerTo = () => this.setState({ isDateTimePickerVisible: true, isFrom: false })
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  handleDatePicked = (date) => {
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

    this.hideDateTimePicker()
  }

  render() {
    return (
      <View style={{backgroundColor: 'rgba(34,53,69,0.95)', flex:1}}>
       <Text style={{color:'white', fontWeight:'200', fontSize:22, textAlign:'center', paddingLeft:32, paddingRight:32, paddingTop:32, paddingBottom:48}}>
         Please select a timeframe for your booking.
       </Text>
       <Icon
         name='clock-o'
         type='font-awesome'
         size={96}
         color='white'
         backgroundColor='rgba(220,40,140,1)'
         onPress={() => this.props.onModalPress()} />
       <View style={styles.buttons}>
         <Button
           icon={{name: 'arrow-left', type: 'font-awesome', color: 'rgba(220,40,140,1)', size: 38}}
           backgroundColor= 'rgba(40,210,150,1)'
           fontSize={24}
           fontWeight={'bold'}
           onPress={this.showDateTimePickerFrom}
           title={this.state.from}
           color='rgba(220,40,140,1)'
           accessibilityLabel="timeslotButton"/>
         <Button
           icon={{name: 'arrow-right', type: 'font-awesome', color: 'rgba(40,210,150,1)', size: 38}}
           backgroundColor='rgba(220,40,140,1)'
           fontSize={24}
           fontWeight={'bold'}
           onPress={this.showDateTimePickerTo}
           title={this.state.to}
           color='rgba(40,210,150,1)'
           iconRight='true'
           accessibilityLabel="timeslotButton"/>
         <DateTimePicker
           titleIOS={this.state.isFrom ? 'Select your start time' : 'Select your end time'}
           mode={'time'}
           is24Hour={true}
           date={this.props.data.from.toDate()}
           minimumDate={this.props.data.from.toDate()}
           maximumDate={this.props.data.to.toDate()}
           isVisible={this.state.isDateTimePickerVisible}
           onConfirm={this.handleDatePicked}
           onCancel={this.hideDateTimePicker}
         />
        </View>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  buttons: {
    flex:1,
    justifyContent: 'center',
    paddingBottom:196
  },
});

export default BookRoom;
