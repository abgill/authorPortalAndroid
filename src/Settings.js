import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {colors} from './utils';

const sampleData = [{
  _id: '5bc15252fc13ae1302000004',
  name: 'Cyberbully',
  author: 'Ernesto Hammingweigh',
  description: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
  status: 'Agent Recieved',
  lastUpdated: '1539360610000',
  events: [],
  editors: [],
},
{
  _id: '5bc15252fc13ae1302000005',
  name: 'Bonneville',
  author: 'Ernesto Hammingweigh',
  description: 'Vivamus vel nulla eget eros elementum pellentesque.',
  status: 'Under Review',
  lastUpdated: '1539180900000',
  editors: [
    {
      _id: 8,
      name: 'Reggy Wardel',
      publisher: 'Scholastic',
    },
    {
      _id: 7,
      name: 'Concordia Cudbird',
      publisher: 'HarperCollins',
    }
  ],
  events: [
    {
      _id: 12,
      name: 'convallis tortor',
      editor_id: 7,
      type: 'Under Review',
      description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      isRead: false,
      timestamp: '1539180900000'
    },
    {
      _id: 13,
      name: 'hac habitasse',
      editor_id: 7,
      type: 'Agent Submitted',
      description: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      isRead: true,
      timestamp: '1538443800000'
    },
    {
      _id: 14,
      name: 'fusce consequat nulla nisl nunc',
      editor_id: 8,
      type: 'Agent Submitted',
      description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      isRead: false,
      timestamp: '1538485920000'
    }
  ],
},
{
  _id: '5bc15252fc13ae1302000006',
  name: 'Get Over It',
  author: 'Ernesto Hammingweigh',
  description: 'Etiam vel augue.',
  status: 'Agent Submitted',
  lastUpdated: '1534388520000',
  editors: [
    {
      _id: 43,
      name: 'Chelsey Burnage',
      publisher: 'Scholastic',
    },
    {
      _id: 44,
      name: 'Indira McTague',
      publisher: 'HarperCollins',
    }
  ],
  events: [
    {
      _id: 6,
      name: 'ut odio cras',
      editor_id: 44,
      type: 'Agent Submitted',
      description: 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      isRead: false,
      timestamp: '1533737288000'
    },
    {
      _id: 1,
      name: 'habitasse platea',
      editor_id: 43,
      type: 'Agent Submitted',
      description: 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
      isRead: false,
      timestamp: '1534388520000'
    }
  ],
},
{
  _id: '5bc15252fc13ae1302000007',
  name: 'Double Dynamite',
  author: 'Ernesto Hammingweigh',
  description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
  status: 'Under Contract',
  lastUpdated: '1539369902000',
  events: [
    {
      _id: 1,
      name: 'curae nulla',
      editor_id: 1,
      type: 'Agent Submitted',
      description: 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
      isRead: true,
      timestamp: '1530478982000'
    }, {
      _id: 2,
      name: 'turpis donec posuere metus',
      editor_id: 1,
      type: 'Under Contract',
      description: 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      isRead: true,
      timestamp: '1539369902000'
    }, {
      _id: 3,
      name: 'sit amet diam in',
      editor_id: 1,
      type: 'Under Review',
      description: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
      isRead: true,
      timestamp: '1539193502000'
    }, {
      _id: 4,
      name: 'massa id nisl',
      editor_id: 2,
      type: 'Agent Submitted',
      description: 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
      isRead: true,
      timestamp: '1538524982000'
    }, {
      _id: 5,
      name: 'erat nulla tempus vivamus in',
      editor_id: 3,
      type: 'Agent Submitted',
      description: 'In congue. Etiam justo.',
      isRead: true,
      timestamp: '1528329966000'
    }
  ],
  editors: [
    {
      _id: 1,
      name: 'Gaven Proudman',
      publisher: 'Scholastic',
    },
    {
      _id: 2,
      name: 'Ricard Gotthard',
      publisher: 'HarperCollins',
    },
    {
      _id: 3,
      name: 'Velvet Huttley',
      publisher: 'Random House',
    }
  ]
}];



class Settings extends PureComponent {

  resetData = () => {
    try {
      AsyncStorage.setItem('localData', JSON.stringify(sampleData)).then(() => {
        Snackbar.show({
          title: 'Reset local data.',
          duration: Snackbar.LENGTH_SHORT,
        });
      });
    } catch (err) {
      console.error(err.message);
    }
  }


  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          height: '100%'
        }}
      >
        <TouchableOpacity onPress={this.resetData}>
          <Text style={{color: colors.blue, fontSize: 20}}>Reset Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Settings;
