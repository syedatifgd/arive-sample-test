import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: {height: 2, width: 0},
    elevation: 2,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  inactiveDot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 6,
    marginTop: 3,
    marginBottom: 3,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {height: 1, width: 0},
    elevation: 2,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 6,
    marginTop: 3,
    marginBottom: 3,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {height: 1, width: 0},
    elevation: 2,
  },
  image: {
    width: screenWidth,
    flex: 1,
  },
  pagination: {
    position: 'absolute',
    top: 190,
  },
});
