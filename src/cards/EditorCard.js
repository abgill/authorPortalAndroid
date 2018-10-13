import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Snackbar from 'react-native-snackbar';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
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

class EditorCard extends PureComponent {

  handlePress = () => {
    Snackbar.show({
      title: 'Not Implemented 😬',
      duration: Snackbar.LENGTH_SHORT,
    });
  }

  render() {
    const {name, publisher, lastUpdated} = this.props.editor;
    const time = new Date(parseInt(lastUpdated));

    return (
      <TouchableOpacity style={styles.card} onPress={this.handlePress}>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 50, paddingBottom: 5}}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{publisher}</Text>
          <Text style={styles.caption}>Last Updated: {time.toLocaleString()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

EditorCard.propTypes = {
  navigator: PropTypes.object,
  componentId: PropTypes.string,
  handlePress: PropTypes.func.isRequired,
  editor: PropTypes.object.isRequired,
};

export default EditorCard;
