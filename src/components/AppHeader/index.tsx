import React from 'react';
import {View, Text} from 'react-native';
import LocationInput from '../LocationInput';
import {styles} from './styles';

const AppHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Hey</Text>
        <Text style={styles.headerText}>There!</Text>
      </View>

      {/* Location Input */}
      <LocationInput />
    </View>
  );
};

export default AppHeader;
