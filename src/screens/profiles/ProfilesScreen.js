import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

class ProfilesScreen extends Component {
  /**
   * Load icon for Home tab
   */
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.redColor
    },
    tabBarLabel: 'Profile',
    tabBarIcon: ({tintColor}) => (
      <MaterialIcons
        name="account-circle"
        size={25}
        color={tintColor}
      />
    ),
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text>Profile screen</Text>
      </View>
    );
  }
}

export default ProfilesScreen;
