import { Dimensions, StyleSheet } from 'react-native'

export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({

  difficultySelectionView: {
    zIndex: 2,
    backgroundColor: 'grey',
    width: width / 2.5,
    height: height / 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

});