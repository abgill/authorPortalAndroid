import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {EditorCard, Divider} from '../cards';
import PropTypes from 'prop-types';
import {colors} from '../utils';

const styles = StyleSheet.create({
  emptyContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    color: colors.grey,
    fontSize: 20,
    fontWeight: '600'
  }
});

class EditorsTab extends Component {

  handlePress = msg => {
    Snackbar.show({
      title: msg,
      duration: Snackbar.LENGTH_SHORT,
    });
  }

  render() {
    if (!this.props.submission.editors || this.props.submission.editors.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No editors yet ☺️</Text>
        </View>
      );
    }
    return (
      <FlatList
        ItemSeparatorComponent={Divider}
        data={this.props.submission.editors}
        renderItem={({item}) => <EditorCard editor={item} handlePress={() => this.handlePress(item.name)}/>}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

EditorsTab.propTypes = {
  submission: PropTypes.object.isRequired,
};

export default EditorsTab;
