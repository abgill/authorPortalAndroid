import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const colors = {
  red: '#DD4830',
  blue: '#008AFF',
  grey: '#8e8e93',
  yellow: '#ffcc00',
  green: '#4cd964',
  black: 'black',
  darkgrey: '#878787',
  orange: '#ff9500',
  darkblue: '#5856d6',
  lightblue: '#5ac8fa',
  pink: '#ff2d55',
};

function trunc(str, length, ending) {
  if (length === null) {
    length = 100;
  }
  if (ending === null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

class IconButton extends PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={this.props.handlePress} >
        <Icon name={this.props.name} style={{fontSize: this.props.size, color: this.props.color}}/>
      </TouchableOpacity>
    );
  }
}

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export {
  colors, IconButton, trunc
};
