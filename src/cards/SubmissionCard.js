import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../utils.js';

const styles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  subtitle: {
    fontSize: 12
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: '100%',
    alignSelf: 'center',
    paddingRight: 5,
    paddingTop: 5,
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

class SubmissionCard extends PureComponent {

  render() {
    const {name, status, lastUpdated} = this.props.submission;
    const time = new Date(parseInt(lastUpdated));

    let iconName = 'help';
    let iconColor = colors.grey;
    let iconType = 'material';

    switch (status) {
      case 'Agent Recieved':
        iconName = 'email-check-outline';
        iconColor = colors.darkgrey;
        break;
      case 'Agent Submitted':
        iconName = 'timer-sand';
        iconColor = colors.darkgrey;
        break;
      case 'Under Review':
        iconName = 'forum-outline';
        iconColor = colors.yellow;
        break;
      case 'Under Contract':
        iconName = 'check-decagram';
        iconColor = colors.green;
        break;
      case 'Published':
        iconName = 'book';
        iconColor = colors.blue;
        iconType = 'fontawesome';
        break;
      case 'Auction':
        iconName = 'gavel';
        iconColor = colors.orange;
        break;
      case 'Pass':
        iconName = 'cancel';
        iconColor = colors.grey;
        break;
      default:
        break;
    }

    return (
      <TouchableOpacity style={styles.border} onPress={() => this.props.handlePress(this.props.submission)}>
        <View style={styles.card} opacity={status === 'Pass' ? 0.3 : 1}>
          <View style={{paddingRight: '5%'}}>
            {iconType === 'material' && (
              <MaterialIcon style={{fontSize: 50, color: iconColor}} name={iconName}/>
            )}
            {iconType === 'fontawesome' && (
              <FontAwesomeIcon style={{fontSize: 50, color: iconColor}} name={iconName}/>
            )}
          </View>
          <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 50, paddingBottom: 5}}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>Last Updated: {time.toLocaleString()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

SubmissionCard.propTypes = {
  navigator: PropTypes.object,
  componentId: PropTypes.string,
  handlePress: PropTypes.func.isRequired,
  submission: PropTypes.object.isRequired,
};

export default SubmissionCard;
