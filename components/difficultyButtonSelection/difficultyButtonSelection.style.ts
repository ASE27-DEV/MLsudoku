import { Dimensions, StyleSheet } from 'react-native'

export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({

  difficultySelectionView: {
    backgroundColor: 'lightgrey',
    width: width / 2.5,
    height: height / 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderWidth: 2,
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