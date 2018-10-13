import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class Divider extends PureComponent {
  styles = StyleSheet.create({
    divider: {
      borderBottomWidth: this.props.height,
      borderBottomColor: this.props.color,
      width: this.props.width,
      alignSelf: 'center',
      marginTop: this.props.marginTop,
      marginBottom: this.props.marginBottom,
    }
  });

  render() {
    return <View style={this.styles.divider}/>;
  }
}

Divider.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
};

Divider.defaultProps = {
  width: '90%',
  color: 'rgb(200, 199, 204)',
  height: 1,
  marginTop: '1%',
  marginBottom: '1%',
};

export default Divider;
