import Moment from 'moment';

export default class APIService {

  getRoomList = () => {
    return ['workshopRoom', 'meetingRoom', 'kitchen'];
  }

  getTimeSlots = (roomName) => {
    if (roomName===this.getRoomList()[0]) {
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
    else if (roomName===this.getRoomList()[1]) {
        return [
          {'from': Moment().add(6, 'hours'), 'to': Moment().add(7, 'hours'), 'available': false},
          {'from': Moment().add(8, 'hours'), 'to': Moment().add(9, 'hours'), 'available': true},
          {'from': Moment().add(10, 'hours'), 'to': Moment().add(11, 'hours'), 'available': false},
          {'from': Moment().add(12, 'hours'), 'to': Moment().add(13, 'hours'), 'available': true},
        ];
      }
      else if (roomName===this.getRoomList()[2]) {
        return [
          {'from': Moment(), 'to': Moment().add(1, 'hours'), 'available': true},
          {'from': Moment().add(2, 'hours'), 'to': Moment().add(3, 'hours'), 'available': false},
        ];
      }
      else {
        return[];
      }
    }
}
