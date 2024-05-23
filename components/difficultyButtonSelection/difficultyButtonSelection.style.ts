import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen');

const isTablet = width > 600;

export const styles = StyleSheet.create({

  difficultySelectionView: {
    backgroundColor: 'lightgrey',
    width: width / 2.5,
    height: height / 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderWidth: isTablet ? 5 : 3,
    borderRadius: 25,
    borderColor: 'red',
  },

  easyBorder: {
    borderColor: 'green',
  },

  mediumBorder: {
    borderColor: 'yellow',
  },

  hardBorder: {
    borderColor: 'orange',
  },

  expertBorder: {
    borderColor: 'red',
  },

  defaultBorder: {
    borderColor: 'grey',
  },

  image: {
    zIndex: 2,
    width: 75,  
    height: 75,
  },

  difficultyTextButton:  {
    fontSize: 20,
    fontWeight: '600',
  }

});