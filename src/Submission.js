import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StatusTab, NotificationsTab, EditorsTab, TimelineTab
} from './tabs';
import {colors} from './utils';

const styles = StyleSheet.create({
  iconActive: {
    fontSize: 35,
    color: colors.blue,
  },
  iconInactive: {
    fontSize: 35,
    color: 'rgb(200, 199, 204)',
  },
  buttonContainer: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'
  },
  textActive: {
    fontSize: 12,
    color: colors.blue,
  },
  textInactive: {
    fontSize: 12,
    color: 'rgb(200, 199, 204)',
  },
});

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    };
  }

  renderTabs = () => {
    switch (this.state.tab) {
      case 0:
        return (
          <NotificationsTab
            submission={this.props.submission}
            navigator={this.props.navigator}
            componentId={this.props.componentId}
          />
        );
      case 1:
        return (
          <EditorsTab
            submission={this.props.submission}
            navigator={this.props.navigator}
            componentId={this.props.componentId}
          />
        );
      case 2:
        return (
          <TimelineTab
            submission={this.props.submission}
            navigator={this.props.navigator}
            componentId={this.props.componentId}
          />
        );
      case 3:
        return (
          <StatusTab
            submission={this.props.submission}
            navigator={this.props.navigator}
            componentId={this.props.componentId}
          />
        );
      default:
        return (
          <NotificationsTab
            submission={this.props.submission}
            navigator={this.props.navigator}
            componentId={this.props.componentId}
          />
        );
    }
  }

  renderButtons = () => {
    const {tab} = this.state;
    const NotificationButton = (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.switchTab(0)}
      >
        <Icon
          name="bell"
          style={tab === 0 ? styles.iconActive : styles.iconInactive}
        />
        <Text
          style={tab === 0 ? styles.textActive : styles.textInactive}
        >
          Notifications
        </Text>
      </TouchableOpacity>
    );
    const EditorsButton = (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.switchTab(1)}
      >
        <Icon
          name="account-edit"
          style={tab === 1 ? styles.iconActive : styles.iconInactive}
        />
        <Text
          style={tab === 1 ? styles.textActive : styles.textInactive}
        >
          Editors
        </Text>
      </TouchableOpacity>
    );
    const TimelineButton = (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.switchTab(2)}
      >
        <Icon
          name="altimeter"
          style={tab === 2 ? styles.iconActive : styles.iconInactive}
        />
        <Text
          style={tab === 2 ? styles.textActive : styles.textInactive}
        >
          Timeline
        </Text>
      </TouchableOpacity>
    );
    const InformationButton = (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.switchTab(3)}
      >
        <Icon
          name="information"
          style={tab === 3 ? styles.iconActive : styles.iconInactive}
        />
        <Text
          style={tab === 3 ? styles.textActive : styles.textInactive}
        >
          Information
        </Text>
      </TouchableOpacity>
    );
    return (
      <React.Fragment>
        {NotificationButton}
        {EditorsButton}
        {TimelineButton}
        {InformationButton}
      </React.Fragment>
    );
  }

  switchTab = tab => {
    this.setState({tab});
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, width: '100%'}}>
          {this.renderTabs()}
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: 'rgb(200, 199, 204)',
            flex: -1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around',
            width: '100%', height: '11%',
          }}>
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}

Submission.propTypes = {
  navigator: PropTypes.object,
  componentId: PropTypes.string,
  submission: PropTypes.object.isRequired,
};

export default Submission;
