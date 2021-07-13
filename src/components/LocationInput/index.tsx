import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';

// Styles
import {styles} from './styles';

// Images or Icons
import PinIcon from '../../../images/pin.png';

interface LocationInputProps {
  onPressMyLocation: Function;
}

const LocationInput = ({onPressMyLocation}: LocationInputProps) => {
  return (
    <TouchableOpacity style={styles.root} onPress={() => onPressMyLocation()}>
      <Image source={PinIcon} resizeMode="cover" style={styles.pinIcon} />
      <Text style={styles.myLocationText}>My Location</Text>
    </TouchableOpacity>
  );
};

LocationInput.defaultProps = {
  onPressMyLocation: () => {},
};

export default LocationInput;
