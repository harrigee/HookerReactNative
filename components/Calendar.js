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
  }

  setMoment = (date) => {
    this.setState({date});
  }

    render() {
        return (
          <View>
            <CalendarDatePicker
              onChange={(date) => this.setMoment(date)}
              selected={this.state.date}
              minDate={Moment().startOf('day')}
              maxDate={Moment().add(3, 'years').startOf()}
              yearMinTintColor={'rgba(232,142,12,1)'}
              yearMaxTintColor={'rgba(232,142,12,1)'}
              style={{
                alignSelf: 'center',
                marginTop: 20,
              }}
              barView={{
                backgroundColor: 'rgba(0,0,0,0)',
                padding: 10,
              }}
              barText={{
                fontWeight: 'bold',
                color: 'white',
              }}
              daySelectedText={{
                fontWeight: 'bold',
                backgroundColor: 'rgba(0,0,0,0.3)',
                color: 'rgba(232,142,12,1)',
                borderRadius: 15,
                overflow: 'hidden',
              }}
              dayHeaderText={{
                fontWeight: 'bold',
                color: 'rgba(232,142,12,1)',
              }}
              dayText={{
                color: 'white',
              }}
              monthText={{
                color: 'white',
                borderColor: 'rgba(232,142,12,1)',
              }}
              yearText={{
                color: 'rgba(232,142,12,1)',
              }}
              />
          </View>
        );
    }
}

export default Calendar;
