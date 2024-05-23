import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

const isTablet = width >= 600;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },

  logo: {
    width: isTablet ? width / 1.1 : width,
    height: isTablet ? height / 1.5 : height / 2,
    marginTop: '-1%',
  },

  mylaButtonView: {
    zIndex: 2,
    backgroundColor: 'pink',
    minWidth: isTablet ? width / 2.5 : width / 2.1,
    minHeight: isTablet ? '20%' : '10%',
    height: isTablet ? 150 : 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cadreMyla: {
    position: 'absolute',
    width: isTablet ? width / 1.7 : width / 1.5,
    height: isTablet ? height / 5.5 : height / 6.8,
  },

  userSelectionButton: {
    fontSize: isTablet ? 55 : 50,
    fontWeight: 'bold',
    color: 'black',
  },

  leoButtonView: {
    zIndex: 2,
    backgroundColor: 'blue',
    minWidth: isTablet ? width / 2.5 : width / 2.1,
    minHeight: isTablet ? '20%' : '10%',
    height: isTablet ? 140 : 72,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cadreLeo: {
    position: 'absolute',
    width: isTablet ? width / 2.2 : width / 1.8,
    height: isTablet ? height / 5.3 : height / 7,
    top: isTablet ? -36 : -25,
  },
});
