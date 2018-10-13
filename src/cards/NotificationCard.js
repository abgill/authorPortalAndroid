import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingBottom: '1%',
    fontWeight: '500',
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
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: '100%',
    alignSelf: 'center',
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: '5%'
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(200, 199, 204)',
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  }
});

/*
  {
    _id: '1',
    name: 'Submitted to Scholastic',
    editor_id: '1',
    type: 'Agent Submitted',
    description: 'We submitted your book to Tom Harrison over at Scholastic!',
    isRead: false,
    timestamp: 1539141713433,
  }

  {
    _id: '1',
    name: 'Thomas Harrison',
    publisher: 'Scholastic',
    lastUpdated: '1539141713433'
  }
*/

class NotificationCard extends PureComponent {

  handlePress = () => {
    this.props.handlePress(this.props.event, this.props.editor);
  }

  render() {
    const {name: eventName, timestamp} = this.props.event;
    const {name: editorName, publisher} = this.props.editor;
    const time = new Date(parseInt(timestamp));

    return (
      <TouchableOpacity style={styles.card} onPress={this.handlePress}>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 50, paddingBottom: 5}}>
          <Text style={styles.title}>{eventName}</Text>
          <Text style={styles.subtitle}>{editorName} ({publisher})</Text>
          <Text style={styles.caption}>{time.toLocaleString()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

NotificationCard.propTypes = {
  navigator: PropTypes.object,
  componentId: PropTypes.string,
  handlePress: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  editor: PropTypes.object.isRequired,
};

export default NotificationCard;
