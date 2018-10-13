import React, {PureComponent} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {trunc} from '../utils';
import Navigation from 'react-native-navigation';


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingBottom: '1%',
    fontWeight: '500',
  },
  title2: {
    fontSize: 16,
    paddingBottom: '1%',
  },
  subtitle: {
    fontSize: 14,
    paddingBottom: '1%',
  },
  caption: {
    fontSize: 12,
    paddingBottom: '1%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    alignSelf: 'center',
    paddingTop: '2.5%',
    paddingRight: '5%',
    paddingBottom: '2.5%',
    paddingLeft: '5%'
  },
});

class EventCard extends PureComponent {

  handlePress = () => {
    this.props.handlePress(this.props.event, this.props.editor);
  }

  render() {

    const {name: eventName, type, description, timestamp} = this.props.event;
    const {name: editorName, publisher} = this.props.editor;

    const time = new Date(parseInt(timestamp));

    return (
      <TouchableOpacity style={styles.card} onPress={this.handlePress}>
        <Text style={styles.title}>{eventName}</Text>
        <Text style={styles.title2}>{type}</Text>
        <Text style={styles.subtitle}>{editorName} ({publisher})</Text>
        <Text style={styles.caption}>{time.toLocaleString()}</Text>
        <Text style={styles.caption}>{trunc(description, 55, '...')}</Text>
      </TouchableOpacity>
    );
  }
}

EventCard.propTypes = {
  navigator: PropTypes.object,
  componentId: PropTypes.string,
  handlePress: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  editor: PropTypes.object.isRequired,
};

export default EventCard;
