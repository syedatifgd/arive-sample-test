import {StyleSheet, Dimensions} from 'react-native';
const {height: screenHeight, width: sreenWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    height: screenHeight / 1.9,
  },
  lowerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  lowerContainerItem: {
    width: 100,
    height: 140,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  bottomBar: {
    height: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBarInnerContainer: {
    flexDirection: 'row',
  },
  rocketIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  txtBold: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    marginHorizontal: 5,
  },
  txtRegular: {
    color: 'white',
    fontSize: 18,
  },
  btnGetStarted: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#476BDF',
    marginTop: 5,
  },
  btnGetStartedText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  floatingButton: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 120,
    right: 10,
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonImage: {
    width: 25,
    height: 25,
  },
});
