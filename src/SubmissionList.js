import React, {Component} from 'react';
import {View, FlatList, AsyncStorage, ActivityIndicator, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import {SubmissionCard} from './cards';
import {colors} from './utils';

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
        isRead: String,
        timestamp: {type : Date, default: Date.now}
    }],
    Editors: [String],
  lastUpdated: {type : Date, default: Date.now}
*/

const styles = StyleSheet.create({
  centerView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%'
  }
});

async function retrieveItem(key) {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.error(error.message);
  }
}

class SubmissionList extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Submissions',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      localData: [],
      loading: true,
    };
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    this.updateLocalStorage();
  }

  updateLocalStorage = () => {
    retrieveItem('localData').then(data => {
      if (data !== null) {
        data.sort((a, b) => {
          if (a.status === 'Pass' || a.status === 'Published') {
            return 1;
          } else if (b.status === 'Pass' || b.status === 'Published') {
            return -1;
          } else {
            return a.lastUpdated < b.lastUpdated;
          }
        });
      }
      this.setState({localData: data}, () => {
        this.setState({loading: false})
        ;
      });
    }).catch(err => {
      console.error(err.message);
    });
  }

  pushSubmissionScreen = submission => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'AuthorPortal.Submission',
        passProps: {
          submission,
        },
        options: {
          topBar: {
            title: {
              text: submission.name,
            },
          }
        }
      }
    });
  }

  pushSettingsScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'AuthorPortal.Settings',
        options: {
          topBar: {
            title: {
              text: 'Settings',
            },
          }
        }
      }
    });
  }

  render() {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [{
          id: 'menuButton',
          component: {
            name: 'AuthorPortal.IconButton',
            passProps: {
              name: 'dots-vertical',
              size: 24,
              color: 'white',
              handlePress: this.pushSettingsScreen,
            }
          }
        }]
      }
    });

    if (this.state.loading) {
      return (
        <View style={styles.centerView}>
          <ActivityIndicator size="large" color={colors.blue}/>
        </View>
      );
    } else {
      return (
        <FlatList
          contentContainerStyle={{
            flex: -1,
            justifyContent: 'flex-start',
            marginTop: 10
          }}
          data={this.state.localData}
          renderItem={({item}) => (
            <SubmissionCard
              submission={item}
              handlePress={this.pushSubmissionScreen}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  }
}

SubmissionList.propTypes = {
  navigator: PropTypes.object,
  componentId: PropTypes.string
};

export default SubmissionList;
