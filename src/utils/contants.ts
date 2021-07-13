import {StatusBar, Platform} from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export {STATUSBAR_HEIGHT, APPBAR_HEIGHT};
