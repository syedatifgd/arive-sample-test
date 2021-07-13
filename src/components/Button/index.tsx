import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

interface ButtonProps {
  onPress: Function;
  styles: object;
  buttonText: string;
  buttonTextStyles: object;
}

const Button = ({
  onPress,
  styles,
  buttonText,
  buttonTextStyles,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles}>
      <Text style={buttonTextStyles}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  onPress: () => {},
  styles: {},
  buttonText: '',
  buttonTextStyles: {},
};

export default Button;
