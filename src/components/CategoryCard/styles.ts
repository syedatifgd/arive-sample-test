import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: {height: 2, width: 0},
    elevation: 2,
    borderRadius: 10,
  },
  catImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  catNameText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  catNameContainer: {
    height: 45,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
