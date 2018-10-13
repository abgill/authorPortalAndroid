import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Divider, EventCard} from '../cards';
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

class TimelineTab extends Component {

  handlePress = (event, editor) => {
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
  }

  render() {
    const eventCount = this.props.submission.events.length;
    if (!this.props.submission.events || this.props.submission.events.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No events yet ☺️</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>All Events</Text>
          <Text
            style={[styles.count, {
              color: eventCount === 0 ? colors.grey : colors.red,
            }]}>
            {eventCount}
          </Text>
        </View>
        {HeaderDivider}
        <FlatList
          style={{flex: 1}}
          ItemSeparatorComponent={Divider}
          data={this.props.submission.events.sort((a, b) => {
            return a.timestamp < b.timestamp;
          })}
          renderItem={({item}) => (
            <EventCard
              event={item}
              editor={this.props.submission.editors.find(editor => editor._id === item.editor_id)}
              handlePress={this.handlePress}
              componentId={this.props.componentId}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

TimelineTab.propTypes = {
  navigator: PropTypes.object,
  componentId: PropTypes.string,
  submission: PropTypes.object.isRequired,
};

export default TimelineTab;
