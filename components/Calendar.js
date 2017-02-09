import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import CalendarDatePicker from 'react-native-calendar-datepicker';
import Moment from 'moment';

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date:Moment()
    };
  }

  componentDidMount() {
    console.log(Moment().startOf("2014-04-25T01:32:21.196+0600"));
  }

  setMoment = (date) => {
    console.log(date);
    this.setState({date});
  }

    render() {
        return (
          <View>
            <CalendarDatePicker
              onChange={(date) => this.setMoment(date)}
              selected={this.state.date}
              minDate={Moment()}
              maxDate={Moment().add(10, 'years').startOf()}
              />
          </View>
        );
    }
}

export default Calendar;
