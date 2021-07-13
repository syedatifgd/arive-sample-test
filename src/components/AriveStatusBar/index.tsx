import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {styles} from './styles';

interface AriveStatusBarProps {
  backgroundColor: string;
}

const AriveStatusBar = ({
  backgroundColor,
  ...restProps
}: AriveStatusBarProps) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...restProps} />
    </SafeAreaView>
  </View>
);

export default AriveStatusBar;
