import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, AsyncStorage} from 'react-native';
import {Divider, NotificationCard} from '../cards';
import PropTypes from 'prop-types';
import {colors} from '../utils';
import {Navigation} from 'react-native-navigation';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingTop: '2.5%',
  },
  headerDivider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(200, 199, 204)',
    width: '100%',
    alignItems: 'center',
    marginTop: '2.5%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '1%',
  },
  count: {
    fontSize: 20,
    fontWeight: '600',
  }
});

const HeaderDivider = <View style={styles.headerDivider}/>;

class NotificationsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unreadCount: this.props.submission.events.filter(item => !item.isRead).length,
    };
  }

  handlePress = (event, editor) => {
    AsyncStorage.getItem('localData').then(raw => {
      const localData = JSON.parse(raw);
      const oldSubmission = localData.find(item => item._id === this.props.submission._id);
      const oldEvent = oldSubmission.events.find(item => item._id === event._id);
      oldEvent.isRead = true;
      AsyncStorage.setItem('localData', JSON.stringify(localData));
    });
    event.isRead = true;
    this.setState({unreadCount: this.state.unreadCount - 1}, () => {
      Navigation.push(this.props.componentId, {
        component: {
          name: 'AuthorPortal.EventDetails',
          passProps: {
            event,
            editor,
          },
          options: {
            topBar: {
              title: {
                text: event.type,
              },
            }
          }
        }
      });
    });
  }

  render() {
    const {unreadCount} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Notifications</Text>
          <Text
            style={[styles.count, {
              color: unreadCount === 0 ? colors.grey : colors.red,
            }]}>
            {unreadCount}
          </Text>
        </View>
        {HeaderDivider}
        <FlatList
          style={{flex: 1}}
          ItemSeparatorComponent={Divider}
          data={this.props.submission.events.filter(item => !item.isRead)}
          renderItem={({item}) => (
            <NotificationCard
              event={item}
              editor={this.props.submission.editors.find(editor => editor._id === item.editor_id)}
              handlePress={this.handlePress}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

NotificationsTab.propTypes = {
  navigator: PropTypes.object,
  componentId: PropTypes.string,
  submission: PropTypes.object.isRequired,
};

export default NotificationsTab;
