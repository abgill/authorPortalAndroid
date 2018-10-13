import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

// Event Schema: {
//   Name: String,
//   Editor_id: String,
//   Type: String,
//   Description: String,
//   isRead: String,
//   timestamp: {type : Date, default: Date.now}
// }

// EditorsSchema {
//   Name: String,
//   Publisher: {type: 'ObjectId', ref: 'Publishers'},
//   Phone: String,
//   Email_Address: String,
//   Mailing_Address: String,
//   lastUpdated : {type : Date, default: Date.now}
// }

class EventDetails extends Component {

  render() {
    const {event, editor} = this.props;
    const time = new Date(parseInt(event.timestamp));
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          flex: 1,
          height: '100%',
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5}}
      >
        <Text>Event Type: {event.type}</Text>
        <Text>Event Time: {time.toLocaleString()}</Text>
        <Text>Event Name: {event.name}</Text>
        <Text>Editor: {editor.name} ({editor.publisher})</Text>
        <Text>Event Description: {event.description}</Text>
      </View>
    );
  }
}

EventDetails.propTypes = {
  navigator: PropTypes.object,
  componentId: PropTypes.string,
  event: PropTypes.object.isRequired,
  editor: PropTypes.object.isRequired,
};

export default EventDetails;
