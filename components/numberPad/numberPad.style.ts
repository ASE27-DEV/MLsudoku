import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen');

const isTablet = width > 600;

export const styles = StyleSheet.create({

  container: {
    maxWidth: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  numberButton: {
    width: isTablet ? width/6 : width/7,
    height: 60,
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
  },
  numberText: {
    fontSize: 30,
  },

});