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
    width: isTablet ? width : width,
    height: isTablet ? height / 1.7 : height / 2,
    marginTop: '-1%',
  },

  mylaButtonView: {
    zIndex: 2,
    backgroundColor: 'pink',
    minWidth: isTablet ? 320 : 200,
    minHeight: isTablet ? 150 : 70,
    height: isTablet ? 150 : 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },

  cadreMyla: {
    position: 'absolute',
    width: isTablet ? 450 : 250,
    height: isTablet ? 200 : 120,
  },

  userSelectionButton: {
    fontSize: isTablet ? 55 : 50,
    fontWeight: 'bold',
    color: 'black',
  },

  leoButtonView: {
    zIndex: 2,
    backgroundColor: 'blue',
    minWidth: isTablet ? 320 : 200,
    minHeight: isTablet ? 150 : 92,
    height: isTablet ? 150 : 92,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cadreLeo: {
    position: 'absolute',
    width: isTablet ? 365 : 235,
    height: isTablet ? 200 : 120,
    top: isTablet ? -38 : -23,
  },
});
