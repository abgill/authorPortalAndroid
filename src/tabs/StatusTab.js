import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    paddingTop: '2%'
  },
  subheading: {
    fontSize: 14,
    fontWeight: '600',
    paddingBottom: '1%'
  },
  status: {
    fontSize: 16,
  },
  tabContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '5%',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5%',
    marginRight: '5%',
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2.5%',
    marginBottom: '2.5%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(200, 199, 204)',
    width: '100%',
    marginBottom: '2.5%',
    alignItems: 'center',
    marginTop: '5%',
  }
});

const Divider = <View style={styles.divider}/>;

/*
    Name: String,
    Author: String,
    Description: String,
    Status: String,
    Events: [{
        Name: String,
        Editor_id: String,
        Type: String,
        Description: String,
        isRead: String
    }],
    Editors: [String],
  lastUpdated: {type : Date, default: Date.now}
*/

class StatusTab extends Component {

  renderSection = (subheading, details) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.subheading}>{subheading}</Text>
        <Text style={styles.status}>{details}</Text>
      </View>
    );
  }

  render() {
    const {name, author, description, status, lastUpdated} = this.props.submission;
    const time = new Date(parseInt(lastUpdated));

    return (
      <View style={styles.tabContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{author}</Text>
        </View>
        {Divider}
        {this.renderSection('Status', status)}
        {this.renderSection('Description', description)}
        {this.renderSection('Last Updated', time.toLocaleString())}
      </View>
    );
  }
}

StatusTab.propTypes = {
  submission: PropTypes.object.isRequired,
};

export default StatusTab;
